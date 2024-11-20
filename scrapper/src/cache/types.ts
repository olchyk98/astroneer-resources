import { Article, ArticleKey } from '@astroneer/types'

export interface CacheMap {
  articlesMap: Record<ArticleKey, Article>
  articleParentsMap: Record<ArticleKey, Article[]>
}
