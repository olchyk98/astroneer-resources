export function stripPrefix (input: string, prefix: string): string {
  if (prefix.length <= 0 || !input.startsWith(prefix)) return input
  return input.slice(prefix.length)
}

export function stripSuffix (input: string, suffix: string): string {
  if (suffix.length <= 0 || !input.endsWith(suffix)) return input
  return input.slice(-suffix.length)
}
