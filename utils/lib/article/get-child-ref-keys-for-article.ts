import { pluck } from 'ramda'
import { Article, ArticleKey } from '@astroneer/types'
import { planetKeys } from '../planets'
import { isStringArray } from '../misc'

function getPlanetKeys (planets: Article['planets']): string[] {
  if (planets == null || planets === false) return []
  if (planets === true) return planetKeys
  if (planets.length === 0) return []
  if (isStringArray(planets)) return planets
  return pluck('key', planets)
}

/**
 * The function consumes an article and outputs
 * all keys that are relevant for cases when
 * a graph of children needs to be compiled.
 * This includes ingredient keys and craftedAt
 * module key.
 * */
export function getChildRefKeysForArticle (article: Pick<Article, 'key' | 'recipe' | 'planets'>): ArticleKey[] {
  const { recipe, planets } = article
  const keys: ArticleKey[] = []
  if (recipe != null) {
    keys.push(...pluck('key', article.recipe?.ingredients ?? []))
    keys.push(recipe.craftedAt)
  }
  if (planets != null) {
    keys.push(...getPlanetKeys(planets))
  }
  return keys
}

