import { fetchHTML } from './fetcher'
import { parseToArticle } from './parser'
import { Article } from './types'

export async function fetchArticle (url: string): Promise<Article> {
  const html = await fetchHTML(url)
  return parseToArticle(html, url)
}
