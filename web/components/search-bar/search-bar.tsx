import { Box, Spacer } from '@chakra-ui/react'
import { RawSearchInput } from './raw-search-input'
import { Suggestions } from './suggestions'
import { useSearch } from '../../hooks'

export function SearchBar () {
  const { setQuery, isPending, hits } = useSearch()

  return (
    <Box position="relative">
      <RawSearchInput onChange={ setQuery } />
      <Spacer py="2" />
      <Suggestions items={ hits ?? [] } isPending={ isPending } />
    </Box>
  )
}
