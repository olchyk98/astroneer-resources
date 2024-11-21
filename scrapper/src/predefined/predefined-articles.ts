import { reduce } from 'ramda'
import { Article, ArticleKey } from '@astroneer/types'

export const predefinedArticles: Article[] = [
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/3/30/Icon_Ammonium.png/30px-Icon_Ammonium.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/f/f5/Nugget_Ammonium.png/270px-Nugget_Ammonium.png',
    key: 'Ammonium',
    name: 'Ammonium',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/3/3c/Icon_Astronium.png/30px-Icon_Astronium.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/f/f0/Nugget_Astronium.png/270px-Nugget_Astronium.png',
    key: 'Astronium',
    name: 'Astronium',
    planets: [
      {
        name: 'Sylva',
        locations: [
          'Core',
        ],
      },
      {
        name: 'Desolo',
        locations: [
          'Core',
        ],
      },
      {
        name: 'Calidor',
        locations: [
          'Core',
        ],
      },
      {
        name: 'Vesania',
        locations: [
          'Core',
        ],
      },
      {
        name: 'Novus',
        locations: [
          'Core',
        ],
      },
      {
        name: 'Glacio',
        locations: [
          'Core',
        ],
      },
      {
        name: 'Atrox',
        locations: [
          'Core',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/4/4e/Icon_Clay.png/30px-Icon_Clay.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/6/6e/Nugget_Clay.png/270px-Nugget_Clay.png',
    key: 'Clay',
    name: 'Clay',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/9/9a/Icon_Compound.png/30px-Icon_Compound.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/0/0a/Nugget_Compound.png/270px-Nugget_Compound.png',
    key: 'Compound',
    name: 'Compound',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/c/c1/Icon_Graphite.png/30px-Icon_Graphite.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/c/cf/Nugget_Graphite.png/270px-Nugget_Graphite.png',
    key: 'Graphite',
    name: 'Graphite',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/7/75/Icon_Hematite.png/30px-Icon_Hematite.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/3/39/Nugget_Hematite.png/270px-Nugget_Hematite.png',
    key: 'Hematite',
    name: 'Hematite',
    planets: [
      {
        name: 'Novus',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Glacio',
        locations: [
          'Ice Dunes',
          'Caves',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/0/05/Icon_Laterite.png/30px-Icon_Laterite.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/0/08/Nugget_Laterite.png/270px-Nugget_Laterite.png',
    key: 'Laterite',
    name: 'Laterite',
    planets: [
      {
        name: 'Sylva',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Desolo',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Calidor',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Vesania',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Novus',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Glacio',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Atrox',
        locations: [
          'Caves',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/2/20/Icon_Lithium.png/30px-Icon_Lithium.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/e/ef/Nugget_Lithium.png/270px-Nugget_Lithium.png',
    key: 'Lithium',
    name: 'Lithium',
    planets: [
      {
        name: 'Vesania',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Novus',
        locations: [
          'Mountainous Biomes',
          'Caves',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/3/3b/Icon_Malachite.png/30px-Icon_Malachite.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/b/be/Nugget_Malachite.png/270px-Nugget_Malachite.png',
    key: 'Malachite',
    name: 'Malachite',
    planets: [
      {
        name: 'Sylva',
        locations: [
          'Gray Mountains',
          'Caves',
        ],
      },
      {
        name: 'Calidor',
        locations: [
          'Caves',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/9/90/Icon_Organic.png/30px-Icon_Organic.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/c/ca/Nugget_Organic.png/270px-Nugget_Organic.png',
    key: 'Organic',
    name: 'Organic',
    planets: [
      {
        name: 'Sylva',
        locations: [
          'Surface',
        ],
      },
      {
        name: 'Desolo',
        locations: [
          'Surface',
        ],
      },
      {
        name: 'Calidor',
        locations: [
          'Surface',
        ],
      },
      {
        name: 'Vesania',
        locations: [
          'Surface',
        ],
      },
      {
        name: 'Novus',
        locations: [
          'Surface',
        ],
      },
      {
        name: 'Glacio',
        locations: [
          'Surface',
        ],
      },
      {
        name: 'Atrox',
        locations: [
          'Surface',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/f/fc/Icon_Quartz.png/30px-Icon_Quartz.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/4/40/Nugget_Quartz.png/270px-Nugget_Quartz.png',
    key: 'Quartz',
    name: 'Quartz',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/e/e0/Icon_Resin.png/30px-Icon_Resin.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/3/34/Nugget_Resin.png/270px-Nugget_Resin.png',
    key: 'Resin',
    name: 'Resin',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/5/57/Icon_Soil.png/30px-Icon_Soil.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/9/90/Small_Canister_Full.png/270px-Small_Canister_Full.png',
    key: 'Soil',
    name: 'Soil',
    planets: true,
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/5/5d/Icon_Sphalerite.png/30px-Icon_Sphalerite.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/c/cd/Nugget_Sphalerite.png/270px-Nugget_Sphalerite.png',
    key: 'Sphalerite',
    name: 'Sphalerite',
    planets: [
      {
        name: 'Sylva',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Desolo',
        locations: [
          'Orange Capped Mountains',
          'Mantle Layers',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/d/d8/Icon_Titanite.png/30px-Icon_Titanite.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/e/e7/Nugget_Titanite.png/270px-Nugget_Titanite.png',
    key: 'Titanite',
    name: 'Titanite',
    planets: [
      {
        name: 'Vesania',
        locations: [
          'Mountain Peaks',
          'Caves',
        ],
      },
      {
        name: 'Glacio',
        locations: [
          'Caves',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/a/ae/Icon_Wolframite.png/30px-Icon_Wolframite.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/0/03/Nugget_Wolframite.png/270px-Nugget_Wolframite.png',
    key: 'Wolframite',
    name: 'Wolframite',
    planets: [
      {
        name: 'Desolo',
        locations: [
          'Caves',
        ],
      },
      {
        name: 'Calidor',
        locations: [
          'Mountainous Biome',
          'Caves',
        ],
      },
    ],
    tier: 'Small',
    type: 'Natural',
  },
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/2/24/Icon_Argon.png/30px-Icon_Argon.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/b/b7/Nugget_Argon.png/270px-Nugget_Argon.png',
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
    iconURL: 'https://astroneer.wiki.gg/images/thumb/7/79/Icon_Helium.png/30px-Icon_Helium.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/9/9a/Nugget_Helium.png/270px-Nugget_Helium.png',
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
    iconURL: 'https://astroneer.wiki.gg/images/thumb/4/42/Icon_Hydrogen.png/30px-Icon_Hydrogen.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/4/40/Nugget_Hydrogen.png/270px-Nugget_Hydrogen.png',
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
    iconURL: 'https://astroneer.wiki.gg/images/thumb/1/14/Icon_Methane.png/30px-Icon_Methane.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/e/e6/Nugget_Methane.png/270px-Nugget_Methane.png',
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
    iconURL: 'https://astroneer.wiki.gg/images/thumb/e/e2/Icon_Nitrogen.png/30px-Icon_Nitrogen.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/d/d7/Nugget_Nitrogen.png/270px-Nugget_Nitrogen.png',
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
    iconURL: 'https://astroneer.wiki.gg/images/thumb/4/45/Icon_Sulfur.png/30px-Icon_Sulfur.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/5/5d/Nugget_Sulfur.png/270px-Nugget_Sulfur.png',
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
  {
    iconURL: 'https://astroneer.wiki.gg/images/thumb/a/a7/Icon_Generator.png/30px-Icon_Generator.png',
    imageURL: 'https://astroneer.wiki.gg/images/thumb/8/87/RTG.png/270px-RTG.png',
    key: 'Backpack',
    name: 'Backpack',
    type: 'Player',
  },
]

export const _predefinedArticlesMap = reduce<Article, Record<ArticleKey, Article>>(
  (acc, article) => {
    acc[article.key] = article
    return acc
  },
  {},
  predefinedArticles,
)
