const formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  useGrouping: true,
})

export function formatNumber (n: number): string {
  return formatter.format(n)
}
