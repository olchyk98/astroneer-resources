export interface Article {
  key: ArticleKey
  name: ArticleName
  iconURL: string
  type: string
  imageURL: string
  planets?: ArticlePlanetOfOrigin[] | string[] | boolean
  unlockCost?: number
  tier?: string
  recipe?: ArticleRecipe
}

export interface ArticlePlanetOfOrigin {
  name: string
  locations: string[] | boolean
}

export type ArticleKey = string
export type ArticleName = string

export interface ArticleRecipe {
  craftedAt: ArticleKey
  ingredients: ArticleRecipeIngradient[]
}

export interface ArticleRecipeIngradient {
  key: ArticleKey
  amount: number
}

export interface DenormalizedArticleRecipeIngradient extends Omit<ArticleRecipeIngradient, 'key'> {
  key: Article
}

export interface DenormalizedArticleRecipe extends Omit<ArticleRecipe, 'craftedAt' | 'ingredients'> {
  craftedAt: Article
  ingredients: DenormalizedArticleRecipeIngradient[]
}

/**
 * Extends "Article" interface, but has denormalzied
 * key references - article resolved properties
 * like "recipe.craftedAt" and "recipe.ingradient.key"
 * */
export interface DenormalizedArticle extends Omit<Article, 'recipe'> {
  recipe?: DenormalizedArticleRecipe
}

export interface ArticleNode<T extends Pick<DenormalizedArticle, 'key'> = DenormalizedArticle> {
  article: T
  children?: ArticleNode<T>[]
}
