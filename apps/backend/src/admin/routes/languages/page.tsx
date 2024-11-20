import { useState } from 'react'
import {
  Container,
  Heading,
  toast,
  usePrompt,
  Input,
  Button,
  IconButton,
} from '@medusajs/ui'
import { defineRouteConfig } from '@medusajs/admin-sdk'
import { Pencil, GlobeEuropeSolid, Trash } from '@medusajs/icons'
import { TLanguage, TLanguageInput } from 'src/library/types'
import { useLanguage } from '../../../library/hooks/language'
import { LoadingState } from '../../../library/components/LoadingState'
import { EmptyState } from '../../../library/components/EmptyState'

const emptyLanguage: TLanguageInput = {
  id: '',
  code: '',
}

const LanguagesPage = () => {
  const { isLoading, languages, create, update, remove, refetch } =
    useLanguage()

  const [language, setLanguage] = useState<TLanguageInput>(emptyLanguage)

  const onCodeChange = event => {
    setLanguage(l => ({ ...l, code: event.target.value }))
  }

  const onEditClick = (language: TLanguage) => {
    setLanguage({ ...emptyLanguage, ...language })
  }

  const onResetClick = () => {
    setLanguage(emptyLanguage)
  }

  const onAddClick = () => {
    if (language.id.length) {
      return
    }

    create(language).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Language added successfully',
        duration: 5000,
      })
    })
  }

  const onUpdateClick = () => {
    if (!language.id.length) {
      return
    }

    update(language).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Language updated successfully',
        duration: 5000,
      })
    })
  }

  const onRemoveClick = async (language: TLanguage) => {
    const dialog = usePrompt()
    const confirmed = await dialog({
      title: `Delete ${language.code}`,
      description: 'Are you sure? This cannot be undone.',
    })

    if (!confirmed) {
      return
    }

    remove(language.id).then(() => {
      onResetClick()
      refetch()
      toast.success('Success', {
        description: 'Language removed successfully',
        duration: 5000,
      })
    })
  }

  return (
    <div className="flex gap-10 items-start">
      <Container className="divide-y p-0 w-1/3 overflow-hidden bg-transparent ring-0 shadow-none">
        <div className="flex items-center justify-between px-1 py-4">
          <Heading className="font-sans font-medium" level="h2">
            Add a language
          </Heading>
        </div>
        <div className="flex gap-3 flex-col !border-t-0 p-1">
          <Input
            placeholder="Code"
            className="bg-white"
            value={language.code}
            onChange={onCodeChange}
          />
          <div className="inline-flex justify-end gap-3 mt-3">
            {language.id.length > 0 && (
              <Button variant="secondary" onClick={onResetClick}>
                Reset
              </Button>
            )}
            {language.id.length > 0 && (
              <Button variant="danger" onClick={onUpdateClick}>
                Update
              </Button>
            )}
            {language.id.length === 0 && (
              <Button onClick={onAddClick}>Add</Button>
            )}
          </div>
        </div>
      </Container>

      <Container className="divide-y p-0 w-2/3 overflow-hidden">
        {isLoading && <LoadingState />}
        {!isLoading && languages.length === 0 && <EmptyState />}

        <div className="flex h-full flex-col overflow-hidden !border-t-0 divide-y">
          {languages.map(language => (
            <div
              key={language.id}
              className="py-2 px-5 flex items-center justify-between"
            >
              <div className="inline-flex items-center">
                <span className="font-medium">{language.code}</span>
              </div>
              <div className="inline-flex gap-5">
                <IconButton onClick={() => onRemoveClick(language)}>
                  <Trash />
                </IconButton>
                <IconButton onClick={() => onEditClick(language)}>
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

export default LanguagesPage

export const config = defineRouteConfig({
  label: 'Languages',
  icon: GlobeEuropeSolid,
})
