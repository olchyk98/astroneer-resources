import { has } from 'ramda'
import { _predefinedArticlesMap } from './predefined-articles'
import { getKeyFromURL } from '../parser/utils'

export const isPreDefinedArticle = (url: string) => (
  has(getKeyFromURL(url), _predefinedArticlesMap)
)

export const getPreDefinedArticle = (url: string) => (
  _predefinedArticlesMap[getKeyFromURL(url)]
)
