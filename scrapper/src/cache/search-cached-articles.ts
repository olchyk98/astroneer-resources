import { Article, ArticleKey, ArticleName } from '@astroneer/types'
import { getArticlesFromCache } from './cache'
import Fuse from 'fuse.js'

const cachedArticles = Object.values(getArticlesFromCache())
const fuse = new Fuse(cachedArticles, {
  threshold: 0.2,
  keys: [ 'name', 'key' ],
})

export function searchCachedArticles (query: ArticleKey | ArticleName): Article[] {
  return fuse.search(query, { limit: 5 }).map((l) => l.item)
}
