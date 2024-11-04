import en from './app/i18n/locales/en.json'

type Messages = typeof en

declare global {
  type IntlMessages = Messages
}
