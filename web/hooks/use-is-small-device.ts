import { useMediaQuery } from '@chakra-ui/react'

export function useIsSmallDevice () {
  const [ isSmallDevice ] = useMediaQuery(
    [ '(max-width: 800px)' ],
    { ssr: true, fallback: [ true ] },
  )
  return isSmallDevice
}
