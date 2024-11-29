import { Article, ArticleKey } from '@astroneer/types'
import { append, findIndex, pluck, remove } from 'ramda'
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { persistentArticlePinsStore } from '../helpers'

const ArticlePinsContext = createContext<ArticlePinsStoreValue>({
  get: () => [],
  togglePin: () => {},
  pinned: () => false,
})

export function ArticlePinsStoreProvider (props: PropsWithChildren) {
  const [ pins, setPins ] = useState<Article[]>([])

  useEffect(() => {
    // XXX: Because the SSR loaded, we have to load state
    // from localStorage upon first render.
    setPins(persistentArticlePinsStore.get())
  }, [])

  const pinnedKeysSet = useMemo(() => (
    new Set(pluck('key', pins))
  ), [ pins ])

  const togglePin = (article: Article) => {
    setPins((c) => {
      const index = findIndex((l) => l.key === article.key, c)
      const next = index < 0 ? append(article, c) : remove(index, 1, c)
      persistentArticlePinsStore.set(next)
      return next
    })
  }

  const get = useCallback( () => pins, [ pins ])
  const pinned = useCallback((key: ArticleKey) => pinnedKeysSet.has(key), [ pins ])

  const value = useMemo(
    (): ArticlePinsStoreValue => ({
      togglePin,
      get,
      pinned,
    }),
    [ get, pinned ],
  )

  return (
    <ArticlePinsContext.Provider value={ value }>
      { props.children }
    </ArticlePinsContext.Provider>
  )
}

export const useArticlePinsStore = () => {
  return useContext(ArticlePinsContext)
}

export interface ArticlePinsStoreValue {
  get(): Article[]
  pinned(key: ArticleKey): boolean
  togglePin(article: Article): void
}
