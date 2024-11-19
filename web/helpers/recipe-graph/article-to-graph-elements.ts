import { Edge, Node } from '@xyflow/react'
import { getChildRefKeysForArticle } from '@astroneer/utils'
import { Article, ArticleKey, ArticleWithRefs, ReferencesMap } from '@astroneer/types'

const nodeBase = {
  position: { x: 0, y: 0 },
  connectable: false,
  type: 'article',
  style: { transition: '200ms' },
} satisfies Partial<Node<ArticleGraphNodeData>>

const edgeBase = {
  animated: true,
} satisfies Partial<Edge>

export function articleToGraphElements<T extends Pick<Article, 'key' | 'recipe' | '_parentKeys'>> (
  node: ArticleWithRefs<T>,
  parentId: ArticleKey | null = null,
  acc: ArticleGraphElements<T> = { nodes: [], edges: [] },
): ArticleGraphElements<T> {
  const parentsAsChildren = Array.isArray(node.article._parentKeys)
  const { article, _referencesMap } = node
  const isRoot = parentId == null
  const id = !isRoot ? `${parentId}-${article.key}` : article.key
  acc.nodes.push({ ...nodeBase, id, data: { article, isRoot, _referencesMap }, hidden: !isRoot })
  if (!isRoot) {
    acc.edges.push({ ...edgeBase, id: `__${id}`, source: parentId, target: id })
  }
  // TODO: This is exterimental, refactor
  // this function. It is very confusing.
  // TODO: This is exterimental, refactor
  // this function. It is very confusing.
  // TODO: This is exterimental, refactor
  // this function. It is very confusing.
  // TODO: This is exterimental, refactor
  // this function. It is very confusing.
  const childKeys = parentsAsChildren
    ? node.article._parentKeys ?? []
    : getChildRefKeysForArticle(article)
  childKeys.forEach((childKey) => {
    if (!(childKey in _referencesMap)) return
    const childNode = { article: _referencesMap[childKey], _referencesMap }
    articleToGraphElements(childNode, id, acc)
  })
  return acc
}

export interface ArticleGraphNodeData<T extends Pick<Article, 'key'> = Article>
  extends Record<string, unknown> {
  article: T,
  isRoot: boolean
  _referencesMap: ReferencesMap<T>
}

export interface ArticleGraphElements<T extends Pick<Article, 'key'>> {
  nodes: Node<ArticleGraphNodeData<T>>[]
  edges: Edge[]
}
