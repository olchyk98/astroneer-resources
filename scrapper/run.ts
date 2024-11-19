import { fetchParentsForArticle } from './src'
import { cacheArticles } from './src/cache'
import { urlComposer } from './src/url-composer'

const articleURL = urlComposer('Wolframite')

// TODO: Implement reverse button (arrow down) next
// to ingredients, craftedAt and next to the original
// arrow up. This would show regular recipe mode
//
// TODO: Aftewards implement previous links, which
// would be saved with "mode" in local storage.
// And display them under search bar.
//
// TODO: Also add persistent state from localstorage
// refreshing the page opens the same article.
// Call the concept - session.

// TODO: Refactor articleToGraphElements and write tests
// for bottom-to-top approach.
// TODO: Optimize getParentsForCachedArticle by separating
// cache: "articlesMap: {}" / childToParentsMap: {}"

//async function run () {
//console.log('Fetching')
//const article = await fetchArticleWithRefs(articleURL, { strategy: 'cache' })
//console.dir({ article }, { depth: Infinity })
//}

// TODO: Refactor articleToGraphElements and write tests
// for bottom-to-top approach.
// TODO: Optimize getParentsForCachedArticle by separating
// cache: "articlesMap: {}" / childToParentsMap: {}"

async function run () {
  console.log('Fetching')
  const article = await fetchParentsForArticle(articleURL)
  console.dir({ article }, { depth: Infinity })
}

cacheArticles()
