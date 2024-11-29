import { HStack, IconButton, Portal, Text, VStack } from '@chakra-ui/react'
import { Divider } from '../divider'
import { PropsWithChildren } from 'react'
import { MdClose } from 'react-icons/md'
import { MotionHStack, MotionVStack } from '../motion'

export function Sidebar (props: SidebarProps) {
  if (!props.isOpen) return null

  return (
    <Portal>
      <HStack
        position="fixed"
        h="full"
        w="full"
      >
        <MotionHStack
          h="full"
          w="full"
          bg="rgba(0, 0, 0, 0.1)"
          animate={ { opacity: [ 0, 1 ] } }
          backdropFilter="blur(20px)"
          onClick={ props.onClose }
        />
        <MotionVStack
          borderLeft="1px solid"
          borderColor="gray.800"
          maxW="sm"
          flexShrink="0"
          animate={ { x: [ '100%', 0 ] } }
          transition={ { bounce: 0, ease: 'easeInOut' } }
          bg="black"
          position="absolute"
          top="0"
          right="0"
          h="full"
          w="full"
          zIndex={ 1000 }
        >
          <HStack
            p="6"
            justifyContent="space-between"
            w="full"
            overflow="auto"
            alignItems="center"
            flexShrink="0"
            position="relative"
          >
            {
              typeof props.title === 'string' && (
                <Text fontWeight="bold">{ props.title }</Text>
              )
            }
            { typeof props.title === 'object' && props.title }
            <IconButton variant="ghost" flexShrink="0" onClick={ props.onClose }>
              <MdClose />
            </IconButton>
            <Divider axis="x" position="absolute" left="0" bottom="0" w="full" id="a" />
          </HStack>
          <VStack px="6" py="2" overflowY="auto" overflowX="hidden" flexShrink="1">
            { props.children }
          </VStack>
        </MotionVStack>
      </HStack>
    </Portal>
  )
}

export interface SidebarProps extends PropsWithChildren {
  title: string | React.ReactNode
  onClose(): void
  isOpen: boolean
}
