import { HStack } from '@chakra-ui/react'
import { HistoryItem } from './history-item'
import { useArticlesHistoryStore } from '../../state'

export function ArticlesHistory () {
  const historyStore = useArticlesHistoryStore()

  return (
    <HStack w="xl" maxW="full" overflow="auto">
      {
        historyStore.get().map((article) => (
          <HistoryItem
            key={ article.key }
            article={ article }
          />
        ))
      }
    </HStack>
  )
}
