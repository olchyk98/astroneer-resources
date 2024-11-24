import { Box, BoxProps } from '@chakra-ui/react'

export function Blinker (props: BlinkerProps) {
  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      borderRadius="full"
      h="6px"
      w="6px"
      transform="translate(50%, -50%)"
      bg="blue.400"
      { ...props }
    />
  )
}

export interface BlinkerProps extends BoxProps {}
