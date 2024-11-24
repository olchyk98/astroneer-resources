import { ArticleKey } from '@astroneer/types'
import { reduce } from 'ramda'

export const planetKeys: ArticleKey[] = [
  'Sylva',
  'Desolo',
  'Calidor',
  'Vesania',
  'Novus',
  'Glacio',
  'Atrox',
  'Aeoluz',
]

export const planetKeysMap = reduce((acc, key) => {
  acc[key] = key
  return acc
}, {} as Record<ArticleKey, string>, planetKeys)
