export interface Article {
  key: ArticleKey
  name: string
  iconURL: string
  imageURL: string
  tier?: string
  unlockCost?: number
  recipe?: ArticleRecipe
}

export type ArticleKey = string

export interface ArticleRecipe {
  craftedAt: ArticleKey
  ingradients: ArticleRecipeIngradient[]
}

export interface ArticleRecipeIngradient {
  key: ArticleKey
  amount: number
}
