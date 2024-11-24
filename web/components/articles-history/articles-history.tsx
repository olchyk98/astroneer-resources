import { HistoryItem } from './history-item'
import { useArticlesHistoryStore } from '../../state'
import { MotionHStack } from '../motion'
import { reverse } from 'ramda'

export function ArticlesHistory () {
  const historyStore = useArticlesHistoryStore()

  return (
    <MotionHStack w="xl" maxW="full" overflow="auto">
      {
        reverse(historyStore.get()).map((article) => (
          <HistoryItem
            key={ article.key }
            article={ article }
          />
        ))
      }
    </MotionHStack>
  )
}
