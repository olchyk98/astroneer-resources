import { ArticleNode } from '@astroneer/types'
import { urlComposer } from './url-composer'
import { fetchArticleDeep } from './fetch-article-deep'

export function fetchArticleByKeyDeep (key: string): Promise<ArticleNode> {
  const url = urlComposer(key)
  return fetchArticleDeep(url)
}
