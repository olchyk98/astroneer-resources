export interface Article {
  key: ArticleKey
  name: ArticleName
  iconURL: string
  type: string
  imageURL: string
  planets?: string[] | boolean
  unlockCost?: number
  tier?: string
  recipe?: ArticleRecipe
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

export interface ArticleNode<T extends Pick<Article, 'key'> = Article> {
  article: T
  children?: ArticleNode<T>[]
}
