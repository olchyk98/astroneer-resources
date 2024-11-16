import { Node } from '@xyflow/react'
import { Article, ArticleNode } from '../../../types'

export function articleToGraphNodes (node: ArticleNode | Article): Node<ArticleGraphNodeData>[] {
  const article = 'article' in node ? node.article : node
  const _children = 'article' in node ? (node.children ?? []) : []
  return [
    {
      id: article.key,
      position: { x: 0, y: 0 },
      data: { article },
      connectable: false,
      type: 'article',
    },
  ]
}

export interface ArticleGraphNodeData extends Record<string, unknown> {
  article: Article
}
