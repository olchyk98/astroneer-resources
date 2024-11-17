import { Badge, Box, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from '@xyflow/react'
import { ArticleGraphNodeData, formatNumber, getWikiURL } from '../../../helpers'
import { Divider } from '../../divider'
import { RandomFlare } from '../../flare'
import { ArticleKey } from '../../../../types'
import { NoOriginImage } from '../../no-origin-image'
import { ContentColumn } from './content-column'

export function NodeRenderer (props: NodeRendererProps) {
  const api = useReactFlow()
  const { article, isRoot } = props.data

  function expandChildNode (key: ArticleKey) {
    const childId = `${props.id}-${key}`
    const childNode = api.getNode(childId)
    if (childNode == null || !childNode.hidden) return
    api.updateNode(childId, { hidden: false })
  }

  // XXX: Some articles don't have any content (like QT-RTG),
  // because they are obtained through planet exploring.
  // For those cases we'll just show their image, icon and name.
  const hasNoContent = article.recipe == null && article.planets == null

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
        <HStack alignItems="center" justifyContent="space-between" w="full" gap="8">
          <HStack gap="4" alignItems="center">
            <NoOriginImage src={ article.iconURL } alt={ article.name } w="8" />
            <Link fontWeight="bold" fontSize="xl" cursor="alias" href={ getWikiURL(article.key) } target="_blank">
              { article.name }
            </Link>
          </HStack>
          {
            (article.unlockCost != null || article.tier != null) && (
              <HStack gap="2">
                {
                  article.unlockCost != null &&
                    <Badge colorPalette="purple" variant="surface">{ formatNumber(article.unlockCost) } bytes</Badge>
                }
                {
                  article.tier != null &&
                    <Badge colorPalette="green" variant="surface">{ article.tier }</Badge>
                }
              </HStack>
            )
          }
        </HStack>
        {
          !hasNoContent && (
            <>
              <Divider axis="x" my="4" />
              <HStack
                px="8"
                w="full"
                justifyContent="space-around"
                alignItems="start"
                gap="10"
              >
                <ContentColumn name="Planets" visible={ article.planets != null }>
                  { article.planets === true && <Text fontWeight="normal">ALL</Text> }
                  {
                    Array.isArray(article.planets) &&
                      article.planets.map((key) => (
                        <Link
                          variant="underline"
                          fontWeight="normal"
                          key={ key }
                          cursor="alias"
                          href={ getWikiURL(key) }
                          target="_blank"
                        >
                          { key }
                        </Link>
                      ))
                  }
                </ContentColumn>
                <ContentColumn name="Crafted At" visible={ article.recipe?.craftedAt != null }>
                  <HStack gap="2">
                    <NoOriginImage alt={ article.recipe?.craftedAt.name } src={ article.recipe?.craftedAt.iconURL } w="6" />
                    <Link
                      fontWeight="normal"
                      variant="underline"
                      textWrap="nowrap"
                      onClick={ () => expandChildNode(article.recipe!.craftedAt.key) }
                    >
                      { article.recipe?.craftedAt.name }
                    </Link>
                  </HStack>
                </ContentColumn>
                <ContentColumn name="Input" visible={ !!article.recipe?.ingredients?.length }>
                  {
                    (article.recipe?.ingredients ?? []).map((ingredient) => (
                      <HStack gap="2" key={ ingredient.key.key }>
                        <NoOriginImage alt={ ingredient.key.name } src={ ingredient.key.iconURL } w="6" />
                        <Link
                          variant="underline"
                          fontWeight="normal"
                          textWrap="nowrap"
                          onClick={ () => expandChildNode(ingredient.key.key) }
                        >
                          { ingredient.key.name }{ ingredient.amount > 1 ? ` (${ingredient.amount}x)` : '' }
                        </Link>
                      </HStack>
                    ))
                  }
                </ContentColumn>
              </HStack>
            </>
          )
        }
        <Divider axis="x" my="4" />
        <NoOriginImage
          src={ article.imageURL }
          alt={ `Model image of ${article.name}` }
          h="24"
        />
      </VStack>
      <Handle type="source" position={ Position.Bottom } />
    </Box>
  )
}

export type NodeRendererProps = NodeProps & {
  data: ArticleGraphNodeData
  [key: string]: unknown
}
