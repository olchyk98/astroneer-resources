import Dagre from '@dagrejs/dagre'
import { Edge, Node } from '@xyflow/react'

/* This function sets all the nodes and edges
** that we've defined in ReactFlow in Dagre graph instance.
** Then asks the instance to internally align all the nodes,
** after which it pulls new positions of nodes in Dagre
** graph and sets them as new position on input nodes.
** Kind of hacky to be fair, but this example was
** presented in ReactFlow documentation.
** */
export function getLayoutedElements <NodeData extends Record<string, unknown>> (
  nodes: Node<NodeData>[],
  edges: Edge[],
): { nodes: Node<NodeData>[], edges: Edge[] } {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))
  g.setGraph({})

  edges.map((edge) => {
    g.setEdge(edge.source, edge.target)
  })

  nodes.forEach((node) => {
    g.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 0,
      height: node.measured?.height ?? 0,
    })
  })

  Dagre.layout(g)

  return {
    nodes: nodes.map((node) => {
      const { x, y } = g.node(node.id)
      return { ...node, position: { x, y } }
    }),
    edges,
  }
}
