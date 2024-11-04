import { Select } from '@medusajs/ui'
import { useBookExtensions } from '../hooks/book-extensions'
import { useAuthor } from '../hooks/author'

type TAuthorSelectProps = {}

const AuthorSelect = ({}: TAuthorSelectProps) => {
  const { authors, isLoading } = useAuthor()
  const { author, setData } = useBookExtensions()

  const onValueChange = (selectedAuthorId: string) => {
    if (!setData) return

    setData(prev => ({
      ...prev,
      author: authors.find(a => a.id === selectedAuthorId),
    }))
  }

  return (
    <>
      <label htmlFor="author" className="text-xs">
        Author
      </label>
      <Select value={author?.id} onValueChange={onValueChange} disabled={isLoading}>
        <Select.Trigger>
          <Select.Value placeholder="Select author" />
        </Select.Trigger>
        <Select.Content>
          {authors.map(author => (
            <Select.Item key={author.handle} value={author.id}>
              {author.name}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </>
  )
}

export { AuthorSelect }
