import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http'
import { ContainerRegistrationKeys, Modules } from '@medusajs/framework/utils'
import { IProductModuleService, ProductDTO } from '@medusajs/framework/types'
import LanguageModuleService from '../../../modules/language/service'
import { LANGUAGE_MODULE } from '../../../modules/language'

import en_categories from '../../../library/raw-books/en.json'
import fr_categories from '../../../library/raw-books/fr.json'
import { BOOK_MODULE } from '../../../modules/book'
import BookModuleService from '../../../modules/book/service'
import { AUTHOR_MODULE } from '../../../modules/author'
import { RemoteLink } from '@medusajs/framework/modules-sdk'

const ZTF_AUTHOR_ID = '01JBVMR2MGMDGT7KGRNX0XHCYF'

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const remoteLink: RemoteLink = req.scope.resolve(
    ContainerRegistrationKeys.REMOTE_LINK,
  )
  const productModuleService: IProductModuleService = req.scope.resolve(
    Modules.PRODUCT,
  )
  const bookModuleService: BookModuleService = req.scope.resolve(BOOK_MODULE)
  const languageModuleService: LanguageModuleService =
    req.scope.resolve(LANGUAGE_MODULE)

  const populate = async (lang: string = 'en') => {
    let data: typeof en_categories = []
    if (lang === 'fr') {
      data = fr_categories
    } else if (lang === 'en') {
      data = en_categories
    }

    const [language] = await languageModuleService.listLanguages({ code: lang })
    for (const { title, books } of data) {
      console.log(`-------------------- Category: ${title}`)

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
        console.log(`> ${book.title}`)

        const [product] = await productModuleService.listProducts({
          title: book.title,
        })
        if (!product) {
          // Here we are going to link created products to a new created book entity
          const links = []

          const createdProduct = await productModuleService.createProducts({
            title: book.title,
            category_ids: [categoryId],
            status: 'published',
            options: [{ title: 'Format', values: ['Paperback'] }],
            variants: [
              {
                title: 'Paperback',
                manage_inventory: true,
                options: { Format: 'Paperback' },
              },
            ],
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

  await populate('en')
  await populate('fr')

  res.sendStatus(200)
}
