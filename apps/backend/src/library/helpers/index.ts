import { isString, toHandle } from '@medusajs/framework/utils'

export const generateSlug = (text: string): string => {
  if (!isString(text)) return ''

  return toHandle(text)
}
