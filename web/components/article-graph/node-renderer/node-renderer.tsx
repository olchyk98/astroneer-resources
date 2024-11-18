import { Badge, Box, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from '@xyflow/react'
import { ArticleGraphNodeData, formatNumber, getWikiURL, normalizePlanet } from '../../../helpers'
import { Divider } from '../../divider'
import { RandomFlare } from '../../flare'
import { Article, ArticleKey, ReferencesMap } from '@astroneer/types'
import { NoOriginImage } from '../../no-origin-image'
import { ContentColumn } from './content-column'
import { filter, forEach, pluck, startsWith } from 'ramda'

const getRef_ = <T extends Pick<Article, 'key' | 'recipe'> = Article>(
  key: ArticleKey | null | undefined,
  _referencesMap: ReferencesMap<T>,
): T | null => (
  key == null ? null : _referencesMap[key]
)

export function NodeRenderer (props: NodeRendererProps) {
  const api = useReactFlow()
  const { article, isRoot, _referencesMap } = props.data

  function expandChildNode (key: ArticleKey) {
    const childId = `${props.id}-${key}`
    const childNode = api.getNode(childId)
    if (childNode == null) return
    if (childNode.hidden) {
      api.updateNode(childId, { hidden: false })
    } else {
      // XXX: Find and hide all the children nodes
      const allNodeIds = pluck('id', api.getNodes())
      const childIds = filter(startsWith(childId), allNodeIds)
      forEach((childId) => {
        api.updateNode(childId, { hidden: true })
      }, childIds)
    }
  }

  const getRef = (key: ArticleKey | null | undefined) => getRef_(key, _referencesMap)

  // XXX: Some articles don't have any content (like QT-RTG),
  // because they are obtained through planet exploring.
  // For those cases we'll just show their image, icon and name.
  const hasNoBody = article.recipe == null && article.planets == null

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
          !hasNoBody && (
            <>
              <Divider axis="x" my="4" />
              <HStack
                px="8"
                w="full"
                justifyContent="space-around"
                alignItems="start"
                gap="10"
              >
                <ContentColumn name="Crafted At" visible={ article.recipe?.craftedAt != null }>
                  <HStack gap="2">
                    <NoOriginImage
                      alt={ getRef(article.recipe?.craftedAt)?.name }
                      src={ getRef(article.recipe?.craftedAt)?.iconURL }
                      w="6"
                    />
                    <Link
                      fontWeight="normal"
                      variant="underline"
                      className="nopan"
                      textWrap="nowrap"
                      onClick={ () => expandChildNode(getRef(article.recipe!.craftedAt)?.key ?? '') }
                    >
                      { getRef(article.recipe?.craftedAt)?.name ?? 'Unknown' }
                    </Link>
                  </HStack>
                </ContentColumn>
                <ContentColumn name="Input" visible={ !!article.recipe?.ingredients?.length }>
                  {
                    (article.recipe?.ingredients ?? []).map((ingredient) => (
                      <HStack gap="2" key={ getRef(ingredient.key)?.key }>
                        <NoOriginImage alt={ getRef(ingredient.key)?.name } src={ getRef(ingredient.key)?.iconURL } w="6" />
                        <Link
                          variant="underline"
                          className="nopan"
                          fontWeight="normal"
                          textWrap="nowrap"
                          onClick={ () => expandChildNode(getRef(ingredient.key)?.key ?? '') }
                        >
                          { getRef(ingredient.key)?.name ?? 'Unknown' }{ ingredient.amount > 1 ? ` (${ingredient.amount}x)` : '' }
                        </Link>
                      </HStack>
                    ))
                  }
                </ContentColumn>
                <ContentColumn name="Planets" visible={ article.planets != null }>
                  { article.planets === true && <Text fontWeight="normal">All / Everywhere</Text> }
                  {
                    Array.isArray(article.planets) &&
                      <VStack position="relative">
                        {
                          article.planets.map((planet_) => {
                            const planet = normalizePlanet(planet_)
                            return (
                              <HStack gap="6" key={ planet.name } w="full" justifyContent="space-between">
                                <Link
                                  variant="underline"
                                  fontWeight="normal"
                                  key={ planet.name }
                                  cursor="alias"
                                  href={ getWikiURL(planet.name) }
                                  target="_blank"
                                >
                                  { planet.name }
                                </Link>
                                {
                                  Array.isArray(planet.locations) &&
                                    <HStack gap="2">
                                      {
                                        planet.locations.map((location) => (
                                          <Badge key={ location } colorPalette="yellow">{ location }</Badge>
                                        ))
                                      }
                                    </HStack>
                                }
                              </HStack>
                            )
                          })
                        }
                      </VStack>
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
