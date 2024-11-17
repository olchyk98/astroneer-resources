import { VStack } from '@chakra-ui/react'
import { ArticleGraph, SearchBar } from '../components'
import { useState } from 'react'
import { ArticleKey, ArticleNode } from '../../types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Home () {
  const [ articleKey, setArticleKey ] = useState<ArticleKey>('Shelter')
  const { data: articleNode, error, isPending } = useQuery<ArticleNode | null>({
    queryKey: [ 'articleNode', articleKey ],
    async queryFn () {
      if (!articleKey) return null
      const r = await axios.get<ArticleNode>(`/api/deep?key=${articleKey}`)
      return r.data
    },
  })

  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
      position="fixed"
      top="0"
      left="0"
      p="8"
      gap="4"
    >
      <SearchBar onClickArticle={ setArticleKey } />
      <ArticleGraph article={ articleNode ?? null } />
    </VStack>
  )
}
