import { Button, Code, Input, Kbd, Link, VStack } from '@chakra-ui/react'

export default function Home () {
  return (
    <VStack alignItems="center" justifyContent="center" h="100vh" w="full">
      <Button variant="outline">Hello, World!</Button>
      <Input placeholder="Hold my milk" />
      <Code>console.log('Hello, World')</Code>
      <Kbd>Enter</Kbd>
      <Link>Hello</Link>
    </VStack>
  )
}
