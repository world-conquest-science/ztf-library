import { useState } from 'react'
import {
  Container,
  Heading,
  toast,
  usePrompt,
  Button,
  IconButton,
  Textarea,
  Select,
} from '@medusajs/ui'
import { defineRouteConfig } from '@medusajs/admin-sdk'
import { Pencil, AtSymbol, Trash } from '@medusajs/icons'
import { TQuote, TQuoteInput } from 'src/library/types'
import { useQuote } from '../../../library/hooks/quote'
import { LoadingState } from '../../../library/components/LoadingState'
import { EmptyState } from '../../../library/components/EmptyState'
import { useAuthor } from '../../../library/hooks/author'
import { useBook } from '../../../library/hooks/book'

const emptyQuote: TQuoteInput = {
  id: '',
  content: '',
  author: null,
  book: null,
}

const QuotesPage = () => {
  const { authors } = useAuthor()
  const { books } = useBook()
  const { isLoading, quotes, create, update, remove, refetch } = useQuote()

  const [quote, setQuote] = useState<TQuoteInput>(emptyQuote)

  const onEditClick = (quote: TQuote) => {
    setQuote({ ...emptyQuote, ...quote })
  }

  const onResetClick = () => {
    setQuote(emptyQuote)
  }

  const onAddClick = () => {
    if (quote.id.length) {
      return
    }

    create(quote, {
      author_id: quote.author?.id,
      book_id: quote.book?.id,
    }).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Quote added successfully',
        duration: 5000,
      })
    })
  }

  const onUpdateClick = () => {
    if (!quote.id.length) {
      return
    }

    update(quote, {
      author_id: quote.author?.id,
      book_id: quote.book?.id,
    }).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Quote updated successfully',
        duration: 5000,
      })
    })
  }

  const onRemoveClick = async (quote: TQuote) => {
    const dialog = usePrompt()
    const confirmed = await dialog({
      title: `Delete this quote`,
      description: 'Are you sure? This cannot be undone.',
    })

    if (!confirmed) {
      return
    }

    remove(quote.id).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Quote removed successfully',
        duration: 5000,
      })
    })
  }

  const onContentChange = event => {
    setQuote(q => ({ ...q, content: event.target.value }))
  }

  const onAuthorChange = (selectedAuthorId: string) => {
    setQuote(q => ({
      ...q,
      author: authors.find(a => a.id === selectedAuthorId),
    }))
  }

  const onBookChange = (selectedBookId: string) => {
    setQuote(q => ({ ...q, book: books.find(b => b.id === selectedBookId) }))
  }

  return (
    <div className="flex gap-10 items-start">
      <Container className="divide-y p-0 w-1/3 overflow-hidden bg-transparent ring-0 shadow-none">
        <div className="flex items-center justify-between px-1 py-4">
          <Heading className="font-sans font-medium" level="h2">
            Add a quote
          </Heading>
        </div>
        <div className="flex gap-3 flex-col !border-t-0 p-1">
          <Textarea
            placeholder="Content"
            className="bg-white"
            value={quote.content}
            onChange={onContentChange}
          />
          <div>
            <label htmlFor="author" className="text-xs">
              Author
            </label>
            <Select
              value={quote?.author?.id}
              onValueChange={onAuthorChange}
              disabled={isLoading}
            >
              <Select.Trigger>
                <Select.Value placeholder="Select author" />
              </Select.Trigger>
              <Select.Content>
                {authors?.map(author => (
                  <Select.Item key={author.handle} value={author.id}>
                    {author.name}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </div>
          <div>
            <label htmlFor="author" className="text-xs">
              Book
            </label>
            <Select
              value={quote?.book?.id}
              onValueChange={onBookChange}
              disabled={isLoading}
            >
              <Select.Trigger>
                <Select.Value placeholder="Select book" />
              </Select.Trigger>
              <Select.Content>
                {books?.map(book => (
                  <Select.Item key={book.id} value={book.id}>
                    {book.title}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </div>
          <div className="inline-flex justify-end gap-3 mt-3">
            {quote.id.length > 0 && (
              <Button variant="secondary" onClick={onResetClick}>
                Reset
              </Button>
            )}
            {quote.id.length > 0 && (
              <Button variant="danger" onClick={onUpdateClick}>
                Update
              </Button>
            )}
            {quote.id.length === 0 && <Button onClick={onAddClick}>Add</Button>}
          </div>
        </div>
      </Container>

      <Container className="divide-y p-0 w-2/3 overflow-hidden">
        {isLoading && <LoadingState />}
        {!isLoading && quotes.length === 0 && <EmptyState />}

        <div className="flex h-full flex-col overflow-hidden !border-t-0 divide-y">
          {quotes.map(quote => (
            <div
              key={quote.id}
              className="py-2 px-5 flex items-center justify-between"
            >
              <div className="inline-flex flex-col items-start">
                <p className="font-medium">{quote.content}</p>
                <span className="font-light text-xs">
                  By {quote.author?.name}
                </span>
                <span className="font-light text-xs">
                  From {quote.book?.title}
                </span>
              </div>
              <div className="inline-flex gap-5">
                <IconButton onClick={() => onRemoveClick(quote)}>
                  <Trash />
                </IconButton>
                <IconButton onClick={() => onEditClick(quote)}>
                  <Pencil />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default QuotesPage

export const config = defineRouteConfig({
  label: 'Quotes',
  icon: AtSymbol,
})
