import { updateProductsWorkflow } from '@medusajs/medusa/core-flows'
import { StepResponse } from '@medusajs/framework/workflows-sdk'
import { Modules, ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { BOOK_MODULE } from '../../modules/book'
import BookModuleService from '../../modules/book/service'
import { removeProductAllBooks } from '../../library/links/product.book'

updateProductsWorkflow.hooks.productsUpdated(
  async ({ products, additional_data }, { container }) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    const bookModuleService: BookModuleService = container.resolve(BOOK_MODULE)

    const links = []

    if (additional_data?.book_id) {
      await bookModuleService.retrieveBook(additional_data.book_id as string)
    }

    for (const product of products) {
      if (additional_data?.book_id) {
        links.push({
          [Modules.PRODUCT]: {
            product_id: product.id,
          },
          [BOOK_MODULE]: {
            book_id: additional_data.book_id,
          },
        })

        await removeProductAllBooks(container, product.id)
      }
    }

    if (!links.length) {
      return new StepResponse([], [])
    }

    await remoteLink.create(links)

    return new StepResponse(links, links)
  },
  async (links, { container }) => {
    if (!links.length) {
      return
    }

    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)

    await remoteLink.dismiss(links)
  },
)
