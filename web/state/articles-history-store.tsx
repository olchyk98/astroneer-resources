import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { persistentArticlesHistoryStore } from '../helpers'
import { Article } from '@astroneer/types'
import { any } from 'ramda'

const MAX_HISTORY_SIZE = 7

const ArticlesHistoryContext = createContext<ArticlesHistoryState>({
  add: () => false,
  get: () => [],
  history: [],
})

export function ArticlesHistoryStoreProvider (props: PropsWithChildren) {
  const [ history, setHistory ] = useState<Article[]>([])

  useEffect(() => {
    // XXX: Because the SSR loaded, we have to load state
    // from localStorage upon first render.
    setHistory(persistentArticlesHistoryStore.get())
  }, [])

  const add = (article: Article): boolean => {
    // XXX: If article already exists in history,
    // we don't append it. History is only for new
    // articles.
    const existing = any((l) => l.key === article.key, history)
    if (existing) return false
    setHistory((c) => {
      // XXX: Takes last X items of the history and pushes a new one
      const next = [ ...c.slice(-MAX_HISTORY_SIZE + 1), article ]
      persistentArticlesHistoryStore.set(next)
      return next
    })
    return true
  }

  const get = () => history

  const value = useMemo(() => ({
    history,
    get,
    add,
  }), [ history ])

  return (
    <ArticlesHistoryContext.Provider value={ value }>
      { props.children }
    </ArticlesHistoryContext.Provider>
  )
}

export function useArticlesHistoryStore () {
  return useContext(ArticlesHistoryContext)
}

export interface ArticlesHistoryState {
  history: Article[]
  add(article: Article): boolean
  get(): Article[]
}
