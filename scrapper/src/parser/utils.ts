import { last } from 'ramda'
import { Nullable } from '../type-utils'
import { getImageElementSrc } from './get-image-element-src'

export interface ArticleSourceTable {
  name?: Nullable<string>
  iconURL?: Nullable<string>
  imageURL?: Nullable<string>
  [contentKey: `_${string}`]: Nullable<string>
  [elKey: `#${string}`]: Nullable<HTMLElement>
}

export function parseSourceTable (document: Document): ArticleSourceTable {
  const acc: ArticleSourceTable = {}
  const box = document.querySelector('.infoboxtable > tbody')
  if (box == null) return acc
  acc['name'] = normalizeStr(box?.querySelector('*:nth-child(1)')?.textContent ?? '')
  acc['iconURL'] = getImageElementSrc(box?.querySelector('*:nth-child(1) img'))
  // FIXME: Using box element here with selector "*:nth-child(2) img" does not work
  // here for some reason. Not really sure why. This works though, so I'm going to
  // look into this later. Probably some elements are colliding.
  acc['imageURL'] = getImageElementSrc(document.querySelector('.infoboxtable > tbody > *:nth-child(2) img'))
  // XXX: Iterating over the rest of the table
  // until we reach "Details" section, afterwards
  // we start reading item properties.
  let hasReachedDetails = false
  for (let ma = 0; ma < Infinity; ++ma) {
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
    const normalizedKey = minimizeStr(key)
    acc[`_${normalizedKey}`] = normalizeStr(value)
    acc[`#${normalizedKey}`] = valueEl
  }
  return acc
}

// XXX: Replaces all spaces in the string and makes it
// compact and easily accessible.
export function minimizeStr<T extends Nullable<string>> (str: T): T {
  if (str == null) return str
  return str.replace(/\s|\n/g, '') as T
}

// XXX: Removes new lines from the string and trims it.
export function normalizeStr<T extends Nullable<string>> (str: T): T {
  if (str == null) return str
  return str.replace(/\n/g, '').trim() as T
}

export function e<T> (v: T): NonNullable<T> | never {
  if (v == null) {
    throw new Error('Expected the value to not be nil.')
  }
  return v
}

export function getKeyFromURL<T extends Nullable<string>> (url: T): T {
  if (url == null || !url.includes('/')) return url
  // XXX: To handle more complex keys, like "Medium_Fluid_%26_Soil_Canister",
  // we have to decode it. Decoding on raw string like "Medium_Fluid_&_Soil_Canister"
  // will not do anything.
  return decodeURIComponent(last(url.split('/'))!) as T
}

export function parseNumber (str: string): number | null {
  const normal = minimizeStr(str)
  const cut = normal.replace(/,|[A-Z]|[a-z]/g, '')
  return parseInt(cut, 10) || null
}
