import { Article } from '@astroneer/types'
import { localStore } from '../local-store'

const localStorageKey = '_articles_history'

export class PersistentArticlesHistoryStore implements PersistentArticlesHistoryStoreTrait {
  set (history: Article[]) {
    return localStore.set(localStorageKey, history)
  }
  get () {
    return localStore.getJSON<Article[]>(localStorageKey) ?? []
  }
}

export const persistentArticlesHistoryStore =
  new PersistentArticlesHistoryStore()

export interface PersistentArticlesHistoryStoreTrait {
  set(history: Article[]): void
  get(): Article[]
}
