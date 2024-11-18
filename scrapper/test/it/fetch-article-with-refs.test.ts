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
        iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/a3/Icon_Tier_Medium.png/revision/latest/scale-to-width-down/30?cb=20191116124736',
        imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/6/6c/Small_Printer.png/revision/latest/scale-to-width-down/250?cb=20200617202356',
        tier: 'Small',
        type: 'Crafting',
        recipe: {
          craftedAt: 'Backpack',
          ingredients: [ { amount: 1, key: 'Compound' } ],
        },
      },
      _referencesMap: {
        Compound: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/9a/Icon_Compound.png/revision/latest/scale-to-width-down/30?cb=20190419174519',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/0a/Nugget_Compound.png/revision/latest/scale-to-width-down/250?cb=20191016232839',
          key: 'Compound',
          name: 'Compound',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Backpack: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/6/68/Icon_Backpack.png/revision/latest/scale-to-width-down/20?cb=20191116124822',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/1/13/Backpack_2.0.png/revision/latest/scale-to-width-down/180?cb=20220115211426',
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
      _referencesMap: {
        Organic: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/90/Icon_Organic.png/revision/latest/scale-to-width-down/30?cb=20200113024647',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/ca/Nugget_Organic.png/revision/latest/scale-to-width-down/250?cb=20191016232856',
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
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/e0/Icon_Resin.png/revision/latest/scale-to-width-down/30?cb=20200113024631',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/34/Nugget_Resin.png/revision/latest/scale-to-width-down/250?cb=20191016232859',
          key: 'Resin',
          name: 'Resin',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Compound: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/9a/Icon_Compound.png/revision/latest/scale-to-width-down/30?cb=20190419174519',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/0a/Nugget_Compound.png/revision/latest/scale-to-width-down/250?cb=20191016232839',
          key: 'Compound',
          name: 'Compound',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Backpack: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/6/68/Icon_Backpack.png/revision/latest/scale-to-width-down/20?cb=20191116124822',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/1/13/Backpack_2.0.png/revision/latest/scale-to-width-down/180?cb=20220115211426',
          key: 'Backpack',
          name: 'Backpack',
          type: 'Player',
        },
        Small_Printer: {
          key: 'Small_Printer',
          name: 'Small Printer',
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/a3/Icon_Tier_Medium.png/revision/latest/scale-to-width-down/30?cb=20191116124736',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/6/6c/Small_Printer.png/revision/latest/scale-to-width-down/250?cb=20200617202356',
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
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/d/d1/Icon_Tier_Large.png/revision/latest/scale-to-width-down/30?cb=20191116124735',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/5/52/Medium_Printer.png/revision/latest/scale-to-width-down/250?cb=20201230130547',
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
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/5/51/Icon_Smelting_Furnace.png/revision/latest/scale-to-width-down/30?cb=20191116124746',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/79/Smelting_Furnace.png/revision/latest/scale-to-width-down/250?cb=20220711193617',
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
        Clay: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/4e/Icon_Clay.png/revision/latest/scale-to-width-down/30?cb=20190419174517',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/6/6e/Nugget_Clay.png/revision/latest/scale-to-width-down/250?cb=20191016232837',
          key: 'Clay',
          name: 'Clay',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Ceramic: {
          key: 'Ceramic',
          name: 'Ceramic',
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/03/Icon_Ceramic.png/revision/latest/scale-to-width-down/30?cb=20190419174516',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/1/10/Nugget_Ceramic.png/revision/latest/scale-to-width-down/250?cb=20191016232836',
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
        Wolframite: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/ae/Icon_Wolframite.png/revision/latest/scale-to-width-down/30?cb=20200113024401',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/03/Nugget_Wolframite.png/revision/latest/scale-to-width-down/250?cb=20191016232913',
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
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/91/Icon_Tungsten.png/revision/latest/scale-to-width-down/30?cb=20200113024408',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/48/Nugget_Tungsten.png/revision/latest/scale-to-width-down/250?cb=20191016232910',
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
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/f/fc/Icon_Quartz.png/revision/latest/scale-to-width-down/30?cb=20200113024637',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/4/40/Nugget_Quartz.png/revision/latest/scale-to-width-down/250?cb=20191016232858',
          key: 'Quartz',
          name: 'Quartz',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Glass: {
          key: 'Glass',
          name: 'Glass',
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/76/Icon_Glass.png/revision/latest/scale-to-width-down/30?cb=20200113025002',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/3b/Nugget_Glass.png/revision/latest/scale-to-width-down/250?cb=20191016232842',
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
        Chemistry_Lab: {
          key: 'Chemistry_Lab',
          name: 'Chemistry Lab',
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/3e/Icon_Chemistry_Lab.png/revision/latest/scale-to-width-down/30?cb=20191116124752',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/d/d2/Chemistry_Lab.jpg/revision/latest/scale-to-width-down/190?cb=20190905144920',
          tier: 'Large',
          type: 'Crafting',
          unlockCost: 1600,
          recipe: {
            craftedAt: 'Medium_Printer',
            ingredients: [
              {
                amount: 1,
                key: 'Ceramic',
              },
              {
                amount: 1,
                key: 'Tungsten',
              },
              {
                amount: 1,
                key: 'Glass',
              },
            ],
          },
        },
        Plastic: {
          key: 'Plastic',
          name: 'Plastic',
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/c8/Icon_Plastic.png/revision/latest/scale-to-width-down/30?cb=20200113024642',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/b/b9/Nugget_Plastic.png/revision/latest/scale-to-width-down/250?cb=20191016232857',
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
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/75/Icon_Hematite.png/revision/latest/scale-to-width-down/30?cb=20200113024944',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/39/Nugget_Hematite.png/revision/latest/scale-to-width-down/250?cb=20191016232847',
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
        Atmospheric_Condenser: {
          key: 'Atmospheric_Condenser',
          name: 'Atmospheric Condenser',
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/8/80/Icon_Atmospheric_Condenser.png/revision/latest/scale-to-width-down/30?cb=20191116124739',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/02/Apt_condensor.png/revision/latest/scale-to-width-down/204?cb=20220112121925',
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
        Steel: {
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
        Helium: {
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
        Titanite: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/d/d8/Icon_Titanite.png/revision/latest/scale-to-width-down/30?cb=20200113024536',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/e7/Nugget_Titanite.png/revision/latest/scale-to-width-down/250?cb=20191016232906',
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
        Nitrogen: {
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
        Graphite: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/c1/Icon_Graphite.png/revision/latest/scale-to-width-down/30?cb=20200113024957',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/cf/Nugget_Graphite.png/revision/latest/scale-to-width-down/250?cb=20191016232844',
          key: 'Graphite',
          name: 'Graphite',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Ammonium: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/3/30/Icon_Ammonium.png/revision/latest/scale-to-width-down/30?cb=20190419174509',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/f/f5/Nugget_Ammonium.png/revision/latest/scale-to-width-down/250?cb=20191016232832',
          key: 'Ammonium',
          name: 'Ammonium',
          planets: true,
          tier: 'Small',
          type: 'Natural',
        },
        Hydrogen: {
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
        Hydrazine: {
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
        Titanium_Alloy: {
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
        Nanocarbon_Alloy: {
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
        Lithium: {
          iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/2/20/Icon_Lithium.png/revision/latest/scale-to-width-down/30?cb=20200113024918',
          imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/e/ef/Nugget_Lithium.png/revision/latest/scale-to-width-down/250?cb=20191016232853',
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
