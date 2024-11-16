import { Article } from '@astroneer/types'
import { urlComposer } from './url-composer'
import { fetchArticle } from './fetch-article'

export function fetchArticleByKey (key: string): Promise<Article> {
  const url = urlComposer(key)
  return fetchArticle(url)
}
