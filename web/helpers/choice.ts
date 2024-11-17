import { range } from './range'

export function choice<T> (arr: T[]): T {
  return arr[range(0, arr.length)]
}
