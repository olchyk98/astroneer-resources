import axios from 'axios'
import { Article, ArticleKey, ArticleName } from '@astroneer/types'

export async function search (query: ArticleKey | ArticleName): Promise<Article[]> {
  const r = await axios.get<Article[]>(
    '/api/search',
    { params: { q: query } },
  )
  return r.data
}
