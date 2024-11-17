import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import { NodeProps } from '@xyflow/react'
import { ArticleGraphNodeData } from '../../../helpers'
import { Divider } from '../../divider'
import { Flare } from '../../flare/flare'

export function NodeRenderer (props: NodeRendererProps) {
  const { article } = props.data

  return (
    <VStack
      background="rgba(0, 0, 0, .2)"
      backdropFilter="blur(2px)"
      border="1px solid"
      borderColor="gray.900"
      boxShadow="md"
      borderRadius="xl"
      alignItems="center"
      py="6"
      justifyContent="start"
      gap="0"
      overflow="hidden"
    >
      <Flare color="blue" opacity={ 0.6 } left="20" />
      <Flare color="aqua" bottom="16" right="0" opacity={ 0.4 } />
      <HStack alignItems="center" pb="6" gap="4">
        <Image
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          src={ props.data.article.iconURL }
          w="8"
        />
        <Text fontWeight="bold" fontSize="xl">
          { props.data.article.name }
        </Text>
      </HStack>
      <Divider axis="x" />
      <HStack
        px="8"
        py="4"
        w="full"
        justifyContent="space-around"
        alignItems="start"
        gap="8"
      >
        <VStack gap="4" w="full">
          <Text fontWeight="bold">Crafted At</Text>
          <Divider axis="x" />
          <Text fontWeight="normal">{ article.recipe?.craftedAt }</Text>
        </VStack>
        <VStack gap="4" w="full">
          <Text fontWeight="bold">Input</Text>
          <Divider axis="x" />
          {
            article.recipe?.ingredients.map((ingredient) => (
              <Text fontWeight="normal" textWrap="nowrap">
                { ingredient.key } ({ingredient.amount}x)
              </Text>
            ))
          }
        </VStack>
      </HStack>
    </VStack>
  )
}

export type NodeRendererProps = NodeProps & {
  data: ArticleGraphNodeData
  [key: string]: unknown
}
