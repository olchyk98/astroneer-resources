import { fetchArticle } from './src'
import { cacheArticles } from './src/cache'
import { urlComposer } from './src/url-composer'

const articleURL = urlComposer('Backpack')

async function run () {
  console.log('Fetching')
  const article = await fetchArticle(articleURL, { strategy: 'remote' })
  console.dir({ article }, { depth: Infinity })
}

//run()

cacheArticles()
