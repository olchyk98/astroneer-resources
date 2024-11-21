import { Article } from '@astroneer/types'
import { mapObjIndexed } from 'ramda'
import { parsers } from './parsers'
import { parseSourceTable } from './utils'
import { parseHTMLToDocument } from './parse-html-to-document'

export function parseToArticle (html: string, source_url: string): Article {
  const document = parseHTMLToDocument(html)
  // XXX: This constructs an top level info table about the article,
  // including information like recipe, name, imageURL, etc.
  // This can be re-used in parsers, or parsers may use their
  // own way to fetch this information if needed.
  const table = parseSourceTable(document)
  console.group('Parsing')
  const article = mapObjIndexed(
    (parse, key) => {
      console.log(`> ${key}`)
      return parse(document, source_url, table) ?? undefined
    },
    parsers,
  ) as Article
  console.groupEnd()
  return article
}
