import { ArticleKey } from '@astroneer/types'
import { assoc, dissoc } from 'ramda'
import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useArticleStore } from './article-store'

const NodesStatusContext = createContext<NodesStatusStoreValue>({
  statusMap: {},
  remove: () => null,
  set: () => null,
  toggle: () => null,
})

export function NodesStatusStoreProvider (props: PropsWithChildren) {
  const [ statusMap, setStatusMap ] = useState<NodeStatusMap>({})
  const articleStore = useArticleStore()

  const set: NodesStatusStoreValue['set'] = (nodeId, status) => {
    setStatusMap(assoc(nodeId, status))
  }

  const remove: NodesStatusStoreValue['remove'] = (nodeId) => {
    setStatusMap(dissoc(nodeId))
  }

  const toggle: NodesStatusStoreValue['toggle'] = (nodeId, status) => {
    if (statusMap[nodeId] === status) {
      remove(nodeId)
    } else {
      set(nodeId, status)
    }
  }

  const reset = () => {
    setStatusMap({})
  }

  const value = useMemo((): NodesStatusStoreValue => ({
    set,
    remove,
    statusMap,
    toggle,
  }), [ statusMap ])

  useEffect(() => {
    reset()
  }, [ articleStore.article, articleStore.viewStrategy ])

  return (
    <NodesStatusContext.Provider value={ value }>
      { props.children }
    </NodesStatusContext.Provider>
  )
}

export function useNodesStatusStore () {
  return useContext(NodesStatusContext)
}

export interface NodesStatusStoreValue {
  statusMap: NodeStatusMap
  remove(nodeId: ArticleKey): void
  set(nodeId: ArticleKey, status: NodeStatus): void
  toggle(nodeId: ArticleKey, status: NodeStatus): void
}

export type NodeStatusMap = Record<string, NodeStatus>

export type NodeStatus = 'done'
