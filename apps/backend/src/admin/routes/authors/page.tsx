import { useState } from 'react'
import {
  Container,
  Heading,
  Button,
  Input,
  Textarea,
  IconButton,
  toast,
  usePrompt,
} from '@medusajs/ui'
import { defineRouteConfig } from '@medusajs/admin-sdk'
import { Pencil, Trash, User } from '@medusajs/icons'

import { EmptyState } from '../../../library/components/EmptyState'
import { LoadingState } from '../../../library/components/LoadingState'
import { useAuthor } from '../../../library/hooks/author'
import { TAuthor, TAuthorInput } from 'src/library/types'

const emptyAuthor: TAuthorInput = {
  id: '',
  name: '',
  about: '',
  photoUrl: '',
}

const AuthorsPage = () => {
  const { isLoading, authors, create, update, remove, refetch } = useAuthor()

  const [author, setAuthor] = useState<TAuthorInput>(emptyAuthor)

  const onNameChange = event => {
    setAuthor(a => ({ ...a, name: event.target.value }))
  }

  const onAboutChange = event => {
    setAuthor(a => ({ ...a, about: event.target.value }))
  }

  const onPhotoChange = event => {
    setAuthor(a => ({ ...a, photoUrl: event.target.value }))
  }

  const onEditClick = (author: TAuthor) => {
    setAuthor({ ...emptyAuthor, ...author })
  }

  const onResetClick = () => {
    setAuthor(emptyAuthor)
  }

  const onCreateClick = () => {
    if (author.id.length) {
      return
    }

    create(author).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Author added successfully',
        duration: 5000,
      })
    })
  }

  const onUpdateClick = () => {
    if (!author.id.length) {
      return
    }

    update(author).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Author updated successfully',
        duration: 5000,
      })
    })
  }

  const onRemoveClick = async (author: TAuthor) => {
    const dialog = usePrompt()
    const confirmed = await dialog({
      title: `Delete ${author.name}`,
      description: 'Are you sure? This cannot be undone.',
    })

    if (!confirmed) {
      return
    }

    remove(author.id).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Author removed successfully',
        duration: 5000,
      })
    })
  }

  return (
    <div className="flex gap-10 items-start">
      <Container className="divide-y p-0 w-1/3 overflow-hidden bg-transparent ring-0 shadow-none">
        <div className="flex items-center justify-between px-1 py-4">
          <Heading className="font-sans font-medium" level="h2">
            Add an author
          </Heading>
        </div>
        <div className="flex gap-3 flex-col !border-t-0 p-1">
          <Input
            placeholder="Full name"
            className="bg-white"
            value={author.name}
            onChange={onNameChange}
          />
          <Textarea
            className="bg-white"
            placeholder="About"
            value={author.about}
            onChange={onAboutChange}
            rows={10}
          />
          <Input
            placeholder="Photo URL"
            className="bg-white"
            value={author.photoUrl}
            onChange={onPhotoChange}
          />
          <div className="inline-flex justify-end gap-3 mt-3">
            {author.id.length > 0 && (
              <Button variant="secondary" onClick={onResetClick}>
                Reset
              </Button>
            )}
            {author.id.length > 0 && (
              <Button variant="danger" onClick={onUpdateClick}>
                Update
              </Button>
            )}
            {author.id.length === 0 && (
              <Button onClick={onCreateClick}>Create</Button>
            )}
          </div>
        </div>
      </Container>

      <Container className="divide-y p-0 w-2/3 overflow-hidden">
        {isLoading && <LoadingState />}
        {!isLoading && authors.length === 0 && <EmptyState />}

        <div className="flex h-full flex-col overflow-hidden !border-t-0 divide-y">
          {authors.map(author => (
            <div
              key={author.id}
              className="py-2 px-5 flex items-center justify-between"
            >
              <div className="inline-flex items-center">
                <span className="py-1 inline-flex mr-3">
                  <img
                    src={author.photoUrl}
                    className="inline-flex h-12 w-12 object-cover rounded-full overflow-hidden"
                  />
                </span>
                <div>
                  <span className="font-medium">{author.name}</span>
                  <p className="text-gray-500 text-sm">{author.about}</p>
                </div>
              </div>
              <div className="inline-flex gap-5">
                <IconButton onClick={() => onRemoveClick(author)}>
                  <Trash />
                </IconButton>
                <IconButton onClick={() => onEditClick(author)}>
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

export default AuthorsPage

export const config = defineRouteConfig({
  label: 'Authors',
  icon: User,
})
