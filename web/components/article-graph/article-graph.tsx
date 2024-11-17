import '@xyflow/react/dist/style.css'
import { Edge, Node, NodeTypes, ProOptions, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import { Article, ArticleNode } from '../../../types'
import { useEffect } from 'react'
import {
  ArticleGraphNodeData,
  articleToGraphNodes,
  getLayoutedElements,
} from '../../helpers'
import { NodeRenderer } from './node-renderer'

// NOTE: Removing attribution as allowed by
// ReactFlow documentation for personal non-profit projects.
const proOptions: ProOptions = { hideAttribution: true }

const nodeTypes: NodeTypes = {
  article: NodeRenderer,
}

export function ArticleGraph (props: ArticleGraphProps) {
  const [ nodes, setNodes, onNodesUpdated ] = useNodesState<Node<ArticleGraphNodeData>>([])
  const [ edges, setEdges, onEdgesUpdated ] = useEdgesState<Edge>([])

  const onLayoutChange = () => {
    const layoutedElements = getLayoutedElements(nodes, edges)
    setNodes(layoutedElements.nodes)
    setEdges(layoutedElements.edges)
  }

  useEffect(() => {
    const nextNodes = props.article == null
      ? [] : articleToGraphNodes(props.article)
    setNodes(nextNodes)
    setEdges([])
  }, [ props.article ])

  return (
    <ReactFlow
      nodes={ nodes }
      edges={ edges }
      onNodesChange={ onNodesUpdated }
      onEdgesChange={ onEdgesUpdated }
      colorMode="dark"
      proOptions={ proOptions }
      nodeTypes={ nodeTypes }
      nodesDraggable={ false }
      fitView={ true }
      panOnScroll={ false }
      panOnDrag={ false }
      preventScrolling={ true }
      zoomOnScroll={ false }
      zoomOnDoubleClick={ false }
      zoomOnPinch={ false }
      draggable={ false }
      style={ { background: 'transparent' } }
    >
    </ReactFlow>
  )
}

export interface ArticleGraphProps {
  article: ArticleNode | Article | null
}
