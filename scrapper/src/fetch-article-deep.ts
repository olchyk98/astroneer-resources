import { fetchArticle } from './fetch-article'
import { ArticleNode } from '@astroneer/types'
import { urlComposer } from './url-composer'

/**
 * This function will invoke fetchArticle
 * for the input URL and every single recipe
 * ingradient recursively. At the end
 * a tree will be returned containing detailed
 * information about each step of the production
 * process in form of ArticleNode structure.
 * */
export async function fetchArticleDeep (url: string): Promise<ArticleNode> {
  const article = await fetchArticle(url)
  const node: ArticleNode = { article }
  if (article.recipe != null) {
    const { ingredients } = article.recipe
    if (ingredients.length > 0) {
      node.children = []
    }
    for await (const i of ingredients) {
      const childNode = await fetchArticleDeep(urlComposer(i.key))
      node.children!.push(childNode)
    }
  }
  return node
}
