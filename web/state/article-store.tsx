import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ArticleKey, ArticleWithRefs } from '@astroneer/types'
import { useQuery } from '@tanstack/react-query'
import { fetchDeep, fetchParentsDeep } from '../request'

export const ArticleStoreContext = createContext<ArticleStoreState>({
  article: null,
  set: () => null,
  isPending: true,
  viewStrategy: 'recipe',
})

export function ArticleStoreProvider (props: PropsWithChildren) {
  const [ articleKey, setArticleKey ] = useState<ArticleKey>('Small_Printer')
  const [ viewStrategy, setViewStrategy ] = useState<ViewStrategy>('recipe')

  const { data: article, error, isPending } = useQuery<ArticleWithRefs | null>({
    queryKey: [ 'articleNode', articleKey, viewStrategy ],
    async queryFn () {
      if (!articleKey) return null
      if (viewStrategy === 'recipe') return fetchDeep(articleKey)
      if (viewStrategy === 'usage') return fetchParentsDeep(articleKey)
      throw new Error(`Unknown view strategy "${viewStrategy}"`)
    },
  })

  const set = (key: ArticleKey, strategy: ViewStrategy = 'recipe') => {
    setArticleKey(key)
    setViewStrategy(strategy)
  }

  useEffect(() => {
    if (error != null) {
      alert(`Failed to fetch the resource: ${error}`)
    }
  }, [ error ])

  const value = useMemo(() => ({
    article,
    set,
    isPending,
    viewStrategy,
  }), [ article, isPending ])

  return (
    <ArticleStoreContext.Provider value={ value }>
      { props.children }
    </ArticleStoreContext.Provider>
  )
}

export function useArticleStore () {
  return useContext(ArticleStoreContext)
}

export interface ArticleStoreState {
  article: ArticleWithRefs | null | undefined
  set(articleKey: ArticleKey, viewStrategy?: ViewStrategy): void
  viewStrategy: ViewStrategy
  isPending: boolean
}

export type ViewStrategy =
  // XXX: top-to-bottom approach, where graph
  // displays a recipe for the article. What
  // integredients are needed, etc.
  | 'recipe'
  // XXX: bottom-to-top approach, where graph
  // displays what articles the current ingredient (article)
  // can be crafted with.
  | 'usage'
