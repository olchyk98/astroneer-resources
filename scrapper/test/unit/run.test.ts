import { fetchArticle } from '../../src'

describe('run', () => {
  it('RTG', async () => {
    const url = 'https://astroneer.fandom.com/wiki/RTG'
    const article = await fetchArticle(url)
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
        ingradients: [
          { amount: 1, key: 'Nanocarbon_Alloy' },
          { amount: 1, key: 'Lithium' },
        ],
      },
    })
  })

  it('Nanocarbon Alloy', async () => {
    const url = 'https://astroneer.fandom.com/wiki/Nanocarbon_Alloy'
    const article = await fetchArticle(url)
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
        ingradients: [
          { amount: 1, key: 'Steel' },
          { amount: 1, key: 'Helium' },
          { amount: 1, key: 'Titanium_Alloy' },
        ],
      },
    })
  })

  it('Helium', async () => {
    const url = 'https://astroneer.fandom.com/wiki/Helium'
    const article = await fetchArticle(url)
    expect(article).toStrictEqual({
      key: 'Helium',
      name: 'Helium',
      iconURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/7/79/Icon_Helium.png/revision/latest/scale-to-width-down/30?cb=20200113024949',
      imageURL: 'https://static.wikia.nocookie.net/astroneer_gamepedia/images/9/9a/Nugget_Helium.png/revision/latest/scale-to-width-down/250?cb=20191016232845',
      tier: 'Small',
      type: 'Atmospheric',
      unlockCost: undefined,
      recipe: { craftedAt: 'Atmospheric_Condenser', ingradients: [] },
    })
  })

  it('Atmospheric Condenser', async () => {
    const url = 'https://astroneer.fandom.com/wiki/Atmospheric_Condenser'
    const article = await fetchArticle(url)
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
        ingradients: [
          { amount: 1, key: 'Plastic' },
          { amount: 1, key: 'Glass' },
          { amount: 1, key: 'Iron' },
        ],
      },
    })
  })
})
