import { useState } from 'react'
import { useArticleStore } from '../../state'
import { any, filter, forEach } from 'ramda'
import { useReactFlow } from '@xyflow/react'
import { ArticleGraphNode } from '../../helpers'

export function useArticleUsages (articleNode: Pick<ArticleGraphNode, 'id' | 'data'>): ArticleUsagesManager {
  const { article } = articleNode.data
  const api = useReactFlow()
  const articleStore = useArticleStore()
  const [ foundNoUsages, setFoundNoUsages ] = useState(false)
  const [ isSearching, setIsSearching ] = useState(false)

  const didNotFetchUsagesYet = (article._parentKeys == null && !foundNoUsages)
  const hasFetchedUsages = Boolean(article._parentKeys?.length)
  const hasUsages = didNotFetchUsagesYet || hasFetchedUsages

  const toggleFetchedUsagesVisibility = () => {
    if (articleStore.viewStrategy !== 'usages') return
    const allNodes = api.getNodes() as ArticleGraphNode[]
    const nearestChildNodes = filter(
      (node) => node.id === `${articleNode.id}-${node.data.article.key}`,
      allNodes,
    )
    const anyNodeIsHidden = any((l) => Boolean(l.hidden), nearestChildNodes)
    if (anyNodeIsHidden) {
      // XXX: Open first nearest children only
      forEach((childNode) => {
        api.updateNode(childNode.id, { hidden: false })
      }, nearestChildNodes)
    } else {
      // XXX: Hide all nested children
      forEach((node) => {
        if (node.id.startsWith(`${articleNode.id}-`)) {
          api.updateNode(node.id, { hidden: true })
        }
      }, allNodes)
    }
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
