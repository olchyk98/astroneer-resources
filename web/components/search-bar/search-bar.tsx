import { Box, Spacer } from '@chakra-ui/react'
import { RawSearchInput } from './raw-search-input'
import { Suggestions } from './suggestions'

export function SearchBar () {
  return (
    <Box position="relative">
      <RawSearchInput />
      <Spacer py="2" />
      <Suggestions />
    </Box>
  )
}
