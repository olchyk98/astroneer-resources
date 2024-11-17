import { fetchArticle } from './fetch-article'
import { Article, ArticleKey, ArticleNode } from '@astroneer/types'
import { urlComposer } from '../url-composer'
import { GenericFetchOpts } from './types'
import { pluck } from 'ramda'

// XXX: Base ingradients/craftedAt machines that will be
// parsed, and should not be part of graph.
const unwantedIngredients: Set<ArticleKey> = new Set([
  'Backpack',
])

function getIngredientKeysForArticle (article: Article): string[] {
  const { recipe } = article
  if (recipe == null) return []
  const inputIngredients = pluck('key', recipe.ingredients)
  const keys = [ ...inputIngredients, recipe.craftedAt ]
  return keys.filter((l) => !!l && !unwantedIngredients.has(l))
}

/**
 * This function will invoke fetchArticle
 * for the input URL and every single recipe
 * ingredient recursively, including recipes for
 * "createdAt" machines.
 * At the end a tree will be returned containing
 * detailed information about each step of the production
 * process in form of ArticleNode structure.
 * */
export async function fetchArticleDeep (url: string, opts?: GenericFetchOpts): Promise<ArticleNode> {
  const article = await fetchArticle(url, opts)
  const node: ArticleNode = { article }
  if (article.recipe != null) {
    const ingredientKeys = getIngredientKeysForArticle(article)
    if (ingredientKeys.length > 0) {
      node.children = []
    }
    for await (const key of ingredientKeys) {
      const childNode = await fetchArticleDeep(urlComposer(key), opts)
      node.children!.push(childNode)
    }
  }
  return node
}
