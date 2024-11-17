import { HStack, Icon, Link, VStack } from '@chakra-ui/react'
import { ArticleGraph, SearchBar } from '../components'
import { FaGithub } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { ArticleKey, ArticleNode } from '../../types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Home () {
  const [ articleKey, setArticleKey ] = useState<ArticleKey>('Small_Printer')
  const { data: articleNode, error, isPending } = useQuery<ArticleNode | null>({
    queryKey: [ 'articleNode', articleKey ],
    async queryFn () {
      if (!articleKey) return null
      const r = await axios.get<ArticleNode>(`/api/deep?key=${articleKey}`)
      return r.data
    },
  })

  useEffect(() => {
    if (error != null) {
      alert(`Failed to fetch the resource: ${error}`)
    }
  }, [ error ])

  return (
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
        <SearchBar onClickArticle={ setArticleKey } />
        <HStack w="12">
          <Link cursor="alias" target="_blank" href="https://github.com/olchyk98/astroneer-resources?tab=readme-ov-file#about-the-project" fontSize="3xl">
            <Icon>
              <FaGithub />
            </Icon>
          </Link>
        </HStack>
      </HStack>
      <ArticleGraph article={ articleNode ?? null } isLoading={ isPending } />
    </VStack>
  )
}
