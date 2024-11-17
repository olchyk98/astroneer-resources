import { Article } from '@astroneer/types'
import { getKeyFromURL } from '../parser/utils'
import { cache } from './cache'

export function getCachedArticle (urlOrKey: string): Article | never {
  const key = urlOrKey.includes('http') ? getKeyFromURL(urlOrKey) : urlOrKey
  if (!(key in cache)) {
    throw new Error(`Could not retrieve article "${key}", because it is not cached`)
  }
  return cache[key]
}
