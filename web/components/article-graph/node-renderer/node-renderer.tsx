import { Box, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from '@xyflow/react'
import { ArticleGraphNodeData } from '../../../helpers'
import { Divider } from '../../divider'
import { RandomFlare } from '../../flare'
import { ArticleKey } from '../../../../types'

export function NodeRenderer (props: NodeRendererProps) {
  const api = useReactFlow()
  const { article, isRoot } = props.data

  function expandChildNode (key: ArticleKey) {
    const childId = `${props.id}-${key}`
    const childNode = api.getNode(childId)
    if (childNode == null) return
    api.updateNode(childId, { hidden: !childNode.hidden })
  }

  return (
    <Box>
      { !isRoot && <Handle draggable={ false } type="target" position={ Position.Top } /> }
      <VStack
        background="rgba(0, 0, 0, .2)"
        className="nodrag"
        cursor="default"
        backdropFilter="blur(2px)"
        border="1px solid"
        borderColor="gray.900"
        boxShadow="md"
        borderRadius="xl"
        alignItems="center"
        py="6"
        px="8"
        justifyContent="start"
        gap="0"
        overflow="hidden"
      >
        <RandomFlare maxX={ 60 } maxY={ 60 } />
        <RandomFlare maxX={ 60 } maxY={ 60 } />
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
          {
            article.planets != null && (
              <VStack gap="4" w="full">
                <Text fontWeight="bold" textWrap="nowrap">Planets</Text>
                <Divider axis="x" />
                {
                  article.planets === true && (
                    <Text fontWeight="normal">ALL</Text>
                  )
                }
                {
                  Array.isArray(article.planets) && (
                    article.planets.map((name) => (
                      <Text fontWeight="normal" key={ name }>{ name }</Text>
                    ))
                  )
                }
              </VStack>
            )
          }
          {
            article.recipe?.craftedAt != null && (
              <VStack gap="4" w="full">
                <Text fontWeight="bold" textWrap="nowrap">Crafted At</Text>
                <Divider axis="x" />
                <Link fontWeight="normal" variant="underline" onClick={ () => expandChildNode(article.recipe!.craftedAt) }>
                  { article.recipe.craftedAt }
                </Link>
              </VStack>
            )
          }
          {
            !!article.recipe?.ingredients?.length && (
              <VStack gap="4" w="full">
                <Text fontWeight="bold">Input</Text>
                <Divider axis="x" />
                {
                  article.recipe?.ingredients.map((ingredient) => (
                    <Link variant="underline" fontWeight="normal" textWrap="nowrap" key={ ingredient.key } onClick={ () => expandChildNode(ingredient.key) }>
                      { ingredient.key } ({ingredient.amount}x)
                    </Link>
                  ))
                }
              </VStack>
            )
          }
        </HStack>
      </VStack>
      <Handle type="source" position={ Position.Bottom } />
    </Box>
  )
}

export type NodeRendererProps = NodeProps & {
  data: ArticleGraphNodeData
  [key: string]: unknown
}
