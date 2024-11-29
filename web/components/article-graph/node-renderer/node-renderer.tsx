import { Badge, Box, HStack, IconButton, Spinner, Text, VStack } from '@chakra-ui/react'
import { MdCheck, MdClose, MdOutlineCallMade, MdOutlineCallReceived } from 'react-icons/md'
import { TiPin, TiPinOutline } from 'react-icons/ti'
import { Handle, NodeProps, Position } from '@xyflow/react'
import { ArticleGraphNodeData, formatNumber, getWikiURL, normalizePlanet } from '../../../helpers'
import { Divider } from '../../divider'
import { RandomFlare } from '../../flare'
import { Article, ArticleKey, ReferencesMap } from '@astroneer/types'
import { NoOriginImage } from '../../no-origin-image'
import { Link } from '../../link'
import { ContentColumn } from './content-column'
import { useArticleRecipes, useArticleUsages } from '../../../hooks'
import { useArticlePinsStore, useArticleStore, useNodesStatusStore } from '../../../state'
import { Blinker } from '../../blinker'
import { getChildRefKeysForArticle } from '@astroneer/utils'
import { MotionHStack } from '../../motion'

const getRef_ = <T extends Pick<Article, 'key' | 'recipe'> = Article>(
  key: ArticleKey | null | undefined,
  _referencesMap: ReferencesMap<T>,
): T | null => (
  key == null ? null : _referencesMap[key]
)

export function NodeRenderer (props: NodeRendererProps) {
  const { article, isRoot, _referencesMap } = props.data
  const { hasUsages, toggleUsages, isSearchingUsages } = useArticleUsages(props)
  const { hasRecipes, toggleRecipes, expandRecipe } = useArticleRecipes(props)
  const articlePinsStore = useArticlePinsStore()
  const articleStore = useArticleStore()
  const nodesStatusStore = useNodesStatusStore()

  const getRef = (key: ArticleKey | null | undefined) => getRef_(key, _referencesMap)

  // XXX: Some articles don't have any content (like QT-RTG),
  // because they are obtained through planet exploring.
  // For those cases we'll just show their image, icon and name.
  const hasNoBody = article.recipe == null && article.planets == null

  const isDone = nodesStatusStore.statusMap[props.id] === 'done'

  return (
    <Box position="relative">
      {
        !isRoot && (
          <Handle
            draggable={ false }
            type="target"
            position={ articleStore.viewStrategy === 'recipe' ? Position.Top : Position.Bottom }
          />
        )
      }
      <VStack
        background="rgba(0, 0, 0, .2)"
        className="nodrag"
        cursor="default"
        backdropFilter="blur(2px)"
        border="1px solid"
        borderColor={ isDone ? 'green.400' : 'gray.900' }
        transition="200ms"
        transitionDelay={ isDone ? '300ms' : '0ms' }
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
        <HStack alignItems="center" justifyContent="space-between" minW="max-content" w="full" gap="8">
          <HStack gap="4" flexShrink="0">
            <HStack gap="4" alignItems="center" flexShrink="0">
              <NoOriginImage src={ article.iconURL } alt={ article.name } w="8" />
              <Link fontWeight="bold" fontSize="xl" cursor="alias" href={ getWikiURL(article.key) } target="_blank" whiteSpace="nowrap">
                { article.name }
              </Link>
            </HStack>
            {
              (article.unlockCost != null || article.tier != null) && (
                <HStack gap="2" flexShrink="0">
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
          <HStack flexShrink="0">
            {
              hasRecipes &&
                <IconButton
                  size="xs"
                  variant="ghost"
                  aria-label="See recipe"
                  onClick={ toggleRecipes }
                  className="nopan nodrag"
                >
                  { articleStore.viewStrategy !== 'recipe' && <Blinker /> }
                  { articleStore.viewStrategy === 'recipe' && (
                    <Blinker w="auto" h="auto" bg="transparent">
                      <Badge size="xs">{ getChildRefKeysForArticle(article).length ?? 0 }</Badge>
                    </Blinker>
                  ) }
                  <MdOutlineCallReceived />
                </IconButton>
            }
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="See usages"
              onClick={ toggleUsages }
              disabled={ !hasUsages }
              className="nopan nodrag"
            >
              { articleStore.viewStrategy !== 'usages' && <Blinker /> }
              { (articleStore.viewStrategy === 'usages' || !hasUsages) && (
                <Blinker w="auto" h="auto" bg="transparent">
                  <Badge size="xs">{ hasUsages ? (article._parentKeys?.length ?? 0) : 0 }</Badge>
                </Blinker>
              ) }
              { isSearchingUsages && <Spinner size="xs" /> }
              { !isSearchingUsages && <MdOutlineCallMade /> }
            </IconButton>
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="Pin article"
              className="nopan nodrag"
              onClick={ () => articlePinsStore.togglePin(article) }
            >
              { articlePinsStore.pinned(article.key) && <TiPin /> }
              { !articlePinsStore.pinned(article.key) && <TiPinOutline /> }
            </IconButton>
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="Mark as done"
              className="nopan nodrag"
              onClick={ () => nodesStatusStore.toggle(props.id, 'done') }
            >
              { !isDone && <MdCheck /> }
              { isDone && <MdClose /> }
            </IconButton>
          </HStack>
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
                      isDisabled={ articleStore.viewStrategy !== 'recipe' }
                      onClick={ () => expandRecipe(getRef(article.recipe!.craftedAt)?.key ?? '') }
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
                          className="nopan"
                          fontWeight="normal"
                          textWrap="nowrap"
                          isDisabled={ articleStore.viewStrategy !== 'recipe' }
                          onClick={ () => expandRecipe(getRef(ingredient.key)?.key ?? '') }
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
                              <HStack gap="6" key={ planet.key } w="full" justifyContent="space-between">
                                <HStack gap="2" key={ planet.key }>
                                  <NoOriginImage alt={ getRef(planet.key)?.name } src={ getRef(planet.key)?.iconURL } w="6" />
                                  <Link
                                    fontWeight="normal"
                                    variant="underline"
                                    className="nopan"
                                    textWrap="nowrap"
                                    isDisabled={ articleStore.viewStrategy !== 'recipe' }
                                    onClick={ () => expandRecipe(planet.key ?? '') }
                                  >
                                    { getRef(planet.key)?.key ?? 'Unknown' }
                                  </Link>
                                </HStack>
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
      {
        isDone && (
          <MotionHStack
            w="full"
            h="full"
            borderRadius="xl"
            overflow="hidden"
            position="absolute"
            bottom="0"
            right="0"
            bg="transparent"
            animate={ { display: [ 'flex', 'flex', 'none' ] } }
          >
            <MotionHStack
              bg="green.300"
              h="full"
              w="full"
              zIndex="2"
              top="0"
              right="0"
              position="absolute"
              animate={ {
                height: [ 0, '100%' ],
                width: [ 0, '100%' ],
                opacity: [ 0, 0.3, 0 ],
                borderBottomLeftRadius: [ '1000px', '12px' ],
              } }
            />
          </MotionHStack>
        )
      }
      <Handle
        type="source"
        position={ articleStore.viewStrategy === 'recipe' ? Position.Bottom : Position.Top }
      />
    </Box>
  )
}

export type NodeRendererProps = NodeProps & {
  data: ArticleGraphNodeData
  [key: string]: unknown
}
