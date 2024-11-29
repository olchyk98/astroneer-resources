import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import { useArticleStore, useArticlesHistoryStore } from '../../state'
import { NoOriginImage } from '../no-origin-image'
import { ArticleKey } from '@astroneer/types'

export function ArticlesHistory (props: ArticlesHistoryProps) {
  const articlesHistoryStore = useArticlesHistoryStore()
  const articlesStore = useArticleStore()

  return (
    <HStack
      justifyContent="center"
      gap="4"
      display="grid"
      sm={ { gridTemplateColumns: '1fr 1fr' } }
      gridTemplateColumns="1fr"
      h="full"
      overflow="auto"
      flexWrap="wrap"
    >
      {
        articlesHistoryStore.get().map((article) => (
          <Button
            height="auto"
            variant={ articlesStore.article?.article.key === article.key ? 'outline' : 'ghost' }
            borderRadius="lg"
            flexShrink="0"
            key={ article.key }
            onClick={
              () => {
                articlesStore.recipe(article.key)
                props.onSelect(article.key)
              }
            }
          >
            <VStack
              gap="4"
              p="4"
            >
              <NoOriginImage
                src={ article.imageURL }
                alt={ `Model image of ${article.name}` }
                h="12"
                flexShrink="0"
              />
              <Text>{ article.name }</Text>
            </VStack>
          </Button>
        ))
      }
    </HStack>
  )
}

export interface ArticlesHistoryProps {
  onSelect(key: ArticleKey): void
}
