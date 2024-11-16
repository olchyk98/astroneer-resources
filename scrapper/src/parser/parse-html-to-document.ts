import { JSDOM } from 'jsdom'

export function parseHTMLToDocument (html: string): Document {
  const jsdom = new JSDOM(html)
  const { document } = jsdom.window
  return document
}
