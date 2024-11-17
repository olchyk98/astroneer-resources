import { fetchArticleDeep } from '../../src'
import { urlComposer } from '../../src/url-composer'

describe('fetchArticleDeep', () => {
  it('RTG', async () => {
    const url = urlComposer('RTG')
    const article = await fetchArticleDeep(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
      article: {
        key: 'RTG',
        name: 'RTG',
        iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/a7/Icon_Generator.png/revision/latest/scale-to-width-down/30?cb=20191116124832',
        imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/8/87/RTG.png/revision/latest/scale-to-width-down/250?cb=20200618202206',
        tier: 'Medium',
        type: 'Power Generation',
        unlockCost: 12500,
        recipe: {
          craftedAt: 'Small_Printer',
          ingredients: [
            {
              amount: 1,
              key: 'Nanocarbon_Alloy',
            },
            {
              amount: 1,
              key: 'Lithium',
            },
          ],
        },
      },
      children: [
        {
          article: {
            key: 'Nanocarbon_Alloy',
            name: 'Nanocarbon Alloy',
            iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/0c/Icon_Nanocarbon_Alloy.png/revision/latest/scale-to-width-down/30?cb=20200113024719',
            imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/cb/Nugget_Nanocarbon_Alloy.png/revision/latest/scale-to-width-down/250?cb=20191016232915',
            tier: 'Small',
            type: 'Composite',
            recipe: {
              craftedAt: 'Chemistry_Lab',
              ingredients: [
                {
                  amount: 1,
                  key: 'Steel',
                },
                {
                  amount: 1,
                  key: 'Helium',
                },
                {
                  amount: 1,
                  key: 'Titanium_Alloy',
                },
              ],
            },
          },
          children: [
            {
              article: {
                key: 'Steel',
                name: 'Steel',
                iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/38/Icon_Steel.png/revision/latest/scale-to-width-down/30?cb=20200113024602',
                imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/6/60/Nugget_Steel.png/revision/latest/scale-to-width-down/250?cb=20191016232904',
                tier: 'Small',
                type: 'Composite',
                recipe: {
                  craftedAt: 'Chemistry_Lab',
                  ingredients: [
                    {
                      amount: 1,
                      key: 'Carbon',
                    },
                    {
                      amount: 1,
                      key: 'Argon',
                    },
                    {
                      amount: 1,
                      key: 'Iron',
                    },
                  ],
                },
              },
              children: [
                {
                  article: {
                    key: 'Carbon',
                    name: 'Carbon',
                    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/d/d1/Icon_Carbon.png/revision/latest/scale-to-width-down/30?cb=20190419174515',
                    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/48/Nugget_Carbon.png/revision/latest/scale-to-width-down/250?cb=20191016232835',
                    tier: 'Small',
                    type: 'Refined',
                    recipe: {
                      craftedAt: 'Smelting_Furnace',
                      ingredients: [
                        {
                          amount: 1,
                          key: 'Organic',
                        },
                      ],
                    },
                  },
                  children: [
                    {
                      article: {
                        iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/90/Icon_Organic.png/revision/latest/scale-to-width-down/30?cb=20200113024647',
                        imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/ca/Nugget_Organic.png/revision/latest/scale-to-width-down/250?cb=20191016232856',
                        key: 'Organic',
                        name: 'Organic',
                        planets: true,
                        tier: 'Small',
                        type: 'Natural',
                      },
                    },
                  ],
                },
                {
                  article: {
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
                },
                {
                  article: {
                    key: 'Iron',
                    name: 'Iron',
                    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/71/Icon_Iron.png/revision/latest/scale-to-width-down/30?cb=20200113024930',
                    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/b/bf/Nugget_Iron.png/revision/latest/scale-to-width-down/250?cb=20191016232850',
                    tier: 'Small',
                    type: 'Refined',
                    recipe: {
                      craftedAt: 'Smelting_Furnace',
                      ingredients: [
                        {
                          amount: 1,
                          key: 'Hematite',
                        },
                      ],
                    },
                  },
                  children: [
                    {
                      article: {
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
                    },
                  ],
                },
              ],
            },
            {
              article: {
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
            },
            {
              article: {
                key: 'Titanium_Alloy',
                name: 'Titanium Alloy',
                iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/8/85/Icon_Titanium_Alloy.png/revision/latest/scale-to-width-down/30?cb=20200113024529',
                imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/1/1f/Nugget_Titanium_Alloy.png/revision/latest/scale-to-width-down/250?cb=20191016232908',
                tier: 'Small',
                type: 'Composite',
                recipe: {
                  craftedAt: 'Chemistry_Lab',
                  ingredients: [
                    {
                      amount: 1,
                      key: 'Titanium',
                    },
                    {
                      amount: 1,
                      key: 'Nitrogen',
                    },
                    {
                      amount: 1,
                      key: 'Graphene',
                    },
                  ],
                },
              },
              children: [
                {
                  article: {
                    key: 'Titanium',
                    name: 'Titanium',
                    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/2/2a/Icon_Titanium.png/revision/latest/scale-to-width-down/30?cb=20200113024522',
                    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/a9/Nugget_Titanium.png/revision/latest/scale-to-width-down/250?cb=20191016232909',
                    tier: 'Small',
                    type: 'Refined',
                    recipe: {
                      craftedAt: 'Smelting_Furnace',
                      ingredients: [
                        {
                          amount: 1,
                          key: 'Titanite',
                        },
                      ],
                    },
                  },
                  children: [
                    {
                      article: {
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
                    },
                  ],
                },
                {
                  article: {
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
                },
                {
                  article: {
                    key: 'Graphene',
                    name: 'Graphene',
                    iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/af/Icon_Graphene.png/revision/latest/scale-to-width-down/30?cb=20200113024341',
                    imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/95/Nugget_Graphene.png/revision/latest/scale-to-width-down/250?cb=20191016232844',
                    tier: 'Small',
                    type: 'Composite',
                    recipe: {
                      craftedAt: 'Chemistry_Lab',
                      ingredients: [
                        {
                          amount: 1,
                          key: 'Graphite',
                        },
                        {
                          amount: 1,
                          key: 'Hydrazine',
                        },
                      ],
                    },
                  },
                  children: [
                    {
                      article: {
                        iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/c1/Icon_Graphite.png/revision/latest/scale-to-width-down/30?cb=20200113024957',
                        imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/cf/Nugget_Graphite.png/revision/latest/scale-to-width-down/250?cb=20191016232844',
                        key: 'Graphite',
                        name: 'Graphite',
                        planets: true,
                        tier: 'Small',
                        type: 'Natural',
                      },
                    },
                    {
                      article: {
                        key: 'Hydrazine',
                        name: 'Hydrazine',
                        iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/f/fb/Icon_Hydrazine.png/revision/latest/scale-to-width-down/30?cb=20200113024940',
                        imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/ec/Nugget_Hydrazine.png/revision/latest/scale-to-width-down/250?cb=20200613173529',
                        tier: 'Small',
                        type: 'Composite',
                        recipe: {
                          craftedAt: 'Chemistry_Lab',
                          ingredients: [
                            {
                              amount: 1,
                              key: 'Ammonium',
                            },
                            {
                              amount: 1,
                              key: 'Hydrogen',
                            },
                          ],
                        },
                      },
                      children: [
                        {
                          article: {
                            iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/30/Icon_Ammonium.png/revision/latest/scale-to-width-down/30?cb=20190419174509',
                            imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/f/f5/Nugget_Ammonium.png/revision/latest/scale-to-width-down/250?cb=20191016232832',
                            key: 'Ammonium',
                            name: 'Ammonium',
                            planets: true,
                            tier: 'Small',
                            type: 'Natural',
                          },
                        },
                        {
                          article: {
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
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          article: {
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
        },
      ],
    })
  })
})
