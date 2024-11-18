import { ArticleWithRefs } from '@astroneer/types'
import { urlComposer } from '../url-composer'
import { GenericFetchOpts } from './types'
import { fetchArticleWithRefs } from './fetch-article-with-refs'

export function fetchArticleWithRefsByKey (key: string, opts?: GenericFetchOpts): Promise<ArticleWithRefs> {
  const url = urlComposer(key)
  return fetchArticleWithRefs(url, opts)
}
