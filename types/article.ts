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

export interface ArticleWithRefs<T extends Pick<Article, 'key' | 'recipe'> = Article> {
  article: T
  _referencesMap: ReferencesMap<T>
}

export type ReferencesMap<T extends Pick<Article, 'key' | 'recipe'> = Article> = (
  Record<ArticleKey, T>
)
