import { equals, reduce, reduced } from 'ramda'
import { Nullable } from '../type-utils'
import { ArticleRecipe } from '../types'
import { e, getKeyFromURL, minimizeStr } from './utils'
import { parseIngradientAmountFromSpan } from './parse-ingradient-amount-from-span'

const expectedHeadings = [ 'Output', 'Input', 'Module' ]

export function unsafeExtractRecipeFromDeepContent (document: Document): Nullable<ArticleRecipe> {
  const tables = Array.from(document.querySelectorAll('.recipeTable'))
  // XXX: This block iterates over all recipe tables (.recipeTable is selector
  // for ANY table on the page), and checks if their nearest previous sibling
  // is the "#Source" title. This is a hacky approach, but needed to be done,
  // because on some pages "#Source" title and actual recipe table are separated
  // by some piece of content (text, ad). Hence, the function is unsafe.
  const table = reduce<Element, Element | null>((_acc, item) => {
    let sectionTitle: Element | null = null
    while (true) {
      const current: Element | null = sectionTitle ?? item
      if (current.querySelector('#Source') !== null) break
      sectionTitle = current.previousElementSibling
      if (sectionTitle == null) break
    }
    return sectionTitle == null
      ? reduced(null)
      : reduced(item)
  }, null, tables)
  if (table == null) return null
  // XXX: To make the function just a bit safer, going to check
  // if the order of columns is correct - what we expect.
  const headings = Array.from(table.querySelectorAll('tbody > tr:nth-child(1) > *'))
    .filter(Boolean)
    .map((el) => minimizeStr(el.textContent)) as string[]
  if (!equals(headings, expectedHeadings)) {
    throw new Error(`Unexpected headings in recipe table: ${headings}`)
  }
  const [ _output, recipeEl, craftedAtEl ] = Array.from(table.querySelectorAll('tbody > tr:nth-child(2) > *'))
  const spans = Array.from(recipeEl.querySelectorAll('span'))
  const ingradients = spans.map(parseIngradientAmountFromSpan)
  return {
    craftedAt: e(getKeyFromURL(craftedAtEl.querySelector('a')?.getAttribute('href'))),
    ingradients,
  }

}
