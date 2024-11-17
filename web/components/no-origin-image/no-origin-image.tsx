import { ComponentProps } from 'react'
import { Image } from '@chakra-ui/react'

export function NoOriginImage (props: NoOriginImageProps) {
  return (
    <Image
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      { ...props }
    />
  )
}

export interface NoOriginImageProps extends ComponentProps<typeof Image> {}
