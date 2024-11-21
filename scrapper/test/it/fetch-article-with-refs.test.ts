import { urlComposer } from '../../src/url-composer'
import { fetchArticleWithRefs } from '../../src/fetcher'
import { ArticleWithRefs } from '@astroneer/types'

describe('fetchArticleWithRefs', () => {
  it('Small Printer', async () => {
    const url = urlComposer('Small_Printer')
    const article = await fetchArticleWithRefs(url, { strategy: 'cache' })
    expect(article).toStrictEqual<ArticleWithRefs>({
      article: {
        key: 'Small_Printer',
        name: 'Small Printer',
        iconURL: 'https://astroneer.wiki.gg/images/thumb/a/a3/Icon_Tier_Medium.png/30px-Icon_Tier_Medium.png',
        imageURL: 'https://astroneer.wiki.gg/images/thumb/6/6c/Small_Printer.png/270px-Small_Printer.png',
        tier: 'Small',
        type: 'Crafting',
        recipe: {
          craftedAt: 'Backpack',
          ingredients: [
            {
              amount: 1,
              key: 'Compound',
            },
          ],
        },
      },
      _referencesMap: {
        Compound: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/9/9a/Icon_Compound.png/30px-Icon_Compound.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/0/0a/Nugget_Compound.png/270px-Nugget_Compound.png',
          key: 'Compound',
          name: 'Compound',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Backpack: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/a/a7/Icon_Generator.png/30px-Icon_Generator.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/8/87/RTG.png/270px-RTG.png',
          key: 'Backpack',
          name: 'Backpack',
          type: 'Player',
        },
      },
    })
  })

  it('RTG', async () => {
    const url = urlComposer('RTG')
    const article = await fetchArticleWithRefs(url, { strategy: 'cache' })
    expect(article).toStrictEqual<ArticleWithRefs>({
      article: {
        key: 'RTG',
        name: 'RTG',
        iconURL: 'https://astroneer.wiki.gg/images/thumb/a/a7/Icon_Generator.png/30px-Icon_Generator.png',
        imageURL: 'https://astroneer.wiki.gg/images/thumb/8/87/RTG.png/270px-RTG.png',
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
      _referencesMap: {
        Organic: {
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
        Resin: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/e/e0/Icon_Resin.png/30px-Icon_Resin.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/3/34/Nugget_Resin.png/270px-Nugget_Resin.png',
          key: 'Resin',
          name: 'Resin',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Compound: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/9/9a/Icon_Compound.png/30px-Icon_Compound.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/0/0a/Nugget_Compound.png/270px-Nugget_Compound.png',
          key: 'Compound',
          name: 'Compound',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Backpack: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/a/a7/Icon_Generator.png/30px-Icon_Generator.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/8/87/RTG.png/270px-RTG.png',
          key: 'Backpack',
          name: 'Backpack',
          type: 'Player',
        },
        Small_Printer: {
          key: 'Small_Printer',
          name: 'Small Printer',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/a/a3/Icon_Tier_Medium.png/30px-Icon_Tier_Medium.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/6/6c/Small_Printer.png/270px-Small_Printer.png',
          tier: 'Small',
          type: 'Crafting',
          recipe: {
            craftedAt: 'Backpack',
            ingredients: [
              {
                amount: 1,
                key: 'Compound',
              },
            ],
          },
        },
        Medium_Printer: {
          key: 'Medium_Printer',
          name: 'Medium Printer',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/d/d1/Icon_Tier_Large.png/30px-Icon_Tier_Large.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/5/52/Medium_Printer.png/270px-Medium_Printer.png',
          tier: 'Medium',
          type: 'Crafting',
          recipe: {
            craftedAt: 'Small_Printer',
            ingredients: [
              {
                amount: 2,
                key: 'Compound',
              },
            ],
          },
        },
        Smelting_Furnace: {
          key: 'Smelting_Furnace',
          name: 'Smelting Furnace',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/5/51/Icon_Smelting_Furnace.png/30px-Icon_Smelting_Furnace.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/7/79/Smelting_Furnace.png/270px-Smelting_Furnace.png',
          tier: 'Large',
          type: 'Crafting',
          unlockCost: 250,
          recipe: {
            craftedAt: 'Medium_Printer',
            ingredients: [
              {
                amount: 2,
                key: 'Resin',
              },
              {
                amount: 1,
                key: 'Compound',
              },
            ],
          },
        },
        Carbon: {
          key: 'Carbon',
          name: 'Carbon',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/d/d1/Icon_Carbon.png/30px-Icon_Carbon.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/4/48/Nugget_Carbon.png/270px-Nugget_Carbon.png',
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
        Wolframite: {
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
        Tungsten: {
          key: 'Tungsten',
          name: 'Tungsten',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/9/91/Icon_Tungsten.png/30px-Icon_Tungsten.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/4/48/Nugget_Tungsten.png/270px-Nugget_Tungsten.png',
          tier: 'Small',
          type: 'Refined',
          recipe: {
            craftedAt: 'Smelting_Furnace',
            ingredients: [
              {
                amount: 1,
                key: 'Wolframite',
              },
            ],
          },
        },
        Quartz: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/f/fc/Icon_Quartz.png/30px-Icon_Quartz.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/4/40/Nugget_Quartz.png/270px-Nugget_Quartz.png',
          key: 'Quartz',
          name: 'Quartz',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Glass: {
          key: 'Glass',
          name: 'Glass',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/7/76/Icon_Glass.png/30px-Icon_Glass.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/3/3b/Nugget_Glass.png/270px-Nugget_Glass.png',
          tier: 'Small',
          type: 'Refined',
          recipe: {
            craftedAt: 'Smelting_Furnace',
            ingredients: [
              {
                amount: 1,
                key: 'Quartz',
              },
            ],
          },
        },
        Clay: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/4/4e/Icon_Clay.png/30px-Icon_Clay.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/6/6e/Nugget_Clay.png/270px-Nugget_Clay.png',
          key: 'Clay',
          name: 'Clay',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Ceramic: {
          key: 'Ceramic',
          name: 'Ceramic',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/0/03/Icon_Ceramic.png/30px-Icon_Ceramic.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/1/10/Nugget_Ceramic.png/270px-Nugget_Ceramic.png',
          tier: 'Small',
          type: 'Refined',
          recipe: {
            craftedAt: 'Smelting_Furnace',
            ingredients: [
              {
                amount: 1,
                key: 'Clay',
              },
            ],
          },
        },
        Chemistry_Lab: {
          key: 'Chemistry_Lab',
          name: 'Chemistry Lab',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/3/3e/Icon_Chemistry_Lab.png/30px-Icon_Chemistry_Lab.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/d/d2/Chemistry_Lab.jpg/270px-Chemistry_Lab.jpg',
          tier: 'Large',
          type: 'Crafting',
          unlockCost: 1600,
          recipe: {
            craftedAt: 'Medium_Printer',
            ingredients: [
              {
                amount: 1,
                key: 'Tungsten',
              },
              {
                amount: 1,
                key: 'Glass',
              },
              {
                amount: 1,
                key: 'Ceramic',
              },
            ],
          },
        },
        Plastic: {
          key: 'Plastic',
          name: 'Plastic',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/c/c8/Icon_Plastic.png/30px-Icon_Plastic.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/b/b9/Nugget_Plastic.png/270px-Nugget_Plastic.png',
          tier: 'Small',
          type: 'Composite',
          recipe: {
            craftedAt: 'Chemistry_Lab',
            ingredients: [
              {
                amount: 1,
                key: 'Compound',
              },
              {
                amount: 1,
                key: 'Carbon',
              },
            ],
          },
        },
        Hematite: {
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
        Iron: {
          key: 'Iron',
          name: 'Iron',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/7/71/Icon_Iron.png/30px-Icon_Iron.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/b/bf/Nugget_Iron.png/270px-Nugget_Iron.png',
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
        Atmospheric_Condenser: {
          key: 'Atmospheric_Condenser',
          name: 'Atmospheric Condenser',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/8/80/Icon_Atmospheric_Condenser.png/30px-Icon_Atmospheric_Condenser.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/0/02/Apt_condensor.png/270px-Apt_condensor.png',
          tier: 'Large',
          type: 'Module',
          unlockCost: 2200,
          recipe: {
            craftedAt: 'Medium_Printer',
            ingredients: [
              {
                amount: 1,
                key: 'Plastic',
              },
              {
                amount: 1,
                key: 'Glass',
              },
              {
                amount: 1,
                key: 'Iron',
              },
            ],
          },
        },
        Argon: {
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
        Steel: {
          key: 'Steel',
          name: 'Steel',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/3/38/Icon_Steel.png/30px-Icon_Steel.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/6/60/Nugget_Steel.png/270px-Nugget_Steel.png',
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
        Helium: {
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
        Titanite: {
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
        Titanium: {
          key: 'Titanium',
          name: 'Titanium',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/2/2a/Icon_Titanium.png/30px-Icon_Titanium.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/a/a9/Nugget_Titanium.png/270px-Nugget_Titanium.png',
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
        Nitrogen: {
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
        Graphite: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/c/c1/Icon_Graphite.png/30px-Icon_Graphite.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/c/cf/Nugget_Graphite.png/270px-Nugget_Graphite.png',
          key: 'Graphite',
          name: 'Graphite',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Ammonium: {
          iconURL: 'https://astroneer.wiki.gg/images/thumb/3/30/Icon_Ammonium.png/30px-Icon_Ammonium.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/f/f5/Nugget_Ammonium.png/270px-Nugget_Ammonium.png',
          key: 'Ammonium',
          name: 'Ammonium',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Hydrogen: {
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
        Hydrazine: {
          key: 'Hydrazine',
          name: 'Hydrazine',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/f/fb/Icon_Hydrazine.png/30px-Icon_Hydrazine.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/e/ec/Nugget_Hydrazine.png/270px-Nugget_Hydrazine.png',
          tier: 'Small',
          type: 'Composite',
          recipe: {
            craftedAt: 'Chemistry_Lab',
            ingredients: [
              {
                amount: 2,
                key: 'Ammonium',
              },
              {
                amount: 1,
                key: 'Hydrogen',
              },
            ],
          },
        },
        Graphene: {
          key: 'Graphene',
          name: 'Graphene',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/a/af/Icon_Graphene.png/30px-Icon_Graphene.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/9/95/Nugget_Graphene.png/270px-Nugget_Graphene.png',
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
        Titanium_Alloy: {
          key: 'Titanium_Alloy',
          name: 'Titanium Alloy',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/8/85/Icon_Titanium_Alloy.png/30px-Icon_Titanium_Alloy.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/1/1f/Nugget_Titanium_Alloy.png/270px-Nugget_Titanium_Alloy.png',
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
        Nanocarbon_Alloy: {
          key: 'Nanocarbon_Alloy',
          name: 'Nanocarbon Alloy',
          iconURL: 'https://astroneer.wiki.gg/images/thumb/0/0c/Icon_Nanocarbon_Alloy.png/30px-Icon_Nanocarbon_Alloy.png',
          imageURL: 'https://astroneer.wiki.gg/images/thumb/c/cb/Nugget_Nanocarbon_Alloy.png/270px-Nugget_Nanocarbon_Alloy.png',
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
        Lithium: {
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
      },
    })
  })
})
