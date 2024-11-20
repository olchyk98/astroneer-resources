import { useState } from 'react'
import { useArticleStore } from '../../state'
import { ArticleGraphNode } from '../../helpers'
import { useToggleChildNodes } from './use-toggle-child-nodes'

export function useArticleUsages (articleNode: Pick<ArticleGraphNode, 'id' | 'data'>): ArticleUsagesManager {
  const { article } = articleNode.data
  const articleStore = useArticleStore()
  const { toggleChildNodes } = useToggleChildNodes(articleNode)
  const [ foundNoUsages, setFoundNoUsages ] = useState(false)
  const [ isSearching, setIsSearching ] = useState(false)

  const didNotFetchUsagesYet = (article._parentKeys == null && !foundNoUsages)
  const hasFetchedUsages = Boolean(article._parentKeys?.length)
  const hasUsages = didNotFetchUsagesYet || hasFetchedUsages

  const toggleFetchedUsagesVisibility = () => {
    if (articleStore.viewStrategy !== 'usages') return
    toggleChildNodes()
  }

  const fetchUsages = async () => {
    setIsSearching(true)
    const r = await articleStore.usages(article.key)
    if (!r) setFoundNoUsages(true)
    setIsSearching(false)
  }

  // XXX: The function will attempt to display
  // usages for the article. If there are no
  // usages the underlying articleStore.usage
  // function will return false and won't
  // reset the graph. In that case, we'll
  // save the result and output it from this hook.
  const toggleUsages = async () => {
    if (isSearching) return
    if (hasFetchedUsages) return toggleFetchedUsagesVisibility()
    if (didNotFetchUsagesYet) return fetchUsages()
  }

  return {
    hasUsages,
    isSearchingUsages: isSearching,
    toggleUsages,
  }
}

export interface ArticleUsagesManager {
  hasUsages: boolean
  isSearchingUsages: boolean
  toggleUsages(): void
}
