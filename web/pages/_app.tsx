import type { AppProps } from 'next/app'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={ queryClient }>
      <ChakraProvider value={ defaultSystem }>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Component { ...pageProps } />
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
