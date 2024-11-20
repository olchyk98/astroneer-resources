import { Edge, Node } from '@xyflow/react'
import { Article, ArticleWithRefs } from '@astroneer/types'
import { ArticleGraphNodeData, articleToGraphElements } from '../../../../helpers'
import { map, pick } from 'ramda'

const nodesForTest = <T extends Pick<Article, 'key'>>(
  nodes: Node<ArticleGraphNodeData<T>>[],
): Pick<Node<ArticleGraphNodeData<T>>, 'id'>[] => (
  map(pick([ 'id', 'data' ]), nodes)
)

const edgesForTest = (edges: Edge[]): Pick<Edge, 'id' | 'source' | 'target'>[] => (
  map(pick([ 'id', 'source', 'target' ]), edges)
)

describe('articleToGraphElements', () => {
  it('should return single node for a single level tree', () => {
    const article= { key: 'RTG' }
    const node: ArticleWithRefs<Pick<Article, 'recipe' | 'key'>> = { article, _referencesMap: {} }
    const elements = articleToGraphElements(node, 'recipe')
    const nodes = nodesForTest(elements.nodes)
    const edges = edgesForTest(elements.edges)
    expect(nodes).toStrictEqual([
      { id: 'RTG', data: { article, isRoot: true, _referencesMap: {} } },
    ])
    expect(edges).toStrictEqual([])
  })

  it('should return relational nodes for a nested tree', () => {
    const node: ArticleWithRefs<Pick<Article, 'key' | 'recipe'>> = {
      article: {
        key: 'RTG',
        recipe: {
          craftedAt: 'Backpack',
          ingredients: [
            {
              amount: 1,
              key: 'Nanocarbon_Alloy',
            },
            {
              amount: 1,
              key: 'Lithium_Carbonide',
            },
          ],
        },
      },
      _referencesMap: {
        Nanocarbon_Alloy: {
          key: 'Nanocarbon_Alloy',
          recipe: {
            craftedAt: 'Backpack',
            ingredients: [
              { amount: 1, key: 'Nano_Carbon' },
              { amount: 1, key: 'Alloy' },
            ],
          },
        },
        Lithium_Carbonide: {
          key: 'Lithium_Carbonide',
          recipe: {
            craftedAt: 'Backpack',
            ingredients: [
              { amount: 1, key: 'Lithium' },
              { amount: 1, key: 'Carbon' },
            ],
          },
        },
        Backpack: { key: 'Backpack' },
        Nano_Carbon: { key: 'Nano_Carbon' },
        Alloy: { key: 'Alloy' },
        Carbon: { key: 'Carbon' },
        Lithium: { key: 'Lithium' },
      },
    }

    const elements = articleToGraphElements(node, 'recipe')
    const nodes = nodesForTest(elements.nodes)
    const edges = edgesForTest(elements.edges)

    expect(nodes).toStrictEqual([
      { id: 'RTG', data: { article: node.article, isRoot: true, _referencesMap: node._referencesMap } },
      { id: 'RTG-Nanocarbon_Alloy', data: { article: node._referencesMap['Nanocarbon_Alloy'], isRoot: false, _referencesMap: node._referencesMap } },
      { id: 'RTG-Nanocarbon_Alloy-Nano_Carbon', data: { article: node._referencesMap['Nano_Carbon'], isRoot: false, _referencesMap: node._referencesMap } },
      { id: 'RTG-Nanocarbon_Alloy-Alloy', data: { article: node._referencesMap['Alloy'], isRoot: false, _referencesMap: node._referencesMap } },
      { id: 'RTG-Nanocarbon_Alloy-Backpack', data: { article: node._referencesMap['Backpack'], isRoot: false, _referencesMap: node._referencesMap } },
      { id: 'RTG-Lithium_Carbonide', data: { article: node._referencesMap['Lithium_Carbonide'], isRoot: false, _referencesMap: node._referencesMap } },
      { id: 'RTG-Lithium_Carbonide-Lithium', data: { article: node._referencesMap['Lithium'], isRoot: false, _referencesMap: node._referencesMap } },
      { id: 'RTG-Lithium_Carbonide-Carbon', data: { article: node._referencesMap['Carbon'], isRoot: false, _referencesMap: node._referencesMap } },
      { id: 'RTG-Lithium_Carbonide-Backpack', data: { article: node._referencesMap['Backpack'], isRoot: false, _referencesMap: node._referencesMap } },
      { id: 'RTG-Backpack', data: { article: node._referencesMap['Backpack'], isRoot: false, _referencesMap: node._referencesMap } },
    ])

    expect(edges).toStrictEqual([
      { id: '__RTG-Nanocarbon_Alloy', source: 'RTG', target: 'RTG-Nanocarbon_Alloy' },
      { id: '__RTG-Nanocarbon_Alloy-Nano_Carbon', source: 'RTG-Nanocarbon_Alloy', target: 'RTG-Nanocarbon_Alloy-Nano_Carbon' },
      { id: '__RTG-Nanocarbon_Alloy-Alloy', source: 'RTG-Nanocarbon_Alloy', target: 'RTG-Nanocarbon_Alloy-Alloy' },
      { id: '__RTG-Nanocarbon_Alloy-Backpack', source: 'RTG-Nanocarbon_Alloy', target: 'RTG-Nanocarbon_Alloy-Backpack' },
      { id: '__RTG-Lithium_Carbonide', source: 'RTG', target: 'RTG-Lithium_Carbonide' },
      { id: '__RTG-Lithium_Carbonide-Lithium', source: 'RTG-Lithium_Carbonide', target: 'RTG-Lithium_Carbonide-Lithium' },
      { id: '__RTG-Lithium_Carbonide-Carbon', source: 'RTG-Lithium_Carbonide', target: 'RTG-Lithium_Carbonide-Carbon' },
      { id: '__RTG-Lithium_Carbonide-Backpack', source: 'RTG-Lithium_Carbonide', target: 'RTG-Lithium_Carbonide-Backpack' },
      { id: '__RTG-Backpack', source: 'RTG', target: 'RTG-Backpack' },
    ])
  })
})
