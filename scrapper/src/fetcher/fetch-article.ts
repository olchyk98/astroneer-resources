import { fetchHTML, parseToArticle } from '../parser'
import { getPreDefinedArticle, isPreDefinedArticle } from '../predefined'
import { Article } from '@astroneer/types'
import { GenericFetchOpts } from './types'
import { getCachedArticle } from '../cache'

export async function fetchArticle (url: string, opts?: GenericFetchOpts): Promise<Article> {
  // XXX: Resources that are specific to individual
  // planets (and some other articles) are hard to parse.
  // from web, because the content is in raw text
  // I'm not in the mood of hooking this thing up
  // to an LLM, so instead I'm going to bake in
  // 22 of those resources in the submodule
  // called "predefined".

  if (isPreDefinedArticle(url) && !opts?.noPredefined) {
    return getPreDefinedArticle(url)
  }
  const { strategy = 'cache' } = opts ?? {}
  if (strategy !== 'cache') {
    const html = await fetchHTML(url)
    return parseToArticle(html, url)
  }
  return getCachedArticle(url)
}
