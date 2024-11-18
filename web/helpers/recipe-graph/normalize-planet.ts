import { Article, ArticlePlanetOfOrigin } from '../../../types'

export function normalizePlanet (article: Exclude<Article['planets'], boolean | undefined>[number]): ArticlePlanetOfOrigin {
  const isRawName = typeof article === 'string'
  return {
    name: isRawName ? article : article.name,
    locations: isRawName ? true : article.locations,
  }
}
