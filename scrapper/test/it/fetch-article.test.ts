import { fetchArticle } from '../../src'
import { urlComposer } from '../../src/url-composer'

// WARNING: Those tests cannot be ran against wiki.gg domain,
// because it violates Terms Of Service.
// Please, download a copy of the archive from wiki.gg
// or WaybackMachine.

describe('fetchArticle', () => {
  it('RTG', async () => {
    const url = urlComposer('RTG')
    const article = await fetchArticle(url, { strategy: 'remote' })
    expect(article).toStrictEqual({
      key: 'RTG',
      type: 'Power Generation',
      name: 'RTG',
      iconURL: 'https://astroneer.wiki.gg/images/thumb/a/a7/Icon_Generator.png/30px-Icon_Generator.png',
      imageURL: 'https://astroneer.wiki.gg/images/thumb/8/87/RTG.png/270px-RTG.png',
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
      type: 'Composite',
      iconURL: 'https://astroneer.wiki.gg/images/thumb/0/0c/Icon_Nanocarbon_Alloy.png/30px-Icon_Nanocarbon_Alloy.png',
      imageURL: 'https://astroneer.wiki.gg/images/thumb/c/cb/Nugget_Nanocarbon_Alloy.png/270px-Nugget_Nanocarbon_Alloy.png',
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
      iconURL: 'https://astroneer.wiki.gg/images/thumb/7/79/Icon_Helium.png/30px-Icon_Helium.png',
      imageURL: 'https://astroneer.wiki.gg/images/thumb/9/9a/Nugget_Helium.png/270px-Nugget_Helium.png',
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
      iconURL: 'https://astroneer.wiki.gg/images/thumb/8/80/Icon_Atmospheric_Condenser.png/30px-Icon_Atmospheric_Condenser.png',
      imageURL: 'https://astroneer.wiki.gg/images/thumb/0/02/Apt_condensor.png/270px-Apt_condensor.png',
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
      iconURL: 'https://astroneer.wiki.gg/images/thumb/c/c8/Icon_Plastic.png/30px-Icon_Plastic.png',
      imageURL: 'https://astroneer.wiki.gg/images/thumb/b/b9/Nugget_Plastic.png/270px-Nugget_Plastic.png',
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
      iconURL: 'https://astroneer.wiki.gg/images/thumb/9/9a/Icon_Compound.png/30px-Icon_Compound.png',
      imageURL: 'https://astroneer.wiki.gg/images/thumb/0/0a/Nugget_Compound.png/270px-Nugget_Compound.png',
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
      key: 'Large_Rover',
      name: 'Large Rover',
      iconURL: 'https://astroneer.wiki.gg/images/thumb/a/ad/Icon_Rover.png/30px-Icon_Rover.png',
      imageURL: 'https://astroneer.wiki.gg/images/thumb/7/76/Large_Rover.png/270px-Large_Rover.png',
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
    })
  })
})
