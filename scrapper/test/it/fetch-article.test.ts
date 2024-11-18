import { fetchArticle } from '../../src'
import { urlComposer } from '../../src/url-composer'

// WARNING: Those tests cannot be ran against fandom.com domain,
// because it violates Terms Of Service.
// Please, download a copy of the archive from fandom.com
// or WaybackMachine.

describe('fetchArticle', () => {
  it('RTG', async () => {
    const url = urlComposer('RTG')
    const article = await fetchArticle(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
      key: 'RTG',
      type: 'Power Generation',
      name: 'RTG',
      iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/a7/Icon_Generator.png/revision/latest/scale-to-width-down/30?cb=20191116124832',
      imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/8/87/RTG.png/revision/latest/scale-to-width-down/250?cb=20200618202206',
      tier: 'Medium',
      unlockCost: 12500,
      recipe: {
        craftedAt: 'Small_Printer',
        ingredients: [
          { amount: 1, key: 'Nanocarbon_Alloy' },
          { amount: 1, key: 'Lithium' },
        ],
      },
    })
  })

  it('Nanocarbon Alloy', async () => {
    const url = urlComposer('Nanocarbon_Alloy')
    const article = await fetchArticle(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
      key: 'Nanocarbon_Alloy',
      name: 'Nanocarbon Alloy',
      iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/0c/Icon_Nanocarbon_Alloy.png/revision/latest/scale-to-width-down/30?cb=20200113024719',
      type: 'Composite',
      imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/cb/Nugget_Nanocarbon_Alloy.png/revision/latest/scale-to-width-down/250?cb=20191016232915',
      tier: 'Small',
      unlockCost: undefined,
      recipe: {
        craftedAt: 'Chemistry_Lab',
        ingredients: [
          { amount: 1, key: 'Steel' },
          { amount: 1, key: 'Helium' },
          { amount: 1, key: 'Titanium_Alloy' },
        ],
      },
    })
  })

  it('Helium', async () => {
    const url = urlComposer('Helium')
    const article = await fetchArticle(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
      key: 'Helium',
      name: 'Helium',
      iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/79/Icon_Helium.png/revision/latest/scale-to-width-down/30?cb=20200113024949',
      imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/9a/Nugget_Helium.png/revision/latest/scale-to-width-down/250?cb=20191016232845',
      tier: 'Small',
      type: 'Atmospheric',
      planets: [ 'Atrox' ],
      recipe: { craftedAt: 'Atmospheric_Condenser', ingredients: [] },
    })
  })

  it('Atmospheric Condenser', async () => {
    const url = urlComposer('Atmospheric_Condenser')
    const article = await fetchArticle(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
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
          { amount: 1, key: 'Plastic' },
          { amount: 1, key: 'Glass' },
          { amount: 1, key: 'Iron' },
        ],
      },
    })
  })

  it('Plastic', async () => {
    const url = urlComposer('Plastic')
    const article = await fetchArticle(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
      key: 'Plastic',
      name: 'Plastic',
      iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/c/c8/Icon_Plastic.png/revision/latest/scale-to-width-down/30?cb=20200113024642',
      imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/b/b9/Nugget_Plastic.png/revision/latest/scale-to-width-down/250?cb=20191016232857',
      tier: 'Small',
      type: 'Composite',
      unlockCost: undefined,
      recipe: {
        craftedAt: 'Chemistry_Lab',
        ingredients: [ { amount: 1, key: 'Compound' }, { amount: 1, key: 'Carbon' } ],
      },
    })
  })

  it('Compound', async () => {
    const url = urlComposer('Compound')
    const article = await fetchArticle(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
      iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/9a/Icon_Compound.png/revision/latest/scale-to-width-down/30?cb=20190419174519',
      imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/0/0a/Nugget_Compound.png/revision/latest/scale-to-width-down/250?cb=20191016232839',
      key: 'Compound',
      name: 'Compound',
      planets: true,
      tier: 'Small',
      type: 'Natural',
    })
  })

  it('Large Rover', async () => {
    const url = urlComposer('Large_Rover')
    const article = await fetchArticle(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
      article: {
        key: 'Large_Rover',
        name: 'Large Rover',
        iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/a/ad/Icon_Rover.png/revision/latest/scale-to-width-down/30?cb=20191116124915',
        imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/76/Large_Rover.png/revision/latest/scale-to-width-down/250?cb=20200706154223',
        tier: 'Extra Large',
        type: 'Rover',
        unlockCost: 5000,
        recipe: {
          craftedAt: 'Large_Printer',
          ingredients: [
            { amount: 2, key: 'EXO_Chip' },
            { amount: 1, key: 'Aluminum_Alloy' },
            { amount: 1, key: 'Rubber' },
          ],
        },
      },
    })
  })
})
