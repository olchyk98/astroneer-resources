import { fetchArticle } from './fetch-article'
import { Article } from '@astroneer/types'

/**
 * This function will invoke fetchArticle
 * for the input URL and every single recipe
 * ingradient recursively. At the end
 * a tree will be returned containing detailed
 * information about each step of the production
 * process in form of Node structure.
 * */
export async function fetchArticleDeep (url: string): Promise<Node> {
  const article = await fetchArticle(url)
  const node: Node = { current: article }
  if (article.recipe != null) {
    const { ingredients } = article.recipe
    if (ingredients.length > 0) {
      node.children = []
    }
    for await (const i of ingredients) {
      const childNode = await fetchArticleDeep(`https://astroneer.fandom.com/wiki/${i.key}`)
      node.children!.push(childNode)
    }
  }
  return node
}

export interface Node {
  current: Article
  children?: Node[]
}
