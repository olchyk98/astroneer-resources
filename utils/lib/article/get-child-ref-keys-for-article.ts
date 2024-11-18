import { pluck } from 'ramda'
import { Article, ArticleKey } from '@astroneer/types'

/**
 * The function consumes an article and outputs
 * all keys that are relevant for cases when
 * a graph of children needs to be compiled.
 * This includes ingredient keys and craftedAt
 * module key.
 * */
export function getChildRefKeysForArticle (article: Pick<Article, 'key' | 'recipe'>): ArticleKey[] {
  const { recipe } = article
  const keys: ArticleKey[] = []
  if (recipe != null) {
    keys.push(...pluck('key', article.recipe?.ingredients ?? []))
    keys.push(recipe.craftedAt)
  }
  return keys
}

