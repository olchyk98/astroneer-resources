import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

export function Link (props: LinkProps) {
  const { isDisabled } = props
  return (
    <ChakraLink
      { ...props }
      variant={ isDisabled ? 'plain' : (props.variant || 'underline') }
      cursor={ isDisabled ? 'default' : (props.cursor || 'pointer') }
      _hover={ isDisabled ? { textDecoration: 'none' } : (props._hover || undefined) }
    />
  )
}

export interface LinkProps extends ChakraLinkProps {
  isDisabled?: boolean
}
