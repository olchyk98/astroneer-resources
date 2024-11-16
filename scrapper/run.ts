import { fetchArticle } from './src'
import { urlComposer } from './src/url-composer'

const articleURL = urlComposer('Compound')

async function run () {
  console.log('Fetching')
  const article = await fetchArticle(articleURL)
  console.dir({ article }, { depth: Infinity })
}

run()
