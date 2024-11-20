import { HStack, Input, InputProps } from '@chakra-ui/react'
import { RefObject, forwardRef, useImperativeHandle, useRef } from 'react'
import { ViewStrategy } from '../../state'
import { isViewStrategy } from '../../helpers'
import { MotionHStack } from '../motion'

export const SearchInput = forwardRef<SearchInputRef, SearchInputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

  useImperativeHandle(
    ref,
    () => ({ inputRef, selectRef }),
    [ inputRef, selectRef ],
  )

  return (
    <MotionHStack
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.900"
      w="xl"
      layout={ true }
      maxW="full"
    >
      <Input
        w="full"
        pl="4"
        border="0"
        flexShrink="1"
        size="lg"
        placeholder={ 'Search for "RTG"' }
        ref={ inputRef }
        { ...props }
        onChange={ (e) => props.onValueChange?.(e.target.value) }
      />
      <HStack flexShrink="0" pr="4">
        <select
          style={ { display: 'flex', flexShrink: 0, background: 'transparent' } }
          value={ props.strategy }
          ref={ selectRef }
          onChange={ (e) => {
            const { value } = e.target
            if (isViewStrategy(value)) {
              props.onStrategyChange?.(value)
            }
          } }
        >
          <option value="recipe">Recipe</option>
          <option value="usages">Usages</option>
        </select>
      </HStack>
    </MotionHStack>
  )
})

export interface SearchInputProps extends InputProps {
  onValueChange?: (query: string) => void
  onStrategyChange?: (strategy: ViewStrategy) => void
  strategy: ViewStrategy
}

export interface SearchInputRef {
  inputRef: RefObject<HTMLInputElement | null>
  selectRef: RefObject<HTMLSelectElement | null>
}
