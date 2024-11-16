import { reduce } from 'ramda'
import { Article } from '@astroneer/types'

export const predefinedArticles: Article[] = [
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/30/Icon_Ammonium.png/revision/latest/scale-to-width-down/30?cb=20190419174509',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/f/f5/Nugget_Ammonium.png/revision/latest/scale-to-width-down/250?cb=20191016232832',
    key: 'Ammonium',
    name: 'Ammonium',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/3c/Icon_Astronium.png/revision/latest/scale-to-width-down/30?cb=20191026233714',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/f/f0/Nugget_Astronium.png/revision/latest/scale-to-width-down/250?cb=20191016232834',
    key: 'Astronium',
    name: 'Astronium',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/4e/Icon_Clay.png/revision/latest/scale-to-width-down/30?cb=20190419174517',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/6/6e/Nugget_Clay.png/revision/latest/scale-to-width-down/250?cb=20191016232837',
    key: 'Clay',
    name: 'Clay',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/9a/Icon_Compound.png/revision/latest/scale-to-width-down/30?cb=20190419174519',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/0a/Nugget_Compound.png/revision/latest/scale-to-width-down/250?cb=20191016232839',
    key: 'Compound',
    name: 'Compound',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/c1/Icon_Graphite.png/revision/latest/scale-to-width-down/30?cb=20200113024957',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/cf/Nugget_Graphite.png/revision/latest/scale-to-width-down/250?cb=20191016232844',
    key: 'Graphite',
    name: 'Graphite',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/75/Icon_Hematite.png/revision/latest/scale-to-width-down/30?cb=20200113024944',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/39/Nugget_Hematite.png/revision/latest/scale-to-width-down/250?cb=20191016232847',
    key: 'Hematite',
    name: 'Hematite',
    planets: [
      'Novus',
      'Glacio',
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/05/Icon_Laterite.png/revision/latest/scale-to-width-down/30?cb=20200113024925',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/08/Nugget_Laterite.png/revision/latest/scale-to-width-down/250?cb=20191016232851',
    key: 'Laterite',
    name: 'Laterite',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/2/20/Icon_Lithium.png/revision/latest/scale-to-width-down/30?cb=20200113024918',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/ef/Nugget_Lithium.png/revision/latest/scale-to-width-down/250?cb=20191016232853',
    key: 'Lithium',
    name: 'Lithium',
    planets: [
      'Vesania',
      'Novus',
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/3b/Icon_Malachite.png/revision/latest/scale-to-width-down/30?cb=20200113024735',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/b/be/Nugget_Malachite.png/revision/latest/scale-to-width-down/250?cb=20191016232853',
    key: 'Malachite',
    name: 'Malachite',
    planets: [
      'Sylva',
      'Calidor',
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/90/Icon_Organic.png/revision/latest/scale-to-width-down/30?cb=20200113024647',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/ca/Nugget_Organic.png/revision/latest/scale-to-width-down/250?cb=20191016232856',
    key: 'Organic',
    name: 'Organic',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/f/fc/Icon_Quartz.png/revision/latest/scale-to-width-down/30?cb=20200113024637',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/40/Nugget_Quartz.png/revision/latest/scale-to-width-down/250?cb=20191016232858',
    key: 'Quartz',
    name: 'Quartz',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/e0/Icon_Resin.png/revision/latest/scale-to-width-down/30?cb=20200113024631',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/34/Nugget_Resin.png/revision/latest/scale-to-width-down/250?cb=20191016232859',
    key: 'Resin',
    name: 'Resin',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/5/57/Icon_Soil.png/revision/latest/scale-to-width-down/30?cb=20200630211805',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/5/57/Icon_Soil.png/revision/latest/scale-to-width-down/250?cb=20200630211805',
    key: 'Soil',
    name: 'Soil',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/5/5d/Icon_Sphalerite.png/revision/latest/scale-to-width-down/30?cb=20200113024608',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/cd/Nugget_Sphalerite.png/revision/latest/scale-to-width-down/250?cb=20191016232903',
    key: 'Sphalerite',
    name: 'Sphalerite',
    planets: [
      'Sylva',
      'Desolo',
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/d/d8/Icon_Titanite.png/revision/latest/scale-to-width-down/30?cb=20200113024536',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/e7/Nugget_Titanite.png/revision/latest/scale-to-width-down/250?cb=20191016232906',
    key: 'Titanite',
    name: 'Titanite',
    planets: [
      'Vesania',
      'Glacio',
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/ae/Icon_Wolframite.png/revision/latest/scale-to-width-down/30?cb=20200113024401',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/03/Nugget_Wolframite.png/revision/latest/scale-to-width-down/250?cb=20191016232913',
    key: 'Wolframite',
    name: 'Wolframite',
    planets: [
      'Desolo',
      'Calidor',
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/2/24/Icon_Argon.png/revision/latest/scale-to-width-down/30?cb=20190419174511',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/b/b7/Nugget_Argon.png/revision/latest/scale-to-width-down/250?cb=20191016232833',
    key: 'Argon',
    name: 'Argon',
    tier: 'Small',
    planets: [
      'Vesania',
      'Glacio',
    ],
    recipe: {
      craftedAt: 'Atmospheric_Condenser',
      ingredients: [],
    },
    type: 'Atmospheric',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/79/Icon_Helium.png/revision/latest/scale-to-width-down/30?cb=20200113024949',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/9a/Nugget_Helium.png/revision/latest/scale-to-width-down/250?cb=20191016232845',
    key: 'Helium',
    name: 'Helium',
    tier: 'Small',
    planets: [
      'Atrox',
    ],
    recipe: {
      craftedAt: 'Atmospheric_Condenser',
      ingredients: [],
    },
    type: 'Atmospheric',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/42/Icon_Hydrogen.png/revision/latest/scale-to-width-down/30?cb=20200113024935',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/40/Nugget_Hydrogen.png/revision/latest/scale-to-width-down/250?cb=20191016232849',
    key: 'Hydrogen',
    name: 'Hydrogen',
    tier: 'Small',
    planets: [
      'Sylva',
      'Calidor',
      'Vesania',
      'Novus',
    ],
    recipe: {
      craftedAt: 'Atmospheric_Condenser',
      ingredients: [],
    },
    type: 'Atmospheric',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/1/14/Icon_Methane.png/revision/latest/scale-to-width-down/30?cb=20200113024729',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/e6/Nugget_Methane.png/revision/latest/scale-to-width-down/250?cb=20191016232854',
    key: 'Methane',
    name: 'Methane',
    tier: 'Small',
    planets: [
      'Novus',
      'Atrox',
    ],
    recipe: {
      craftedAt: 'Atmospheric_Condenser',
      ingredients: [],
    },
    type: 'Atmospheric',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/e2/Icon_Nitrogen.png/revision/latest/scale-to-width-down/30?cb=20200113024724',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/d/d7/Nugget_Nitrogen.png/revision/latest/scale-to-width-down/250?cb=20191026210800',
    key: 'Nitrogen',
    name: 'Nitrogen',
    tier: 'Small',
    planets: [
      'Sylva',
      'Vesania',
      'Atrox',
    ],
    recipe: {
      craftedAt: 'Atmospheric_Condenser',
      ingredients: [],
    },
    type: 'Atmospheric',
  },
  {
    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/45/Icon_Sulfur.png/revision/latest/scale-to-width-down/30?cb=20200113024545',
    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/5/5d/Nugget_Sulfur.png/revision/latest/scale-to-width-down/250?cb=20191026210801',
    key: 'Sulfur',
    name: 'Sulfur',
    tier: 'Small',
    planets: [
      'Calidor',
      'Atrox',
    ],
    recipe: {
      craftedAt: 'Atmospheric_Condenser',
      ingredients: [],
    },
    type: 'Atmospheric',
  },
]

export const _predefinedArticlesMap = reduce<Article, Record<string, Article>>(
  (acc, article) => {
    acc[article.key] = article
    return acc
  },
  {},
  predefinedArticles,
)
