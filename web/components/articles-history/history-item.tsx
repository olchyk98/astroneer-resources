import { Button, ButtonProps, HStack, Text } from '@chakra-ui/react'
import { NoOriginImage } from '../no-origin-image'
import { Article } from '@astroneer/types'
import { useArticleStore } from '../../state'

export function HistoryItem (props: HistoryItemProps) {
  const articleStore = useArticleStore()
  const { article } = props

  return (
    <Button
      py="2"
      px="4"
      variant={ article.key === articleStore.article?.article.key ? 'solid' : 'subtle' }
      size="xs"
      borderRadius="full"
      onClick={ () => articleStore.recipe(article.key) }
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
    </Button>
  )
}

export interface HistoryItemProps extends ButtonProps {
  article: Article
}
