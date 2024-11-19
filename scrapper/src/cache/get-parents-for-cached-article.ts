import { Article } from '@astroneer/types'
import { cache } from './cache'
import { concat, filter } from 'ramda'
import { getChildRefKeysForArticle } from '@astroneer/utils'
import { predefinedArticles } from '../predefined'
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
  const articleKey = getKeyFromURL(urlOrKey)
  // TODO: This can be optimized by pre-computing
  // dependency tree. Like this: { [childKey]: [...parentKeys] }
  const cachedArticles = Object.values(cache)
  const withPredefined = concat(predefinedArticles, cachedArticles)
  const parentKeys = new Set()
  return filter((article) => {
    // XXX: Hacky, but performant solution to avoid
    // duplications for predefined resources. Because,
    // by design, predefined articles and cached articles
    // overlap (define articles for the same key, but with
    // different info), it's important to filter duplications
    // from "cachedArticles" out, otherwise we'll get duplicates
    // in the return array of this function.
    if (parentKeys.has(article.key)) return false
    parentKeys.add(article.key)
    const childKeys = getChildRefKeysForArticle(article)
    return childKeys.includes(articleKey)
  }, withPredefined)
}
