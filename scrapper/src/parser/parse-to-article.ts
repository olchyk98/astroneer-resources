import { JSDOM } from 'jsdom'
import { Article } from '@astroneer/types'
import { mapObjIndexed } from 'ramda'
import { parsers } from './parsers'
import { parseSourceTable } from './utils'

export function parseToArticle (html: string, source_url: string): Article {
  const jsdom = new JSDOM(html)
  const { document } = jsdom.window
  // XXX: This constructs an top level info table about the article,
  // including information like recipe, name, imageURL, etc.
  // This can be re-used in parsers, or parsers may use their
  // own way to fetch this information if needed.
  const table = parseSourceTable(document)
  return mapObjIndexed(
    (parse) => parse(document, source_url, table) ?? undefined,
    parsers,
  ) as Article
}
