import '@xyflow/react/dist/style.css'
import { Controls, Edge, MiniMap, NodeTypes, ProOptions, ReactFlow, useEdgesState, useNodesInitialized, useNodesState, useReactFlow } from '@xyflow/react'
import { useEffect, useState } from 'react'
import {
  ArticleGraphNode,
  articleToGraphElements,
  getLayoutedElements,
} from '../../helpers'
import { NodeRenderer } from './node-renderer'
import { Box, HStack, Spinner } from '@chakra-ui/react'
import { useIsSmallDevice } from '../../hooks'
import { useArticleStore } from '../../state'

// NOTE: Removing attribution as allowed by
// ReactFlow documentation for personal non-profit projects.
const proOptions: ProOptions = { hideAttribution: true }

const nodeTypes: NodeTypes = {
  article: NodeRenderer,
}

export function ArticleGraph (_props: ArticleGraphProps) {
  const isSmallDevice = useIsSmallDevice()
  const articleStore = useArticleStore()
  const [ nodes, setNodes, onNodesUpdated ] = useNodesState<ArticleGraphNode>([])
  const [ edges, setEdges, onEdgesUpdated ] = useEdgesState<Edge>([])
  const [ isPositioningNodes, setIsPositioningNodes ] = useState(false)
  const nodesInitialized = useNodesInitialized()
  const api = useReactFlow()

  const isLoading = articleStore.isPending || isPositioningNodes

  useEffect(() => {
    setIsPositioningNodes(true)
    const elements = articleStore.article == null
      ? { nodes: [], edges: [] }
      : articleToGraphElements(articleStore.article, articleStore.viewStrategy)
    setNodes(elements.nodes)
    setEdges(elements.edges)
  }, [ articleStore.article ])

  useEffect(() => {
    // XXX: Because ReactFlow has to assign property
    // "measured" to nodes before we can position them,
    // we listen to nodesInitialized value. "measured"
    // property on nodes contains information about
    // actual DOM element sizes for nodes and is essential
    // to use getLayoutedElements function. Check description
    // of that function for more info.
    if (nodesInitialized) {
      const direction = articleStore.viewStrategy === 'recipe' ? 'TB' : 'BT'
      const layoutedElements = getLayoutedElements(nodes, edges, direction)
      setNodes(layoutedElements.nodes)
      setEdges(layoutedElements.edges)
      // XXX: Very hacky solution to move the camera to the
      // center of the graph after we update the positions
      // for nodes. I know, I don't like this either.
      if (isPositioningNodes) {
        setTimeout(() => {
          api.fitView()
          setIsPositioningNodes(false)
        }, 50)
      }
    }
  }, [ nodesInitialized ])

  return (
    <HStack w="full" h="full" position="relative">
      {
        isLoading && (
          <HStack w="full" h="full" zIndex="5" position="fixed" top="0" left="0" justifyContent="center">
            <Box position="absolute" top="0" left="0" bg="black" opacity={ 0.6 } h="full" w="full" />
            <Spinner zIndex="2" size="lg" />
          </HStack>
        )
      }
      <ReactFlow
        nodes={ nodes }
        edges={ edges }
        onNodesChange={ onNodesUpdated }
        onEdgesChange={ onEdgesUpdated }
        colorMode="dark"
        proOptions={ proOptions }
        nodeTypes={ nodeTypes }
        fitView={ true }
        nodesDraggable={ false }
        panOnScroll={ true }
        panOnDrag={ true }
        preventScrolling={ true }
        zoomOnScroll={ false }
        zoomOnDoubleClick={ true }
        zoomOnPinch={ true }
        minZoom={ 0.2 }
        draggable={ false }
        style={ { background: 'transparent' } }
      >
        {
          !isSmallDevice && (
            <>
              <MiniMap />
              <Controls />
            </>
          )
        }
      </ReactFlow>
    </HStack>
  )
}

export interface ArticleGraphProps {}
