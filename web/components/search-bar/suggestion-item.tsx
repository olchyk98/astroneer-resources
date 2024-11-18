import { HStack, StackProps, Text } from '@chakra-ui/react'
import { Article } from '@astroneer/types'
import { NoOriginImage } from '../no-origin-image'

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
      { ...props }
    >
      <NoOriginImage
        src={ props.item.imageURL }
        transition="150ms"
        alt={ props.item.name }
        h="full"
      />
      <Text fontSize="lg" fontWeight="bold">{ props.item.name }</Text>
    </HStack>
  )
}

export interface SuggestionItemProps extends StackProps {
  item: Article
}
