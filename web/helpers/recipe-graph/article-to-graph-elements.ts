import { Edge, Node } from '@xyflow/react'
import { getChildRefKeysForArticle } from '@astroneer/utils'
import { Article, ArticleKey, ArticleWithRefs, ReferencesMap } from '@astroneer/types'
import { ViewStrategy } from '../../state'

const nodeBase = {
  position: { x: 0, y: 0 },
  connectable: false,
  type: 'article',
  style: { transition: '200ms' },
} satisfies Partial<ArticleGraphNode>

const edgeBase = {
  animated: false,
} satisfies Partial<Edge>

export function articleToGraphElements<T extends Pick<Article, 'key' | 'recipe' | '_parentKeys'>> (
  node: ArticleWithRefs<T>,
  viewStrategy: ViewStrategy,
  parentId: ArticleKey | null = null,
  acc: ArticleGraphElements<T> = { nodes: [], edges: [] },
): ArticleGraphElements<T> {
  const { article, _referencesMap } = node
  const isRoot = parentId == null
  const id = !isRoot ? `${parentId}-${article.key}` : article.key
  acc.nodes.push({ ...nodeBase, id, data: { article, isRoot, _referencesMap }, hidden: !isRoot })
  if (!isRoot) {
    acc.edges.push({ ...edgeBase, id: `__${id}`, source: parentId, target: id })
  }
  const childKeys = viewStrategy === 'recipe'
    ? getChildRefKeysForArticle(article)
    : node.article._parentKeys ?? []
  childKeys.forEach((childKey) => {
    if (!(childKey in _referencesMap)) return
    const childNode = { article: _referencesMap[childKey], _referencesMap }
    articleToGraphElements(childNode, viewStrategy, id, acc)
  })
  return acc
}

export interface ArticleGraphNodeData<T extends Pick<Article, 'key'> = Article>
  extends Record<string, unknown> {
  article: T,
  isRoot: boolean
  _referencesMap: ReferencesMap<T>
}

export type ArticleGraphNode<T extends Pick<Article, 'key'> = Article> = (
  Node<ArticleGraphNodeData<T>>
)

export interface ArticleGraphElements<T extends Pick<Article, 'key'>> {
  nodes: ArticleGraphNode<T>[]
  edges: Edge[]
}
