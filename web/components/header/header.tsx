import { HStack, Icon, Link, VStack } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { SearchBar } from '../search-bar'
import { ArticlePins } from '../article-pins'
import { Divider } from '../divider'

export function Header () {
  return (
    <HStack
      position="relative"
      w="full"
      p="4"
      alignItems="start"
      justifyContent="space-between"
    >
      <HStack w="12" />
      <VStack gap="4" w="full">
        <SearchBar />
        <ArticlePins />
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
      <Divider axis="x" position="absolute" bottom="0" left="0" width="100%" />
    </HStack>
  )
}
