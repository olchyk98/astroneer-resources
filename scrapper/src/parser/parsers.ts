import { Article } from '../types'
import { ArticleSourceTable, e, getKeyFromURL, parseNumber } from './utils'
import { unsafeExtractRecipeFromDeepContent } from './unsafe-extract-recipe-from-deep-content'
import { parseIngradientAmountFromSpan } from './parse-ingradient-amount-from-span'

export const parsers: Parsers = {
  key (_d, url) {
    return e(getKeyFromURL(url))
  },
  name (_d, _url, table) {
    return e(table['name'])
  },
  iconURL (_d, _url, table) {
    return e(table['iconURL'])
  },
  imageURL (_d, _url, table) {
    return e(table['imageURL'])
  },
  tier (_d, _url, table) {
    return table['_Tier']
  },
  type (_d, _url, table) {
    return e(table['_Type'])
  },
  unlockCost (_d, _url, table) {
    return parseNumber(table['_UnlockCost'] ?? '')
  },
  recipe (d, _url, table) {
    const recipeEl = table['#Recipe']
    const craftedAtEl = table['#Craftedat']?.querySelector('a')
    const typeTxt = table['_Type']
    // XXX: Atmospheric resources can only be obtained
    // through the atmospheric condenser. Therefore we
    // can prefill that. Atmospheric doesn't take
    // anything as input.
    if (typeTxt === 'Atmospheric') {
      return {
        craftedAt: 'Atmospheric_Condenser',
        ingradients: [],
      }
    }
    if (recipeEl == null || craftedAtEl == null) {
      // XXX: Some articles have recipe information, but it
      // is not specified in the overview table. In those
      // instances we're going to do less safe and approach
      // and scan through the whole page to find the recipe
      // table (part of the main content of the page).
      // This is risky, because WIKI framework doesn't
      // doesn't contain different sections (h2) into containers, which
      // makes the entire page quite hard to split into queryable blocks.
      return unsafeExtractRecipeFromDeepContent(d)
    }
    // XXX: The idea is to pick spans (containers for page links)
    // in recipe, find previous node (which would be the amount),
    // then glue everything afterwards.
    const spans = Array.from(recipeEl.querySelectorAll('span'))
    const ingradients = spans.map(parseIngradientAmountFromSpan)
    return {
      craftedAt: e(getKeyFromURL(craftedAtEl.getAttribute('href'))),
      ingradients,
    }
  },
}

export type ParserFn<V> = (doc: Document, url: string, table: ArticleSourceTable) => V

export type Parsers = {
  [K in keyof Article]: ParserFn<Article[K] | null>
}
