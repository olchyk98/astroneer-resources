import { HStack, Image, Text } from '@chakra-ui/react'

export function SuggestionItem () {
  return (
    <HStack
      w="full"
      gap="6"
      p="4"
      transition="150ms"
      h="20"
      cursor="pointer"
      userSelect="none"
      _hover={ {
        background: 'rgba(0, 0, 0, 0.3)',
        h: '24',
        transition: '200ms',
      } }
    >
      <Image
        src="https://static.wikia.nocookie.net/astroneer_gamepedia/images/f/f6/Field_Shelter.png/revision/latest/scale-to-width-down/250?cb=20200618205627"
        transition="150ms"
        alt="Shelter"
        h="full"
        referrerPolicy="no-referrer"
      />
      <Text fontSize="lg" fontWeight="bold">Field Shelter</Text>
    </HStack>
  )
}
