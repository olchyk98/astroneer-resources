import { Article } from '@astroneer/types'

export const urlComposer = (s: string | Pick<Article, 'key'>) => {
  const rootURL = process.env.ASTRONEER_WIKI_URL
  if (!rootURL) {
    throw new Error('Define "ASTRONEER_WIKI_URL" env variable. Either a self hosted wiki database dump or a host from WaybackMachine.')
  }
  const key = typeof s === 'object' ? s.key : s
  return `${rootURL}${key}`
}
