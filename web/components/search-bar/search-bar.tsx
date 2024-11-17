import { Box, Spacer } from '@chakra-ui/react'
import { RawSearchInput } from './raw-search-input'
import { Suggestions } from './suggestions'
import { useSearch } from '../../hooks'
import { useEffect, useRef, useState } from 'react'
import { Article } from '../../../types'

export function SearchBar () {
  const { query, setQuery, isPending, hits } = useSearch()
  const [ isFocused, setIsFocused ] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const openArticle = (article: Pick<Article, 'name' | 'key'>) => {
    console.log('opened', article.key)
    setIsFocused(false)
    if (inputRef.current != null) {
      inputRef.current.value = article.name
    }
  }

  useEffect(() => {
    const h = () => setIsFocused(true)
    inputRef.current?.addEventListener('focus', h)
    return () => {
      inputRef.current?.removeEventListener('focus', h)
    }
  }, [])

  return (
    <>
      {
        isFocused &&
          <Box onClick={ () => setIsFocused(false) } top="0" left="0" w="full" h="full" position="fixed" zIndex="1" />
      }
      <Box position="relative" zIndex="2">
        <RawSearchInput
          onChange={ setQuery }
          ref={ inputRef }
          onKeyDown={ (e) => {
            if (e.key === 'Enter' && hits?.[0]?.key) {
              openArticle(hits?.[0])
            }
          } }
        />
        <Spacer py="2" />
        {
          isFocused &&
            <Suggestions
              items={ hits ?? [] }
              isPending={ isPending }
              onNavigate={ openArticle }
              isStale={ query.length <= 0 }
            />
        }
      </Box>
    </>
  )
}
