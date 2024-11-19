import { Article, ArticleKey } from '@astroneer/types'
import { fetchParentsForArticle } from './fetch-parents-for-article'
import { urlComposer } from '../url-composer'

/**
 * The function consumes articleKey
 * and returns articles that have
 * input articleKey value as their child.
 *
 * To see how children are calculated, check
 * implementation for getChildRefKeysForArticle function.
 *
 * NOTE: The function always utilzies cache,
 * and doesn't consume fetch opts.
 * */
export function fetchParentsForArticleKey (key: ArticleKey): Promise<Article[]> {
  const url = urlComposer(key)
  return fetchParentsForArticle(url)
}
