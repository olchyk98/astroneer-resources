import { Article, ArticleRecipeIngradient } from '../types'
import { ArticleSourceTable, e, getKeyFromURL } from './utils'

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
  recipe (_d, _url, table) {
    const recipeTxt = table['_Recipe']
    const craftedAtEl = table['_Craftedat']?.querySelector('a')
    if (recipeTxt == null || craftedAtEl == null) {
      return null
    }
    // XXX: The idea is to pick spans (containers for page links)
    // in recipe, find previous node (which would be the amount),
    // then glue everything afterwards.
    const spans = Array.from(recipeTxt.querySelectorAll('span'))
    const ingradients = spans.map((span): ArticleRecipeIngradient => {
      const amount = parseInt(span.previousSibling?.textContent ?? '') || 1
      const key = e(getKeyFromURL(span.querySelector('a')?.getAttribute('href')))
      return { amount, key }
    })
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
