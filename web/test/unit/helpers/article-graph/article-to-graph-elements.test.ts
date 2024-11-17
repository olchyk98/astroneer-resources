import { Edge, Node } from '@xyflow/react'
import { Article, ArticleNode } from '../../../../../types'
import { ArticleGraphNodeData, articleToGraphElements } from '../../../../helpers'
import { map, pick } from 'ramda'

const nodesForTest = <T extends Pick<Article, 'key'>>(
  nodes: Node<ArticleGraphNodeData<T>>[],
): Pick<Node<ArticleGraphNodeData<T>>, 'id' | 'data'>[] => (
  map(pick([ 'id', 'data' ]), nodes)
)

const edgesForTest = (edges: Edge[]): Pick<Edge, 'id' | 'source' | 'target'>[] => (
  map(pick([ 'id', 'source', 'target' ]), edges)
)

describe('articleToGraphElements', () => {
  it('should return single node for a single level tree', () => {
    const article: Pick<Article, 'key'> = { key: 'RTG' }
    const node: ArticleNode<Pick<Article, 'key'>> = { article }
    const elements = articleToGraphElements(node)
    const nodes = nodesForTest(elements.nodes)
    const edges = edgesForTest(elements.edges)
    expect(nodes).toStrictEqual([
      { id: 'RTG', data: { article, isRoot: true } },
    ])
    expect(edges).toStrictEqual([])
  })

  it('should return relational nodes for a nested tree', () => {
    const node: ArticleNode<Pick<Article, 'key'>> = {
      article: { key: 'RTG' },
      children: [
        {
          article: { key: 'Nanocarbon_Alloy' },
          children: [
            {
              article: { key: 'Nano_Carbon' },
              children: [
                { article: { key: 'Compound' } },
                { article: { key: 'Carbon' } },
              ],
            },
            {
              article: { key: 'Alloy' },
            },
          ],
        },
        {
          article: { key: 'Lithium_Carbonide' },
          children: [
            { article: { key: 'Lithium' } },
            { article: { key: 'Carbon' } },
          ],
        },
      ],
    }
    const elements = articleToGraphElements(node)
    const nodes = nodesForTest(elements.nodes)
    const edges = edgesForTest(elements.edges)
    expect(nodes).toStrictEqual([
      { id: 'RTG', data: { article: { key: 'RTG' }, isRoot: true } },

      { id: 'RTG-Nanocarbon_Alloy', data: { article: { key: 'Nanocarbon_Alloy' }, isRoot: false } },
      { id: 'RTG-Nanocarbon_Alloy-Nano_Carbon', data: { article: { key: 'Nano_Carbon' }, isRoot: false } },
      { id: 'RTG-Nanocarbon_Alloy-Nano_Carbon-Compound', data: { article: { key: 'Compound' }, isRoot: false } },
      { id: 'RTG-Nanocarbon_Alloy-Nano_Carbon-Carbon', data: { article: { key: 'Carbon' }, isRoot: false } },
      { id: 'RTG-Nanocarbon_Alloy-Alloy', data: { article: { key: 'Alloy' }, isRoot: false } },

      { id: 'RTG-Lithium_Carbonide', data: { article: { key: 'Lithium_Carbonide' }, isRoot: false } },
      { id: 'RTG-Lithium_Carbonide-Lithium', data: { article: { key: 'Lithium' }, isRoot: false } },
      { id: 'RTG-Lithium_Carbonide-Carbon', data: { article: { key: 'Carbon' }, isRoot: false } },
    ])
    expect(edges).toStrictEqual([
      { id: '__RTG-Nanocarbon_Alloy', source: 'RTG', target: 'RTG-Nanocarbon_Alloy' },
      { id: '__RTG-Nanocarbon_Alloy-Nano_Carbon', source: 'RTG-Nanocarbon_Alloy', target: 'RTG-Nanocarbon_Alloy-Nano_Carbon' },
      { id: '__RTG-Nanocarbon_Alloy-Nano_Carbon-Compound', source: 'RTG-Nanocarbon_Alloy-Nano_Carbon', target: 'RTG-Nanocarbon_Alloy-Nano_Carbon-Compound' },
      { id: '__RTG-Nanocarbon_Alloy-Nano_Carbon-Carbon', source: 'RTG-Nanocarbon_Alloy-Nano_Carbon', target: 'RTG-Nanocarbon_Alloy-Nano_Carbon-Carbon' },
      { id: '__RTG-Nanocarbon_Alloy-Alloy', source: 'RTG-Nanocarbon_Alloy', target: 'RTG-Nanocarbon_Alloy-Alloy' },

      { id: '__RTG-Lithium_Carbonide', source: 'RTG', target: 'RTG-Lithium_Carbonide' },
      { id: '__RTG-Lithium_Carbonide-Lithium', source: 'RTG-Lithium_Carbonide', target: 'RTG-Lithium_Carbonide-Lithium' },
      { id: '__RTG-Lithium_Carbonide-Carbon', source: 'RTG-Lithium_Carbonide', target: 'RTG-Lithium_Carbonide-Carbon' },
    ])
  })
})
