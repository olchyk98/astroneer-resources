import { ComponentProps } from 'react'
import { Image } from '@chakra-ui/react'

export function NoOriginImage (props: NoOriginImageProps) {
  return (
    <Image
      { ...props }
      src={ `/api/image?url=${encodeURIComponent(props.src ?? '')}` }
    />
  )
}

export interface NoOriginImageProps extends ComponentProps<typeof Image> {}
