import { HStack, StackProps } from '@chakra-ui/react'

export function Center (props: CenterProps) {
  return (
    <HStack w="full" h="full" alignItems="center" justifyContent="center" { ...props }>
      { props.children }
    </HStack>
  )
}

export interface CenterProps extends StackProps {}
