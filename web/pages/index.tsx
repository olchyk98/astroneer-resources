import { VStack } from '@chakra-ui/react'
import { ArticleGraph, Header } from '../components'
import { ArticleStoreProvider, ArticlesHistoryStoreProvider, NodesStatusStoreProvider } from '../state'

export default function Home () {
  return (
    <ArticlesHistoryStoreProvider>
      <ArticleStoreProvider>
        <NodesStatusStoreProvider>
          <VStack
            alignItems="center"
            justifyContent="center"
            h="100vh"
            w="100vw"
            position="fixed"
            top="0"
            left="0"
            gap="0"
          >
            <Header />
            <ArticleGraph />
          </VStack>
        </NodesStatusStoreProvider>
      </ArticleStoreProvider>
    </ArticlesHistoryStoreProvider>
  )
}
