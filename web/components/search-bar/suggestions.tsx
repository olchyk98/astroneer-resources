import { Spinner, StackProps, Text, VStack } from '@chakra-ui/react'
import { SuggestionItem } from './suggestion-item'
import { Article } from '../../../types'
import { memo } from 'react'
import { Center } from '../center'

export const Suggestions = memo((props: SuggestionsProps) => {
  const { onNavigate, ...elementProps } = props

  return (
    <VStack
      position="absolute"
      zIndex="4"
      maxH="sm"
      minH="20"
      w="full"
      bg="rgba(0, 0, 0, 0.2)"
      overflow="auto"
      backdropFilter="blur(15px)"
      borderRadius="lg"
      border="1px solid"
      boxShadow="sm"
      borderColor="gray.800"
      divideY="1px"
      gap="0"
      { ...elementProps }
    >
      { props.isPending &&
          <Center position="absolute">
            <Spinner />
          </Center>
      }
      {
        !props.isPending && !props.items?.length && !props.isStale &&
          <Center position="absolute">
            <Text fontWeight="thin" color="gray.400">No matches found</Text>
          </Center>
      }
      {
        props.items.map((article) => (
          <SuggestionItem
            key={ article.key }
            item={ article }
            onClick={ () => onNavigate(article) }
          />
        ))
      }
    </VStack>
  )
})

export interface SuggestionsProps extends StackProps {
  isPending: boolean
  isStale: boolean
  items: Article[]
  onNavigate(article: Article): void
}
