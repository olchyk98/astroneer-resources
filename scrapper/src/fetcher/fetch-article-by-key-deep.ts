import { ArticleNode } from '@astroneer/types'
import { urlComposer } from '../url-composer'
import { fetchArticleDeep } from './fetch-article-deep'
import { GenericFetchOpts } from './types'

export function fetchArticleByKeyDeep (key: string, opts?: GenericFetchOpts): Promise<ArticleNode> {
  const url = urlComposer(key)
  return fetchArticleDeep(url, opts)
}
