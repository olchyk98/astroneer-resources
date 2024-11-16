import { urlComposer } from './url-composer'
import { Node, fetchArticleDeep } from './fetch-article-deep'

export function fetchArticleByKeyDeep (key: string): Promise<Node> {
  const url = urlComposer(key)
  return fetchArticleDeep(url)
}
