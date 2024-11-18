import { fetchArticle } from './src'
import { urlComposer } from './src/url-composer'

const articleURL = urlComposer('Large_Rover')

async function run () {
  console.log('Fetching')
  const article = await fetchArticle(articleURL, { strategy: 'remote' })
  console.dir({ article }, { depth: Infinity })
}

run()
