import { Article } from '@astroneer/types'
import { fetchParentsForArticle } from '../../src/fetcher'
import { urlComposer } from '../../src/url-composer'
import { map } from 'ramda'
import { getCachedArticle } from '../../src/cache'

describe('fetchParentsForArticle', () => {
  it('RTG - should return empty array if there are no parents', async () => {
    const url = urlComposer('RTG')
    const result = await fetchParentsForArticle(url)
    expect(result).toStrictEqual<Article[]>([])
  })

  it('Compound - should return all parents for article key', async () => {
    const url = urlComposer('Compound')
    const result = await fetchParentsForArticle(url)
    const expected = map(getCachedArticle, [
      'Buggy',
      'EXO_Request_Platform',
      'Extra_Large_Curved_Platform',
      'Large_Curved_Platform',
      'Large_Printer',
      'Large_Rover_Seat',
      'Medium_Printer',
      'Plastic',
      'Research_Chamber',
      'Rover_Seat',
      'Small_Generator',
      'Small_Printer',
      'Smelting_Furnace',
      'Soil_Centrifuge',
      'Tethers',
      'Trailer',
    ])
    expect(result).toStrictEqual<Article[]>(expected)
  })

  it('Atmospheric Condenser - should include predefined articles as parents for article key', async () => {
    const url = urlComposer('Atmospheric_Condenser')
    const result = await fetchParentsForArticle(url)
    const expected = map(getCachedArticle, [
      'Argon',
      'Helium',
      'Hydrogen',
      'Methane',
      'Nitrogen',
      'Sulfur',
    ])
    expect(result).toStrictEqual<Article[]>(expected)
  })
})
