import path from 'path'
import fs from 'fs'
import { articlesToCache } from './articles-to-cache'
import { CacheMap } from './types'
import { fetchArticleByKey } from '../fetcher'

const outPath = path.resolve(__dirname, './_cache.json')

export async function cacheArticles (): Promise<void> {
  console.log(`Caching ${articlesToCache.length} articles`)
  const failed: string[] = []
  let cached = 0
  const newCache: CacheMap = {}
  for await (const key of articlesToCache) {
    console.log(`Caching "${key}" (${cached + 1}/${(articlesToCache.length - failed.length)})`)
    try {
      const article = await fetchArticleByKey(key, { strategy: 'remote' })
      newCache[key] = article
      console.log(`OK: "${key}"`)
      cached += 1
    } catch {
      failed.push(key)
      console.log(`Failed: ${key}`)
    }
  }
  fs.writeFileSync(outPath, JSON.stringify(newCache))
  console.dir({ failed }, { depth: Infinity })
  console.log(`Saved ${Object.keys(newCache).length} articles to cache!`)
}
