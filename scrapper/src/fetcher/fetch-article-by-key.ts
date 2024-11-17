import { Article } from '@astroneer/types'
import { urlComposer } from '../url-composer'
import { fetchArticle } from './fetch-article'
import { GenericFetchOpts } from './types'

export function fetchArticleByKey (key: string, opts?: GenericFetchOpts): Promise<Article> {
  const url = urlComposer(key)
  return fetchArticle(url, opts)
}
