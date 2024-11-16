import { fetchHTML } from './fetcher'
import { parseToArticle } from './parser'
import { getPreDefinedArticle, isPreDefinedArticle } from './predefined'
import { Article } from './types'

export async function fetchArticle (url: string): Promise<Article> {
  // XXX: Resources that are specific to individual
  // planets are hard to parse from web, because the
  // content is in raw text. I'm not in the mood of hooking
  // this thing up to an LLM, so instead I'm
  // going to bake in 22 of those resources in the
  // submodule called "predefined".
  if (isPreDefinedArticle(url)) {
    return getPreDefinedArticle(url)
  }
  const html = await fetchHTML(url)
  return parseToArticle(html, url)
}
