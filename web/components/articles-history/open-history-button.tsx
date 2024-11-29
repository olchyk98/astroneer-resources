import { HStack, Icon, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { MdHistory } from 'react-icons/md'
import { Sidebar } from '../sidebar'
import { ArticlesHistory } from './articles-history'

export function OpenHistoryButton () {
  const { onClose, open, onOpen } = useDisclosure({ defaultOpen: false })

  return (
    <>
      <IconButton variant="ghost" onClick={ onOpen } flexShrink="0">
        <MdHistory />
      </IconButton>
      <Sidebar
        title={
          <HStack gap="4" alignItems="center">
            <Icon size="lg">
              <MdHistory />
            </Icon>
            <Text fontSize="lg" fontWeight="semibold">
              Recently opened recipes
            </Text>
          </HStack>
        }
        onClose={ onClose }
        isOpen={ open }
      >
        <ArticlesHistory onSelect={ onClose } />
      </Sidebar>
    </>
  )
}
