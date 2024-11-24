export interface Article {
  key: ArticleKey
  name: ArticleName
  iconURL: string
  type?: string
  imageURL: string
  planets?: ArticlePlanetOfOrigin[] | ArticleKey[] | boolean
  unlockCost?: number
  tier?: string
  recipe?: ArticleRecipe
  // NOTE: "ChildArticle" struct variation.
  // Indicates which articles reference current article.
  // This value is not "deep" - therefore only
  // the nearest parent keys must be projected here.
  _parentKeys?: string[]
}

export interface ArticlePlanetOfOrigin {
  key: string
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

export interface ArticleWithRefs<T extends Pick<Article, 'key' | 'recipe' | 'planets' | '_parentKeys'> = Article> {
  article: T
  _referencesMap: ReferencesMap<T>
}

export type ReferencesMap<T extends Pick<Article, 'key' | 'recipe' | 'planets' | '_parentKeys'> = Article> = (
  Record<ArticleKey, T>
)
