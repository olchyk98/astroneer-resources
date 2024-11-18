import { fetchArticleWithRefs } from './src'
import { urlComposer } from './src/url-composer'

const articleURL = urlComposer('Small_Printer')

async function run () {
  console.log('Fetching')
  const article = await fetchArticleWithRefs(articleURL, { strategy: 'cache' })
  console.dir({ article }, { depth: Infinity })
}

run()
