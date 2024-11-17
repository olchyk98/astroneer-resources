import { VStack } from '@chakra-ui/react'
import { ArticleGraph, SearchBar } from '../components'

const exampleArticle = {
  key: 'RTG',
  type: 'Power Generation',
  name: 'RTG',
  iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/a7/Icon_Generator.png/revision/latest/scale-to-width-down/30?cb=20191116124832',
  imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/8/87/RTG.png/revision/latest/scale-to-width-down/250?cb=20200618202206',
  tier: 'Medium',
  unlockCost: 12500,
  recipe: {
    craftedAt: 'Small_Printer',
    ingredients: [
      { amount: 1, key: 'Nanocarbon_Alloy' },
      { amount: 1, key: 'Lithium' },
    ],
  },
}

export default function Home () {
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
      position="fixed"
      top="0"
      left="0"
      p="8"
      gap="4"
    >
      <SearchBar />
      <ArticleGraph article={ exampleArticle } />
    </VStack>
  )
}
