import { Article, DenormalizedArticle } from '@astroneer/types'
import { clone } from 'ramda'
import { GenericFetchOpts } from './types'
import { fetchArticleByKey } from './fetch-article-by-key'

export async function denormalizeArticle (article: Article, opts?: GenericFetchOpts): Promise<DenormalizedArticle> {
  if (article.recipe == null) {
    return article as DenormalizedArticle
  }
  // WARNING: __UNSAFE. This block of code is not type-safe. Be very careful.
  const articleMut = clone(article) as DenormalizedArticle
  articleMut.recipe!.craftedAt = await fetchArticleByKey(article.recipe.craftedAt, opts)
  articleMut.recipe!.ingredients = await Promise.all(
    article.recipe.ingredients
      .map(async (i) => ({ ...i, key: await fetchArticleByKey(i.key, opts) })),
  )
  return articleMut
}
