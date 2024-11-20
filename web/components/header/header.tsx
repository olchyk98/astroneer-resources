import { HStack, Icon, Link, VStack } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { SearchBar } from '../search-bar'
import { ArticlesHistory } from '../articles-history'

export function Header () {
  return (
    <HStack w="full" p="4" alignItems="start" justifyContent="space-between">
      <HStack w="12" />
      <VStack gap="4">
        <SearchBar />
        <ArticlesHistory />
      </VStack>
      <Link
        cursor="alias"
        target="_blank"
        href="https://github.com/olchyk98/astroneer-resources?tab=readme-ov-file#about-the-project"
        fontSize="3xl"
        top="2"
        position="relative"
      >
        <Icon>
          <FaGithub />
        </Icon>
      </Link>
    </HStack>
  )
}
