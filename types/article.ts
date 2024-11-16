export interface Article {
  key: ArticleKey
  name: string
  iconURL: string
  type: string
  imageURL: string
  planets?: string[] | true
  unlockCost?: number
  tier?: string
  recipe?: ArticleRecipe
}

export type ArticleKey = string

export interface ArticleRecipe {
  craftedAt: ArticleKey
  ingredients: ArticleRecipeIngradient[]
}

export interface ArticleRecipeIngradient {
  key: ArticleKey
  amount: number
}

export interface ArticleNode {
  article: Article
  children?: ArticleNode[]
}
