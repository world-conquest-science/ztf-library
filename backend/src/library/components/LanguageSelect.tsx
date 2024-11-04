import { Select } from '@medusajs/ui'
import { useLanguage } from '../hooks/language'
import { useBookExtensions } from '../hooks/book-extensions'

type TAuthorSelectProps = {}

const LanguageSelect = ({}: TAuthorSelectProps) => {
  const { languages, isLoading } = useLanguage()
  const { language, setData } = useBookExtensions()

  const onValueChange = (selectedLanguageId: string) => {
    if (!setData) return

    setData(prev => ({
      ...prev,
      language: languages.find(a => a.id === selectedLanguageId),
    }))
  }

  return (
    <>
      <label htmlFor="language" className="text-xs">
        Language
      </label>
      <Select value={language?.id} onValueChange={onValueChange} disabled={isLoading}>
        <Select.Trigger>
          <Select.Value placeholder="Select language" />
        </Select.Trigger>
        <Select.Content>
          {languages.map(language => (
            <Select.Item key={language.id} value={language.id}>
              {language.code}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </>
  )
}

export { LanguageSelect }
