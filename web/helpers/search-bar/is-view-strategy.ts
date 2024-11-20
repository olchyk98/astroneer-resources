import { ViewStrategy } from '../../state'

const viewStrategies = new Set<ViewStrategy>([ 'recipe', 'usages' ])

export function isViewStrategy (value: string): value is ViewStrategy {
  return viewStrategies.has(value as ViewStrategy)
}
