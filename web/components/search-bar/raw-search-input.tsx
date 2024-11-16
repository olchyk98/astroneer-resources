import { Input, InputProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const RawSearchInput = forwardRef<HTMLInputElement, RawSearchInputProps>((props, ref) => {
  return (
    <Input
      w="xl"
      flexShrink="0"
      size="lg"
      maxW="full"
      placeholder={ 'Search for "Compound"' }
      ref={ ref }
      { ...props }
    />
  )
})

export interface RawSearchInputProps extends InputProps {}
