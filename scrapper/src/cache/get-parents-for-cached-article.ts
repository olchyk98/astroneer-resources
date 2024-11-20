import { Article } from '@astroneer/types'
import { getParentsForArticlesFromCache } from './cache'
import { getKeyFromURL } from '../parser'

/**
 * The function consumes articleKey
 * and returns articles from cache that have
 * input articleKey value as their child.
 *
 * To see how children are calculated, check
 * implementation for getChildRefKeysForArticle function.
 * */
export function getParentsForCachedArticle (urlOrKey: string): Article[] {
  const key = getKeyFromURL(urlOrKey)
  return getParentsForArticlesFromCache()[key] ?? []
}
