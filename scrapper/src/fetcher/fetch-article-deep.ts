import { fetchArticle } from './fetch-article'
import { ArticleNode } from '@astroneer/types'
import { urlComposer } from '../url-composer'
import { GenericFetchOpts } from './types'

/**
 * This function will invoke fetchArticle
 * for the input URL and every single recipe
 * ingradient recursively. At the end
 * a tree will be returned containing detailed
 * information about each step of the production
 * process in form of ArticleNode structure.
 * */
export async function fetchArticleDeep (url: string, opts?: GenericFetchOpts): Promise<ArticleNode> {
  const article = await fetchArticle(url, opts)
  const node: ArticleNode = { article }
  if (article.recipe != null) {
    const { ingredients } = article.recipe
    if (ingredients.length > 0) {
      node.children = []
    }
    for await (const i of ingredients) {
      const childNode = await fetchArticleDeep(urlComposer(i.key), opts)
      node.children!.push(childNode)
    }
  }
  return node
}
