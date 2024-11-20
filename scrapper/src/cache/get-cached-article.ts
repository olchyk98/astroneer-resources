import { Article } from '@astroneer/types'
import { getKeyFromURL } from '../parser/utils'
import { getArticlesFromCache } from './cache'

export function getCachedArticle (urlOrKey: string): Article | never {
  const key = getKeyFromURL(urlOrKey)
  const cacheArticles = getArticlesFromCache()
  if (!(key in cacheArticles)) {
    throw new Error(`Could not retrieve article "${key}", because it is not cached`)
  }
  return cacheArticles[key]
}
