import type { AppProps } from 'next/app'
import { Outfit } from 'next/font/google'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const outfit = Outfit({
  subsets: [ 'latin' ],
  weight: [ '300', '400', '600', '700' ],
})

const queryClient = new QueryClient()

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={ queryClient }>
      <ChakraProvider value={ defaultSystem }>
        <ThemeProvider attribute="class" disableTransitionOnChange forcedTheme="dark">
          <div className={ outfit.className }>
            <Component { ...pageProps } />
          </div>
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
