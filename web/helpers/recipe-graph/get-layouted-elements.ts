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
): { nodes: Node<NodeData & { layouted?: true }>[], edges: Edge[] } {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))
  g.setGraph({})

  nodes.forEach((node) => {
    if (node.hidden === true) return
    g.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 0,
      height: node.measured?.height ?? 0,
    })
  })

  edges.map((edge) => {
    const sourceNode = g.node(edge.source)
    const targetNode = g.node(edge.target)
    if (sourceNode == null || targetNode == null) return
    g.setEdge(edge.source, edge.target)
  })

  Dagre.layout(g)

  return {
    nodes: nodes.map((node) => {
      const position = g.node(node.id)
      // NOTE: Position won't be calculated for
      // hidden nodes, see above.
      if (position == null) return node
      // XXX: This changes the anchor position from "center center" (set by Dagre)
      // to "top left" (required by React Flow).
      const x = position.x - (node.measured?.width ?? 0) / 2
      const y = position.y - (node.measured?.height ?? 0) / 2
      return { ...node, position: { x, y }, data: { ...node.data, layouted: true } }
    }),
    edges,
  }
}
