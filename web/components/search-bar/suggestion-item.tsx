import { HStack, Image, StackProps, Text } from '@chakra-ui/react'
import { Article } from '../../../types'

export function SuggestionItem (props: SuggestionItemProps) {
  return (
    <HStack
      w="full"
      gap="6"
      p="4"
      transition="150ms"
      h="20"
      cursor="pointer"
      userSelect="none"
      _hover={ {
        background: 'rgba(0, 0, 0, 0.3)',
        h: '24',
        transition: '200ms',
      } }
    >
      <Image
        src={ props.item.imageURL }
        transition="150ms"
        alt="Shelter"
        h="full"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
      />
      <Text fontSize="lg" fontWeight="bold">{ props.item.name }</Text>
    </HStack>
  )
}

export interface SuggestionItemProps extends StackProps {
  item: Article
}
