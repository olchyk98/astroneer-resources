import { last } from 'ramda'
import { Nullable } from '../type-utils'

export interface ArticleSourceTable {
  name?: Nullable<string>
  iconURL?: Nullable<string>
  imageURL?: Nullable<string>
  [contentKey: `#${string}`]: Nullable<string>
  [elKey: `_${string}`]: Nullable<HTMLElement>
}

export function parseSourceTable (document: Document): ArticleSourceTable {
  const acc: ArticleSourceTable = {}
  const box = document.querySelector('.infoboxtable > tbody')
  if (box == null) return acc
  acc['name'] = normalizeStr(box?.querySelector('*:nth-child(1)')?.textContent ?? '')
  acc['iconURL'] = box?.querySelector('*:nth-child(1) img')?.getAttribute('src')
  // FIXME: Using box element here with selector "*:nth-child(2) img" does not work
  // here for some reason. Not really sure why. This works though, so I'm going to
  // look into this later. Probably some elements are colliding.
  acc['imageURL'] = document.querySelector('.infoboxtable > tbody > *:nth-child(2) img')?.getAttribute('src')
  // XXX: Iterating over the rest of the table
  // until we reach "Details" section, afterwards
  // we start reading item properties.
  let hasReachedDetails = false
  for (let ma = 3; ma < Infinity; ++ma) {
    const el = box?.querySelector(`*:nth-child(${ma})`)
    if (!hasReachedDetails) {
      if (el?.textContent?.includes('Details')) {
        hasReachedDetails = true
      }
      continue
    }
    if (el == null) break
    const key = el?.querySelector('th')?.textContent
    if (key == null) continue
    const valueEl = el?.querySelector('td')
    const value = valueEl?.textContent
    const normalizedKey = normalizeStr(key)
    acc[`#${normalizedKey}`] = normalizeStr(value)
    acc[`_${normalizedKey}`] = valueEl
  }
  return acc
}

export function normalizeStr<T extends Nullable<string>> (str: T): T {
  if (str == null) return str
  return str.replace(/\s|\n/g, '') as T
}

export function e<T> (v: T): NonNullable<T> | never {
  if (v == null) {
    throw new Error('Expected the value to not be nil.')
  }
  return v
}

export function getKeyFromURL<T extends Nullable<string>> (url: T): T {
  if (url == null) return url
  return last(url.split('/')) as T
}
