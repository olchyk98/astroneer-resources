import { Article } from '@astroneer/types'
import { localStore } from '../local-store'

const localStorageKey = '_pinned_articles'

export class PersistentArticlePinsStore implements PersistentArticlePinsStoreTrait {
  set (pins: Article[]) {
    return localStore.set(localStorageKey, pins)
  }
  get () {
    return localStore.getJSON<Article[]>(localStorageKey) ?? []
  }
}

export const persistentArticlePinsStore =
  new PersistentArticlePinsStore()

export interface PersistentArticlePinsStoreTrait {
  set(pins: Article[]): void
  get(): Article[]
}
