import { ArticleKey, ArticleWithRefs } from '@astroneer/types'
import { urlComposer } from '../url-composer'
import { fetchParentsWithRefsForArticle } from './fetch-parents-with-refs-for-article'

export function fetchParentsWithRefsForArticleKey (key: ArticleKey): Promise<ArticleWithRefs> {
  const url = urlComposer(key)
  return fetchParentsWithRefsForArticle(url)
}
