import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ArticleKey, ArticleWithRefs } from '@astroneer/types'
import { useQuery } from '@tanstack/react-query'
import { fetchDeep, fetchParentsDeep } from '../request'

export const ArticleStoreContext = createContext<ArticleStoreState>({
  article: null,
  usages: async () => false,
  recipe: async () => false,
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
      if (viewStrategy === 'usages') return fetchParentsDeep(articleKey)
      throw new Error(`Unknown view strategy "${viewStrategy}"`)
    },
  })

  /**
   * Fetches article for input key and displays it in form
   * of "recipe". See more information in ViewStrategy type.
   * */
  const recipe = async (key: ArticleKey): Promise<true> => {
    setViewStrategy('recipe')
    setArticleKey(key)
    return true
  }

  /**
   * Fetches article for input key and displays it in form
   * of "usage". See more information in ViewStrategy type.
   *
   * Returns false if if there are no parents
   * */
  const usages = async (key: ArticleKey): Promise<boolean> => {
    const articleWithParents = await fetchParentsDeep(key)
    if (!articleWithParents.article._parentKeys?.length) return false
    setViewStrategy('usages')
    setArticleKey(key)
    return true
  }

  useEffect(() => {
    if (error != null) {
      alert(`Failed to fetch the resource: ${error}`)
    }
  }, [ error ])

  const value = useMemo(() => ({
    article,
    isPending,
    viewStrategy,
    recipe,
    usages,
  }), [ article, isPending, viewStrategy ])

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
  viewStrategy: ViewStrategy
  isPending: boolean
  recipe(articleKey: ArticleKey): Promise<boolean>
  usages(articleKey: ArticleKey): Promise<boolean>
}

export type ViewStrategy =
  // XXX: top-to-bottom approach, where graph
  // displays a recipe for the article. What
  // integredients are needed, etc.
  | 'recipe'
  // XXX: bottom-to-top approach, where graph
  // displays what articles the current ingredient (article)
  // can be crafted with.
  | 'usages'
