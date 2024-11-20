import {
  createApiKeysWorkflow,
  createInventoryLevelsWorkflow,
  createProductCategoriesWorkflow,
  createProductsWorkflow,
  createRegionsWorkflow,
  createSalesChannelsWorkflow,
  createShippingOptionsWorkflow,
  createShippingProfilesWorkflow,
  createStockLocationsWorkflow,
  createTaxRegionsWorkflow,
  linkSalesChannelsToApiKeyWorkflow,
  linkSalesChannelsToStockLocationWorkflow,
  updateStoresWorkflow,
} from '@medusajs/medusa/core-flows'
import { ExecArgs } from '@medusajs/framework/types'
import {
  ContainerRegistrationKeys,
  Modules,
  ProductStatus,
} from '@medusajs/framework/utils'
import { BOOK_MODULE } from 'src/modules/book'
import { LANGUAGE_MODULE } from 'src/modules/language'

import en_categories from '../library/raw-books/en.json'
import fr_categories from '../library/raw-books/fr.json'
import LanguageModuleService from 'src/modules/language/service'
import BookModuleService from 'src/modules/book/service'
import { AUTHOR_MODULE } from 'src/modules/author'

const DEFAULT_SALES_CHANNEL = 'Webshop'
const ZTF_AUTHOR_ID = '01JBVMR2MGMDGT7KGRNX0XHCYF'
const DEFAULT_FORMAT = 'Paperback'
const FORMAT_OPTIONS = { title: 'Format', values: [DEFAULT_FORMAT] }

export default async function seedDemoData({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)
  const fulfillmentModuleService = container.resolve(Modules.FULFILLMENT)
  const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL)
  const storeModuleService = container.resolve(Modules.STORE)
  const productModuleService = container.resolve(Modules.PRODUCT)
  const bookModuleService: BookModuleService = container.resolve(BOOK_MODULE)
  const languageModuleService: LanguageModuleService =
    container.resolve(LANGUAGE_MODULE)

  const populate = async (lang: string = 'en') => {
    let data: typeof en_categories = []
    if (lang === 'fr') {
      data = fr_categories
    } else if (lang === 'en') {
      data = en_categories
    }

    const [language] = await languageModuleService.listLanguages({ code: lang })
    for (const { title, books } of data) {
      logger.info(`-------------------- Category: ${title}`)

      // First of all, create the current category and get it back
      let categoryId: string = null
      let [category] = await productModuleService.listProductCategories({
        name: title,
      })
      if (!category) {
        const { id } = await productModuleService.createProductCategories({
          name: title,
          is_active: true,
        })
        categoryId = id
      } else {
        categoryId = category.id
      }

      // Create all the products within this category from the JSON raw data
      for (const book of books) {
        logger.info(`> ${book.title}`)

        const [product] = await productModuleService.listProducts({
          title: book.title,
        })
        if (!product) {
          // Here we are going to link created products to a new created book entity
          const links = []

          const {
            result: [createdProduct],
          } = await createProductsWorkflow(container).run({
            input: {
              products: [
                {
                  title: book.title,
                  description: book.description,
                  category_ids: [categoryId],
                  status: ProductStatus.PUBLISHED,
                  images: [],
                  options: [FORMAT_OPTIONS],
                  variants: [
                    {
                      title: `${book.title} ${DEFAULT_FORMAT}`,
                      sku: `${book.title.toUpperCase()}-${lang.toUpperCase()}-${DEFAULT_FORMAT.toUpperCase()}`,
                      options: {
                        Format: DEFAULT_FORMAT,
                      },
                      prices: [
                        {
                          amount: 1.99,
                          currency_code: 'eur',
                        },
                      ],
                    },
                  ],
                  sales_channels: [
                    {
                      id: defaultSalesChannel[0].id,
                    },
                  ],
                },
              ],
            },
          })

          // Create empty book
          const createdBook = await bookModuleService.createBooks({})

          // Then link the created book to ZTF as default author
          links.push({
            [BOOK_MODULE]: {
              book_id: createdBook.id,
            },
            [AUTHOR_MODULE]: {
              author_id: ZTF_AUTHOR_ID,
            },
          })

          // Link the created book to current language
          links.push({
            [BOOK_MODULE]: {
              book_id: createdBook.id,
            },
            [LANGUAGE_MODULE]: {
              language_id: language.id,
            },
          })

          // And link it to current created product
          links.push({
            [Modules.PRODUCT]: {
              product_id: createdProduct.id,
            },
            [BOOK_MODULE]: {
              book_id: createdBook.id,
            },
          })

          // Create the links then
          await remoteLink.create(links)
        } else {
          // This means that the product|book was previously created
          // We arrived here because this same book belongs to more than one category
          // So we should just update existing product, adding the new category
          await productModuleService.updateProducts(product.id, {
            category_ids: [...product.categories?.map(c => c.id), categoryId],
          })
        }
      }
    }
  }

  const countries = ['fr']

  logger.info('Seeding store data...')
  const [store] = await storeModuleService.listStores()
  let defaultSalesChannel = await salesChannelModuleService.listSalesChannels({
    name: DEFAULT_SALES_CHANNEL,
  })

  if (!defaultSalesChannel.length) {
    // create the default sales channel
    const { result: salesChannelResult } = await createSalesChannelsWorkflow(
      container,
    ).run({
      input: {
        salesChannelsData: [
          {
            name: DEFAULT_SALES_CHANNEL,
          },
        ],
      },
    })
    defaultSalesChannel = salesChannelResult
  }

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        supported_currencies: [
          {
            currency_code: 'eur',
            is_default: true,
          },
        ],
        default_sales_channel_id: defaultSalesChannel[0].id,
      },
    },
  })

  logger.info('Seeding region data...')
  const { result: regionResult } = await createRegionsWorkflow(container).run({
    input: {
      regions: [
        // {
        //   name: 'Europe',
        //   currency_code: 'eur',
        //   countries,
        //   payment_providers: ['pp_system_default'],
        // },
      ],
    },
  })

  const region = regionResult[0]
  logger.info('Finished seeding regions.')

  logger.info('Seeding tax regions...')
  await createTaxRegionsWorkflow(container).run({
    input: countries.map(country_code => ({
      country_code,
    })),
  })
  logger.info('Finished seeding tax regions.')

  logger.info('Seeding stock location data...')
  const { result: stockLocationResult } = await createStockLocationsWorkflow(
    container,
  ).run({
    input: {
      locations: [
        {
          name: 'Chez TAFEUMEWE',
          address: {
            city: 'Rouen',
            country_code: 'FR',
            address_1: '',
          },
        },
        {
          name: 'Chez TADMI',
          address: {
            city: 'Aubergenvilles',
            country_code: 'FR',
            address_1: '',
          },
        },
      ],
    },
  })

  await remoteLink.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocationResult[0].id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_provider_id: 'manual_manual',
    },
  })
  await remoteLink.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocationResult[1].id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_provider_id: 'manual_manual',
    },
  })

  logger.info('Seeding fulfillment data...')
  const { result: shippingProfileResult } =
    await createShippingProfilesWorkflow(container).run({
      input: {
        data: [
          {
            name: 'Default',
            type: 'default',
          },
        ],
      },
    })
  const shippingProfile = shippingProfileResult[0]

  const fulfillmentSet = await fulfillmentModuleService.createFulfillmentSets({
    name: 'CPH France Delivery',
    type: 'shipping',
    service_zones: [
      {
        name: 'Europe',
        geo_zones: [
          {
            country_code: 'fr',
            type: 'country',
          },
        ],
      },
    ],
  })

  await remoteLink.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocationResult[0].id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_set_id: fulfillmentSet.id,
    },
  })
  await remoteLink.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocationResult[1].id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_set_id: fulfillmentSet.id,
    },
  })

  await createShippingOptionsWorkflow(container).run({
    input: [
      {
        name: 'Standard Shipping',
        price_type: 'flat',
        provider_id: 'manual_manual',
        service_zone_id: fulfillmentSet.service_zones[0].id,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: 'Standard',
          description: 'Ship in 2-3 days.',
          code: 'standard',
        },
        prices: [
          {
            region_id: region.id,
            amount: 10,
          },
        ],
        rules: [
          {
            attribute: 'enabled_in_store',
            value: '"true"',
            operator: 'eq',
          },
          {
            attribute: 'is_return',
            value: 'false',
            operator: 'eq',
          },
        ],
      },
    ],
  })
  logger.info('Finished seeding fulfillment data.')

  await linkSalesChannelsToStockLocationWorkflow(container).run({
    input: {
      id: stockLocationResult[0].id,
      add: [defaultSalesChannel[0].id],
    },
  })
  await linkSalesChannelsToStockLocationWorkflow(container).run({
    input: {
      id: stockLocationResult[1].id,
      add: [defaultSalesChannel[0].id],
    },
  })
  logger.info('Finished seeding stock location data.')

  logger.info('Seeding publishable API key data...')
  const { result: publishableApiKeyResult } = await createApiKeysWorkflow(
    container,
  ).run({
    input: {
      api_keys: [
        {
          title: 'Webshop',
          type: 'publishable',
          created_by: '',
        },
      ],
    },
  })
  const publishableApiKey = publishableApiKeyResult[0]

  await linkSalesChannelsToApiKeyWorkflow(container).run({
    input: {
      id: publishableApiKey.id,
      add: [defaultSalesChannel[0].id],
    },
  })
  logger.info('Finished seeding publishable API key data.')

  logger.info('Seeding product data...')

  await populate('en')
  await populate('fr')

  logger.info('Finished seeding product data.')

  logger.info('Seeding inventory levels.')

  const { data: inventoryItems } = await query.graph({
    entity: 'inventory_item',
    fields: ['id'],
  })

  const inventoryLevels = []
  for (const inventoryItem of inventoryItems) {
    inventoryLevels.push({
      location_id: stockLocationResult[0].id,
      stocked_quantity: 100,
      inventory_item_id: inventoryItem.id,
    })
    inventoryLevels.push({
      location_id: stockLocationResult[1].id,
      stocked_quantity: 100,
      inventory_item_id: inventoryItem.id,
    })
  }

  await createInventoryLevelsWorkflow(container).run({
    input: {
      inventory_levels: inventoryLevels,
    },
  })

  logger.info('Finished seeding inventory levels data.')
}
