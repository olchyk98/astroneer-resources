import { HStack, Text } from '@chakra-ui/react'
import { NoOriginImage } from '../no-origin-image'
import { Article } from '@astroneer/types'
import { useArticleStore } from '../../state'
import { MotionButton, MotionHStack } from '../motion'
import { ComponentProps } from 'react'

export function PinnedArticle (props: PinnedArticleProps) {
  const articleStore = useArticleStore()
  const { article } = props

  const active = article.key === articleStore.article?.article.key

  return (
    <MotionHStack
      transition={ { bounce: 0 } }
      exit={ { opacity: 0, width: 0, scale: 0 } }
      animate={ { opacity: [ 0, 1 ], scale: [ 0.7, 1 ] } }
      flexShrink="0"
    >
      <MotionButton
        key={ article.key }
        py="2"
        px="4"
        variant={ active ? 'solid' : 'subtle' }
        layout={ true }
        borderRadius="xl"
        onClick={ () => articleStore.recipe(article.key) }
        position="relative"
        { ...props }
      >
        <HStack gap="2">
          <NoOriginImage
            w="4"
            src={ article.iconURL }
            alt={ `Icon of ${article.name}` }
          />
          <Text fontWeight="bold" fontSize="sm">
            { article.name }
          </Text>
        </HStack>
      </MotionButton>
    </MotionHStack>
  )
}

export interface PinnedArticleProps extends ComponentProps<typeof MotionButton> {
  article: Article
}
