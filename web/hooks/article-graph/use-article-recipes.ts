import { getChildRefKeysForArticle } from '@astroneer/utils'
import { ArticleGraphNode } from '../../helpers'
import { useMemo } from 'react'
import { ArticleKey } from '@astroneer/types'
import { useReactFlow } from '@xyflow/react'
import { filter, forEach, pluck, startsWith } from 'ramda'
import { useToggleChildNodes } from './use-toggle-child-nodes'
import { useArticleStore } from '../../state'

export function useArticleRecipes (articleNode: Pick<ArticleGraphNode, 'id' | 'data'>) {
  const api = useReactFlow()
  const { article } = articleNode.data
  const articleStore = useArticleStore()
  const { toggleChildNodes } = useToggleChildNodes(articleNode)

  function expandRecipe (key: ArticleKey) {
    const childId = `${articleNode.id}-${key}`
    const childNode = api.getNode(childId)
    if (childNode == null) return
    if (childNode.hidden) {
      api.updateNode(childId, { hidden: false })
    } else {
      const allNodeIds = pluck('id', api.getNodes())
      const nestedChildIds = filter(startsWith(childId), allNodeIds)
      // XXX: Find and hide all the children nodes
      forEach((nestedChildId) => {
        api.updateNode(nestedChildId, { hidden: true })
      }, nestedChildIds)
    }
  }

  const toggleRecipes = () => {
    if (articleStore.viewStrategy === 'recipe') {
      toggleChildNodes()
    } else {
      articleStore.recipe(article.key)
    }
  }

  const hasRecipes = useMemo(
    () => getChildRefKeysForArticle(article).length > 0,
    [ article ],
  )

  return {
    hasRecipes,
    toggleRecipes,
    expandRecipe,
  }
}
