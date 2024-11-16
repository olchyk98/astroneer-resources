import { Article } from '@astroneer/types'

const rootURL = process.env.ASTRONEER_WIKI_URL
if (!rootURL) {
  throw new Error('Define "ASTRONEER_WIKI_URL" env variable. Either a self hosted wiki database dump or a host from WaybackMachine.')
}

// WARNING: This is just an example URL. Calling this host is
// strictly discouraged, as it violates Terms Of Service
// of fandom.com provider.
export const urlComposer = (s: string | Pick<Article, 'key'>) => {
  const key = typeof s === 'object' ? s.key : s
  return `${rootURL}${key}`
}
