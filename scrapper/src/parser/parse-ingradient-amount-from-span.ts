import { Nullable } from '../type-utils'
import { ArticleRecipeIngradient } from '../types'
import { e, getKeyFromURL, parseNumber } from './utils'

/*
 * This is a highly specific function for extracting
 * ArticleRecipeIngradient from a span. The input span
 * is a container for resource icon, name and link with href.
 * The function will take the span and try to look behind
 * and in front (previousSibling, nextSibling) to find
 * the amount
 *
 * This function is used in recipeTables and for
 * the article overview table, since they share
 * the same approach, but in some instances the
 * amount label is placed inconsistently (left to
 * input span instead of right).
 *
 * @param {Element} span
 * @return {Element}
 * */
export function parseIngradientAmountFromSpan (span: Element): ArticleRecipeIngradient {
  const amount = parseNumber(findAmountFromSiblings(span) ?? '') || 1
  const key = e(getKeyFromURL(span.querySelector('a')?.getAttribute('href')))
  return { amount, key }
}

function findAmountFromSiblings (span: Element): Nullable<string> {
  let left = span.previousSibling?.textContent
  // Checking if element contains "x", like "4x" or "x2"
  if (!left?.includes('x')) left = null
  let right = span.nextSibling?.textContent
  // Checking if element contains "x", like "4x" or "x2"
  if (!right?.includes('x')) right = null
  return left || right
}
