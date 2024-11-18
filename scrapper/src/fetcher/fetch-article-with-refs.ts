import { fetchArticle } from './fetch-article'
import { getChildRefKeysForArticle } from '@astroneer/utils'
import { GenericFetchOpts } from './types'
import { ArticleWithRefs, ReferencesMap } from '@astroneer/types'
import { urlComposer } from '../url-composer'

export async function fetchArticleWithRefs (
  url: string,
  opts?: GenericFetchOpts,
  referencesMap: ReferencesMap = {},
): Promise<ArticleWithRefs> {
  const article = await fetchArticle(url, opts)
  const keysToResolve = getChildRefKeysForArticle(article)
  for await (const key of keysToResolve) {
    if (key in referencesMap) continue
    const childURL = urlComposer(key)
    const childWithRefs = await fetchArticleWithRefs(childURL, opts, referencesMap)
    referencesMap[key] = childWithRefs.article
  }
  return { article, _referencesMap: referencesMap }
}
