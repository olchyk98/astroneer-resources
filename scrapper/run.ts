import { fetchArticle } from './src'

// TODO: Add natural resources + planets for them and atmospheric manually

//const articleURL = 'https://astroneer.fandom.com/wiki/RTG' // Done
//const articleURL = 'https://astroneer.fandom.com/wiki/Nanocarbon_Alloy' // Done
//const articleURL = 'https://astroneer.fandom.com/wiki/Helium' // Done
const articleURL = 'https://astroneer.fandom.com/wiki/Atmospheric_Condenser'

async function run () {
  console.log('Fetching')
  const article = await fetchArticle(articleURL)
  console.dir({ article }, { depth: Infinity })
}

run()
