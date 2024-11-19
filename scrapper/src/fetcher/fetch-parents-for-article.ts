import { Article } from '@astroneer/types'
import { getParentsForCachedArticle } from '../cache'

/**
 * @complex The function consumes article url
 * and returns articles that have
 * article.key that belongs to input url
 * as value as their child.
 *
 * @pure This function may be useful when
 * trying to generate a list of articles
 * that a specific ingredient is used in.
 *
 * To see how children are calculated, check
 * implementation for getChildRefKeysForArticle function.
 *
 * NOTE: The function always utilzies cache,
 * and doesn't consume fetch opts.
 * */
export async function fetchParentsForArticle (url: string): Promise<Article[]> {
  return getParentsForCachedArticle(url)
}
