import { fetchArticle } from './src'

//const articleURL = 'https://astroneer.fandom.com/wiki/RTG' // Done
const articleURL = 'https://astroneer.fandom.com/wiki/Nanocarbon_Alloy' // Done

async function run () {
  console.log('Fetching')
  const article = await fetchArticle(articleURL)
  console.dir({ article }, { depth: Infinity })
}

run()
