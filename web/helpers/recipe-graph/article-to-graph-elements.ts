import { Edge, Node } from '@xyflow/react'
import { ArticleKey, ArticleNode, DenormalizedArticle } from '../../../types'

const nodeBase = {
  position: { x: 0, y: 0 },
  connectable: false,
  type: 'article',
  style: { transition: '200ms' },
} satisfies Partial<Node<ArticleGraphNodeData>>

const edgeBase = {
  animated: true,
} satisfies Partial<Edge>

export function articleToGraphElements<T extends Pick<DenormalizedArticle, 'key'>> (
  node: ArticleNode<T>,
  parentId: ArticleKey | null = null,
  acc: ArticleGraphElements<T> = { nodes: [], edges: [] },
): ArticleGraphElements<T> {
  const article = 'article' in node ? node.article : node
  const children = 'article' in node ? (node.children ?? []) : []
  const isRoot = parentId == null
  const id = !isRoot ? `${parentId}-${article.key}` : article.key
  acc.nodes.push({ ...nodeBase, id, data: { article, isRoot }, hidden: !isRoot })
  if (!isRoot) {
    acc.edges.push({ ...edgeBase, id: `__${id}`, source: parentId, target: id })
  }
  children.forEach((childNode) => {
    articleToGraphElements(childNode, id, acc)
  })
  return acc
}

export interface ArticleGraphNodeData<T extends Pick<DenormalizedArticle, 'key'> = DenormalizedArticle>
  extends Record<string, unknown> {
  article: T,
  isRoot: boolean
  // NOTE: This property is set by getLayoutedElements.
  layouted?: boolean
}

export interface ArticleGraphElements<T extends Pick<DenormalizedArticle, 'key'>> {
  nodes: Node<ArticleGraphNodeData<T>>[]
  edges: Edge[]
}
