import { Article, ArticleWithRefs, ReferencesMap } from '@astroneer/types'
import { fetchParentsForArticle } from './fetch-parents-for-article'
import { fetchArticle } from './fetch-article'
import { forEach, pluck } from 'ramda'
import { urlComposer } from '../url-composer'
import { getChildRefKeysForArticle } from '@astroneer/utils'

/**
 * This recursive function traverses deep using bottom-to-top
 * approach to find all parent articles in the tree.
 * It returns article in form of ArticleWithRefs that
 * the input url points to, and populates "parentKeys"
 * on output article.
 * */
export async function fetchParentsWithRefsForArticle (
  url: string,
  _referencesMap: ReferencesMap = {},
): Promise<ArticleWithRefs> {
  const article = await fetchArticle(url)
  for await (const childKey of getChildRefKeysForArticle(article)) {
    if (childKey in _referencesMap) continue
    const url = urlComposer(childKey)
    const childArticle = await fetchArticle(url, { strategy: 'cache' })
    _referencesMap[childKey] = { ...childArticle, _parentKeys: [ article.key ] }
  }
  const parents = await fetchParentsForArticle(url)
  const articleWithParents: Article = { ...article, _parentKeys: pluck('key', parents) }
  _referencesMap[article.key] = articleWithParents
  for await (const parent of parents) {
    const url = urlComposer(parent.key)
    await fetchParentsWithRefsForArticle(url, _referencesMap)
  }
  return {
    article: { ...article, _parentKeys: pluck('key', parents) },
    _referencesMap,
  }
}
