import { Input, InputProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const RawSearchInput = forwardRef<HTMLInputElement, RawSearchInputProps>((props, ref) => {
  return (
    <Input
      w="xl"
      flexShrink="0"
      size="lg"
      maxW="full"
      placeholder={ 'Search for "RTG"' }
      ref={ ref }
      { ...props }
      onChange={ (e) => props.onChange?.(e.target.value) }
    />
  )
})

export interface RawSearchInputProps extends Omit<InputProps, 'onChange'> {
  onChange?: (query: string) => void
}
