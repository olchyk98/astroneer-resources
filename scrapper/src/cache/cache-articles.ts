import path from 'path'
import fs from 'fs'
import { articlesToCache } from './articles-to-cache'
import { CacheMap } from './types'
import { fetchArticleByKey } from '../fetcher'
import { filter, mergeRight } from 'ramda'
import { _predefinedArticlesMap } from '../predefined'
import { getChildRefKeysForArticle } from '@astroneer/utils'

const outPath = path.resolve(__dirname, './_cache.json')

async function _cacheArticles (newCache: CacheMap) {
  console.group(`Caching ${articlesToCache.length} articles`)
  const failed: string[] = []
  let cached = 0
  for await (const key of articlesToCache) {
    console.log(`(${cached + 1}/${(articlesToCache.length - failed.length)}) Caching "${key}"`)
    try {
      const article = await fetchArticleByKey(key, { strategy: 'remote' })
      newCache.articlesMap[key] = article
      console.log(`OK: "${key}"`)
      cached += 1
    } catch {
      failed.push(key)
      console.log(`Failed: ${key}`)
    }
  }
  console.dir({ failed }, { depth: Infinity })
  if (failed.length > 0) {
    throw new Error('Woops. Could not cache all the articles.')
  }
  console.log(`Done. Resolved ${Object.keys(newCache.articlesMap).length} articles to cache!`)
  console.groupEnd()
}

async function _cacheArticleParentLinks (newCache: CacheMap) {
  const withPredefined = mergeRight(newCache.articlesMap, _predefinedArticlesMap)
  console.group('Caching parents...')
  for await (const key of articlesToCache) {
    const parentArticles = filter((article) => {
      const childKeys = getChildRefKeysForArticle(article)
      return childKeys.includes(key)
    }, Object.values(withPredefined))
    newCache.articleParentsMap[key] = parentArticles
  }
  fs.writeFileSync(outPath, JSON.stringify(newCache))
  console.log(`Done (len=${Object.values(newCache.articleParentsMap).length})`)
  console.groupEnd()
}

export async function cacheArticles (): Promise<void> {
  const newCache: CacheMap = { articlesMap: {}, articleParentsMap: {} }
  await _cacheArticles(newCache)
  await _cacheArticleParentLinks(newCache)
  console.log(`Saved ${Object.keys(newCache.articlesMap).length} articles to cache!`)
}
