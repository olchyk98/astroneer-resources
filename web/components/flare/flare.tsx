import { Box, BoxProps } from '@chakra-ui/react'

export function Flare (props: FlareProps) {
  return (
    <Box
      position="absolute"
      top={ props.bottom != null ? 'inherit' : '0' }
      left={ props.right != null ? 'inherit' : '0' }
      boxShadow={ `0px 0px 100px 30px ${props.color ?? 'aqua'}` }
      h="0"
      w="0"
      transition="200ms"
      { ...props }
    />
  )
}

export interface FlareProps extends BoxProps {
  color?: string
}
