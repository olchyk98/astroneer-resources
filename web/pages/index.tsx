import { HStack, Icon, Link, VStack } from '@chakra-ui/react'
import { ArticleGraph, SearchBar } from '../components'
import { FaGithub } from 'react-icons/fa'
import { ArticleStoreProvider } from '../state'

export default function Home () {
  return (
    <ArticleStoreProvider>
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
        <HStack w="full" justifyContent="space-between" alignItems="center" p="4">
          <HStack w="12" />
          <SearchBar />
          <HStack w="12">
            <Link cursor="alias" target="_blank" href="https://github.com/olchyk98/astroneer-resources?tab=readme-ov-file#about-the-project" fontSize="3xl">
              <Icon>
                <FaGithub />
              </Icon>
            </Link>
          </HStack>
        </HStack>
        <ArticleGraph />
      </VStack>
    </ArticleStoreProvider>
  )
}
