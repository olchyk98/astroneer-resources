import { ArticleKey } from '@astroneer/types'

export function getWikiURL (key: ArticleKey): string {
  return `https://astroneer.wiki.gg/wiki/${key}`
}
