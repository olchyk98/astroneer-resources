import { fetchArticleWithRefs } from './src'
import { cacheArticles } from './src/cache'
import { urlComposer } from './src/url-composer'

const articleURL = urlComposer('Wolframite')

async function run () {
  console.log('Fetching')
  const article = await fetchArticleWithRefs(articleURL, { strategy: 'cache' })
  console.dir({ article }, { depth: Infinity })
}

//run()

cacheArticles()
