import { Article, ArticlePlanetOfOrigin } from '@astroneer/types'

export function normalizePlanet (article: Exclude<Article['planets'], boolean | undefined>[number]): ArticlePlanetOfOrigin {
  const isRawName = typeof article === 'string'
  return {
    key: isRawName ? article : article.key,
    locations: isRawName ? true : article.locations,
  }
}
