import { Nullable } from '../type-utils'

export function getImageElementSrc (el: Nullable<Element>): string | null {
  if (el == null) return null
  // XXX: Some pages have additional image loading step, therefore
  // it's safer to pick original src when possible.
  return el.getAttribute('data-src') || el.getAttribute('src')
}
