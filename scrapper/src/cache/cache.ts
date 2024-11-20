import cacheJson from './_cache.json'
import { CacheMap } from './types'

// XXX: cacheJson and CacheMap may become
// out-of-sync during development. Errors
// in here don't alert about aanythingnything.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const cache: CacheMap = cacheJson

export const getArticlesFromCache = (): CacheMap['articlesMap'] => cache.articlesMap
export const getParentsForArticlesFromCache = (): CacheMap['articleParentsMap'] => cache.articleParentsMap
