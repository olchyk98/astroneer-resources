import { fetchArticle } from './src'

const articleURL = 'https://astroneer.fandom.com/wiki/RTG'

async function run () {
  console.log('Fetching')
  const article = await fetchArticle(articleURL)
  console.dir({ article }, { depth: Infinity })
}

run()
