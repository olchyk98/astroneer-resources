import { forEach, last } from 'ramda'
import { Nullable } from '../type-utils'
import { getImageElementSrc } from './get-image-element-src'

export interface ArticleSourceTable {
  name?: Nullable<string>
  iconURL?: Nullable<string>
  imageURL?: Nullable<string>
  [contentKey: `_${string}`]: Nullable<string>
  [elKey: `#${string}`]: Nullable<Element>
}

export function parseSourceTable (document: Document): ArticleSourceTable {
  const acc: ArticleSourceTable = {}
  const box = document.querySelector('.portable-infobox')
  if (box == null) return acc
  acc['name'] = normalizeStr(box?.querySelector('h2')?.textContent ?? '')
  acc['iconURL'] = getImageElementSrc(box?.querySelector('h2 > img'))
  acc['imageURL'] = getImageElementSrc(box.querySelector('.portable-infobox > *:nth-child(2) img'))
  const metaInfoEls = Array.from(box.querySelectorAll('.portable-infobox > section > .pi-data'))
  forEach((el) => {
    const key = el?.querySelector('.pi-data-label')?.textContent
    if (key == null) return
    const valueEl = el?.querySelector('.pi-data-value')
    const value = valueEl?.textContent
    const normalizedKey = minimizeStr(key)
    acc[`_${normalizedKey}`] = normalizeStr(value)
    acc[`#${normalizedKey}`] = valueEl
  }, metaInfoEls)
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
