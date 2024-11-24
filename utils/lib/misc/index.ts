export function isStringArray (arr: unknown[]): arr is string[] {
  return arr.length === 0 || typeof arr[0] === 'string'
}
