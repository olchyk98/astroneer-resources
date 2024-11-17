import { ReactFlowProvider } from '@xyflow/react'
import { ArticleGraph, ArticleGraphProps } from './article-graph'

export function ArticleGraphWrapper (props: ArticleGraphWrapperProps) {
  return (
    <ReactFlowProvider>
      <ArticleGraph { ...props } />
    </ReactFlowProvider>
  )
}

export interface ArticleGraphWrapperProps extends ArticleGraphProps {}
