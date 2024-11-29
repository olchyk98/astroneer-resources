import { PinnedArticle } from './pinned-article'
import { MotionHStack } from '../motion'
import { useArticlePinsStore } from '../../state'
import { AnimatePresence } from 'framer-motion'

export function ArticlePins () {
  const pinsStore = useArticlePinsStore()

  if (pinsStore.get().length === 0) return null

  return (
    <MotionHStack w="xl" maxW="full" overflow="auto" layout={ true }>
      <AnimatePresence>
        {
          pinsStore.get().map((article) => (
            <PinnedArticle
              key={ article.key }
              article={ article }
            />
          ))
        }
      </AnimatePresence>
    </MotionHStack>
  )
}
