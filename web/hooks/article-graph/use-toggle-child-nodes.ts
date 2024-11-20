import { useReactFlow } from '@xyflow/react'
import { any, filter, forEach } from 'ramda'
import { ArticleGraphNode } from '../../helpers'

export function useToggleChildNodes (parentNode: Pick<ArticleGraphNode, 'id'>) {
  const api = useReactFlow()

  const toggleChildNodes = () => {
    const allNodes = api.getNodes() as ArticleGraphNode[]
    const nearestChildNodes = filter(
      (node) => node.id === `${parentNode.id}-${node.data.article.key}`,
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
        if (node.id.startsWith(`${parentNode.id}-`)) {
          api.updateNode(node.id, { hidden: true })
        }
      }, allNodes)
    }
  }
  return {
    toggleChildNodes,
  }
}
