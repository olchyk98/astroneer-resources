export interface Article {
  key: ArticleKey
  name: string
  iconURL: string
  type: string
  imageURL: string
  unlockCost?: number
  tier?: string
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
