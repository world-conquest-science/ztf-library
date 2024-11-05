import { createProductsWorkflow } from '@medusajs/medusa/core-flows'
import { ExecArgs } from '@medusajs/framework/types'
import { ContainerRegistrationKeys, Modules, ProductStatus } from '@medusajs/framework/utils'
import { BOOK_MODULE } from 'src/modules/book'
import { LANGUAGE_MODULE } from 'src/modules/language'

import en_categories from '../library/raw-books/en.json'
import fr_categories from '../library/raw-books/fr.json'
import LanguageModuleService from 'src/modules/language/service'
import BookModuleService from 'src/modules/book/service'
import { AUTHOR_MODULE } from 'src/modules/author'

const DEFAULT_SALES_CHANNEL_ID = 'sc_01JBSPVPYDWSGAF0Y8C1QZ5QMD'
const ZTF_AUTHOR_ID = '01JBVMR2MGMDGT7KGRNX0XHCYF'
const DEFAULT_FORMAT = 'Paperback'
const FORMAT_OPTIONS = { title: 'Format', values: [DEFAULT_FORMAT] }

export default async function seedDemoData({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const productModuleService = container.resolve(Modules.PRODUCT)
  const bookModuleService: BookModuleService = container.resolve(BOOK_MODULE)
  const languageModuleService: LanguageModuleService = container.resolve(LANGUAGE_MODULE)

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
      let [category] = await productModuleService.listProductCategories({ name: title })
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

        const products = await productModuleService.listProducts({ title: book.title })
        if (!products || products.length === 0) {
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
                      sku: `${book.title.toUpperCase()} / ${lang.toUpperCase()} / ${DEFAULT_FORMAT.toUpperCase()}`,
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
                  sales_channels: [{ id: DEFAULT_SALES_CHANNEL_ID }],
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
          const product = products[0]
          const productCategories = product.categories ? product.categories.map(c => c.id) : []
          await productModuleService.updateProducts(product.id, {
            category_ids: [...productCategories, categoryId],
          })
        }
      }
    }
  }

  logger.info('Seeding product data...')

  await populate('en')
  await populate('fr')

  logger.info('Finished seeding product data.')
}
