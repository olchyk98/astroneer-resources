import { StackProps, VStack } from '@chakra-ui/react'
import { SuggestionItem } from './suggestion-item'

export function Suggestions (props: SuggestionsProps) {
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
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
    </VStack>
  )
}

export interface SuggestionsProps extends StackProps {}
