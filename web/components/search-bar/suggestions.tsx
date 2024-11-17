import { Spinner, StackProps, VStack } from '@chakra-ui/react'
import { SuggestionItem } from './suggestion-item'
import { Article } from '../../../types'
import { memo } from 'react'

export const Suggestions = memo((props: SuggestionsProps) => {
  return (
    <VStack
      position="absolute"
      zIndex="4"
      maxH="sm"
      w="full"
      bg="rgba(0, 0, 0, 0.2)"
      overflow="auto"
      backdropFilter="blur(15px)"
      borderRadius="lg"
      border="1px solid"
      boxShadow="sm"
      borderColor="gray.800"
      divideY="1px"
      { ...props }
    >
      { props.isPending && <Spinner /> }
      {
        !props.isPending && props.items.map((article) => (
          <SuggestionItem key={ article.key } item={ article } />
        ))
      }
    </VStack>
  )
})

export interface SuggestionsProps extends StackProps {
  isPending: boolean
  items: Article[]
}
