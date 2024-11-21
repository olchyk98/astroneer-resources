import { Article } from '@astroneer/types'
import { stripPrefix, stripSuffix } from './utils'

function applyDomain (rootURL: string, domain: WikiURLDomain) {
  // XXX: Ensures that "/" is at the end of the URL
  const url = `${stripSuffix(rootURL, '/')}/`
  if (domain === 'root') return url
  return `${url + domain}/`
}

export const urlComposer = (s: string | Pick<Article, 'key'>, domain: WikiURLDomain = 'wiki') => {
  const envRootURL = process.env.ASTRONEER_WIKI_URL
  if (!envRootURL) {
    console.warn('Define "ASTRONEER_WIKI_URL" env variable. Either a self hosted wiki database dump or a host from WaybackMachine.')
  }
  const key = typeof s === 'object' ? s.key : s
  return `${applyDomain(envRootURL || 'https://127.0.0.1.local', domain)}${stripPrefix(key, '/')}`
}

export type WikiURLDomain =
  | 'root'
  | 'wiki'
