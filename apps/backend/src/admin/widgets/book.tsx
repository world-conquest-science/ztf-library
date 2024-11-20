import { defineWidgetConfig } from '@medusajs/admin-sdk'
import { DetailWidgetProps, AdminProduct } from '@medusajs/framework/types'
import {
  Button,
  Container,
  DatePicker,
  Heading,
  Input,
  toast,
} from '@medusajs/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthorSelect } from '../../library/components/AuthorSelect'
import { LanguageSelect } from '../../library/components/LanguageSelect'
import {
  BookExtensions,
  useBookExtensions,
} from '../../library/hooks/book-extensions'

const queryClient = new QueryClient()

const BookExtensionsWidget = () => {
  const { book, isDisabled, isUpdating, update, setData } = useBookExtensions()

  const onUpdateClick = () =>
    update().then(() => {
      toast.success('Success', {
        description: 'Book updated successfully',
        duration: 5000,
      })
    })

  const onAudioVersionUrlChange = event => {
    const audioVersionUrl = event.target.value as string
    setData(prev => ({ ...prev, book: { ...prev.book, audioVersionUrl } }))
  }

  const onDimensionsChange = event => {
    const dimensions = event.target.value as string
    setData(prev => ({ ...prev, book: { ...prev.book, dimensions } }))
  }

  const onEbookVersionEbookChange = event => {
    const ebookVersionEbook = event.target.value as string
    setData(prev => ({ ...prev, book: { ...prev.book, ebookVersionEbook } }))
  }

  const onIsbnChange = event => {
    const isbn = event.target.value as string
    setData(prev => ({ ...prev, book: { ...prev.book, isbn } }))
  }

  const onPagesCountChange = event => {
    const pagesCount = event.target.value as number
    setData(prev => ({ ...prev, book: { ...prev.book, pagesCount } }))
  }

  const onPublishDateChange = (value: Date | null) => {
    setData(prev => ({
      ...prev,
      book: {
        ...prev.book,
        publishDate: value ? value.getTime() : new Date().getTime(),
      },
    }))
  }

  const onPublisherChange = event => {
    const publisher = event.target.value as string
    setData(prev => ({ ...prev, book: { ...prev.book, publisher } }))
  }

  return (
    <>
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading level="h2">Additional information</Heading>

          <Button
            variant="secondary"
            onClick={onUpdateClick}
            isLoading={isUpdating}
            disabled={isDisabled}
          >
            {book?.id ? 'Update' : 'Create'}
          </Button>
        </div>

        <div className="flex flex-row flex-wrap px-6 py-4">
          <div className="w-1/3 p-5">
            <AuthorSelect />
          </div>
          <div className="w-1/3 p-5">
            <LanguageSelect />
          </div>
          <div className="w-1/3 p-5">
            <label htmlFor="audio-version-url" className="text-xs">
              Audio version URL
            </label>
            <Input
              id="audio-version-url"
              placeholder="Audio version URL"
              aria-label="Audio version URL"
              className="bg-white"
              value={book?.audioVersionUrl}
              onChange={onAudioVersionUrlChange}
            />
          </div>
          <div className="w-1/3 p-5">
            <label htmlFor="ebook-version-url" className="text-xs">
              Ebook version URL
            </label>
            <Input
              id="ebook-version-url"
              placeholder="EBook version URL"
              aria-label="EBook version URL"
              className="bg-white"
              value={book?.ebookVersionEbook}
              onChange={onEbookVersionEbookChange}
            />
          </div>
          <div className="w-1/3 p-5">
            <label htmlFor="pages-count" className="text-xs">
              Pages count
            </label>
            <Input
              id="pages-count"
              placeholder="Pages count"
              aria-label="Pages count"
              className="bg-white"
              value={book?.pagesCount}
              type="number"
              onChange={onPagesCountChange}
            />
          </div>
          <div className="w-1/3 p-5">
            <label htmlFor="dimensions" className="text-xs">
              Dimensions
            </label>
            <Input
              id="dimensions"
              placeholder="Dimensions"
              aria-label="Dimensions"
              className="bg-white"
              value={book?.dimensions}
              onChange={onDimensionsChange}
            />
          </div>
          <div className="w-1/3 p-5">
            <label htmlFor="isbn" className="text-xs">
              ISBN
            </label>
            <Input
              id="isbn"
              placeholder="ISBN"
              aria-label="ISBN"
              className="bg-white"
              value={book?.isbn}
              onChange={onIsbnChange}
            />
          </div>
          <div className="w-1/3 p-5">
            <label htmlFor="published-by" className="text-xs">
              Publisher name
            </label>
            <Input
              id="published-by"
              placeholder="Publisher"
              aria-label="Publisher"
              className="bg-white"
              value={book?.publisher}
              onChange={onPublisherChange}
            />
          </div>
          <div className="w-1/3 p-5">
            <label htmlFor="published-at" className="text-xs">
              Published at
            </label>
            <DatePicker
              id="published-at"
              aria-label="Publish date"
              className="bg-white"
              defaultValue={new Date()}
              value={
                book?.publishDate ? new Date(book?.publishDate) : new Date()
              }
              onChange={onPublishDateChange}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

const BookExtensionsWidgetWrapper = ({
  data,
}: DetailWidgetProps<AdminProduct>) => (
  <QueryClientProvider client={queryClient}>
    <BookExtensions productId={data.id}>
      <BookExtensionsWidget />
    </BookExtensions>
  </QueryClientProvider>
)

export const config = defineWidgetConfig({
  zone: 'product.details.before',
})

export default BookExtensionsWidgetWrapper
