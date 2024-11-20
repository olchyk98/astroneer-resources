import { fetchArticleWithRefs } from './src'
import { urlComposer } from './src/url-composer'

const articleURL = urlComposer('Wolframite')

// TODO: Refactor articleToGraphElements and write tests
// for bottom-to-top approach.
// TODO: Optimize getParentsForCachedArticle by separating
// cache: "articlesMap: {}" / childToParentsMap: {}"

async function run () {
  console.log('Fetching')
  const article = await fetchArticleWithRefs(articleURL, { strategy: 'cache' })
  console.dir({ article }, { depth: Infinity })
}

run()
