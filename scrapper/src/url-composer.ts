import { Article } from '@astroneer/types'

// WARNING: This is just an example URL. Calling this host is
// strictly discouraged, as it violates Terms Of Service
// of fandom.com provider.
export const urlComposer = (s: string | Pick<Article, 'key'>) => {
  const key = typeof s === 'object' ? s.key : s
  return `https://astroneer.fandom.com/wiki/${key}`
}
