import { StackProps, Text, VStack } from '@chakra-ui/react'
import { Divider } from '../../divider'

export function ContentColumn (props: ContentColumnProps) {
  if (props.visible === false) return null
  return (
    <VStack gap="4" w="full" { ...props }>
      <Text fontWeight="bold" textWrap="nowrap">{ props.name }</Text>
      <Divider axis="x" />
      { props.children }
    </VStack>

  )
}

export interface ContentColumnProps extends StackProps {
  name: string
  visible?: boolean | true
  children: React.ReactNode
}
