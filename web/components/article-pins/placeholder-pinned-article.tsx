import { Text } from '@chakra-ui/react'
import { MotionHStack } from '../motion'

export function PlaceholderPinnedArticle () {
  return (
    <MotionHStack
      transition={ { bounce: 0 } }
      exit={ { width: 0, opacity: 0 } }
      py="2"
      px="6"
      borderRadius="xl"
      border="1px dotted"
      borderColor="gray.800"
      flexShrink="0"
    >
      <Text color="gray.700" whiteSpace="nowrap">
        Pinned recipe
      </Text>
    </MotionHStack>
  )
}
