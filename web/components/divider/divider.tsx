import { HStack, StackProps } from '@chakra-ui/react'

export function Divider (props: DividerProps) {
  return <HStack
    bg="gray.800"
    w={ props.axis === 'x' ? 'full' : '1px' }
    h={ props.axis === 'y' ? 'full' : '1px' }
    { ...props }
  />
}

export interface DividerProps extends StackProps {
  axis: 'x' | 'y'
}
