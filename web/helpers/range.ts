export function rangeFloat (min = 0, max = Infinity): number {
  return (Math.random() * max) + min
}

export function range (min = 0, max = Infinity): number {
  return Math.floor(rangeFloat(min, max))
}
