import { PinnedArticle } from './pinned-article'
import { MotionHStack } from '../motion'
import { useArticlePinsStore } from '../../state'
import { AnimatePresence } from 'framer-motion'
import { PlaceholderPinnedArticle } from './placeholder-pinned-article'
import { useIsSmallDevice } from '../../hooks'

export function ArticlePins () {
  const pinsStore = useArticlePinsStore()
  const isSmallDevice = useIsSmallDevice()

  return (
    <MotionHStack w="full" overflowX="auto" overflowY="hidden" layout={ true }>
      <AnimatePresence>
        {
          pinsStore.get().map((article) => (
            <PinnedArticle
              key={ article.key }
              article={ article }
            />
          ))
        }
        {
          pinsStore.get().length <= 0 && (
            <>
              <PlaceholderPinnedArticle />
              {
                !isSmallDevice && (
                  <>
                    <PlaceholderPinnedArticle />
                    <PlaceholderPinnedArticle />
                  </>
                )
              }
            </>
          )
        }
      </AnimatePresence>
    </MotionHStack>
  )
}
