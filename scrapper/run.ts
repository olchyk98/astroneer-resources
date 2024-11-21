import { fetchArticle } from './src'
import { urlComposer } from './src/url-composer'

const articleURL = urlComposer('Compound')

async function run () {
  const article = await fetchArticle(articleURL, { strategy: 'remote' })
  console.dir({ article }, { depth: Infinity })
}

run()
