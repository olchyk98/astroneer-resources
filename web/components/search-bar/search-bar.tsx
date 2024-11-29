import { Box, HStack, VStack } from '@chakra-ui/react'
import { MdRefresh } from 'react-icons/md'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { SearchInput, SearchInputRef } from './search-input'
import { Suggestions } from './suggestions'
import { useSearch } from '../../hooks'
import { useEffect, useRef, useState } from 'react'
import { Article } from '../../../types'
import { useArticleStore } from '../../state'
import { MotionHStack, MotionIconButton } from '../motion'

export function SearchBar (_props: SearchBarProps) {
  const { query, setQuery, viewStrategy, setViewStrategy, isPending, hits } = useSearch()
  const [ isFocused, setIsFocused ] = useState(false)
  const articleStore = useArticleStore()
  const searchInputRef = useRef<SearchInputRef>(null)

  const handleArticleClick = (article: Pick<Article, 'name' | 'key'>) => {
    articleStore.set(article.key, viewStrategy)
    setIsFocused(false)
    if (searchInputRef.current != null) {
      const inputRef = searchInputRef.current.inputRef?.current
      if (inputRef != null) {
        inputRef.value = article.name
      }
    }
  }

  useEffect(() => {
    const h = () => setIsFocused(true)
    const searchInput = searchInputRef.current?.inputRef.current
    if (searchInput != null) {
      searchInput.addEventListener('focus', h)
    }
    return () => {
      if (searchInput != null) {
        searchInput.removeEventListener('focus', h)
      }
    }
  }, [])

  return (
    <>
      {
        isFocused &&
          <Box
            onMouseDown={ () => setIsFocused(false) }
            onClick={ () => setIsFocused(false) }
            top="0"
            left="0"
            w="full"
            h="full"
            position="fixed"
            zIndex="1"
          />
      }
      <HStack position="relative" zIndex="2" maxW="full">
        <VStack gap="0" w="full" position="relative">
          <LayoutGroup>
            <MotionHStack gap="2" w="full">
              <AnimatePresence>
                <SearchInput
                  key="search-input"
                  onValueChange={ setQuery }
                  onStrategyChange={ setViewStrategy }
                  strategy={ viewStrategy }
                  ref={ searchInputRef }
                  onKeyDown={ (e) => {
                    if (e.key === 'Enter' && hits?.[0]?.key) {
                      handleArticleClick(hits?.[0])
                    }
                  } }
                />
                {
                  articleStore.viewStrategy !== viewStrategy && articleStore.article != null && (
                    <MotionIconButton
                      key="refresh-search"
                      variant="ghost"
                      exit={ { scaleX: 0, x: 20, opacity: 0, transition: { duration: 0.2 } } }
                      animate={ { x: [ 20, 0 ], opacity: [ 0, 1 ], transition: { duration: 0.2 } } }
                      transition={ { ease: 'linear', bounce: 0 } }
                      onClick={ () => articleStore.set(undefined, viewStrategy) }
                    >
                      <MdRefresh />
                    </MotionIconButton>
                  )
                }
              </AnimatePresence>
            </MotionHStack>
          </LayoutGroup>
          {
            isFocused &&
              <Suggestions
                items={ hits ?? [] }
                isPending={ isPending }
                onNavigate={ handleArticleClick }
                isStale={ query.length <= 0 }
              />
          }
        </VStack>
      </HStack>
    </>
  )
}

export interface SearchBarProps {}
