import { Article, ArticleWithRefs } from '@astroneer/types'
import { fetchParentsWithRefsForArticle } from '../../src'
import { urlComposer } from '../../src/url-composer'
import { getCachedArticle } from '../../src/cache'
import { mapObjIndexed, pick } from 'ramda'

describe('fetchParentsWithRefsForArticle', () => {
  it('RTG - should handle no parents', async () => {
    const url = urlComposer('RTG')
    const result = await fetchParentsWithRefsForArticle(url)
    expect(result).toStrictEqual<ArticleWithRefs>({
      article: { ...getCachedArticle('RTG'), _parentKeys: [] },
      _referencesMap: {
        // XXX: Input article
        RTG: { ...getCachedArticle('RTG'), _parentKeys: [] },
        // XXX: Recipe articles
        Nanocarbon_Alloy: { ...getCachedArticle('Nanocarbon_Alloy'), _parentKeys: [ 'RTG' ] },
        Lithium: { ...getCachedArticle('Lithium'), _parentKeys: [ 'RTG' ] },
        Small_Printer: { ...getCachedArticle('Small_Printer'), _parentKeys: [ 'RTG' ] },
      },
    })
  })

  it('Atmospheric Condenser - should handle multiple parents', async () => {
    const url = urlComposer('Atmospheric_Condenser')
    const result_ = await fetchParentsWithRefsForArticle(url)
    const result = {
      article: pick([ 'key', '_parentKeys' ], result_.article),
      _referencesMap: mapObjIndexed(pick([ 'key', '_parentKeys' ]), result_._referencesMap),
    }

    expect(result).toStrictEqual<ArticleWithRefs<Pick<Article, 'key' | '_parentKeys'>>>({
      article: {
        key: 'Atmospheric_Condenser',
        _parentKeys: [
          'Argon',
          'Helium',
          'Hydrogen',
          'Methane',
          'Nitrogen',
          'Sulfur',
        ],
      },
      _referencesMap: {
        Plastic: {
          key: 'Plastic',
          _parentKeys: [
            'Atmospheric_Condenser',
          ],
        },
        Glass: {
          key: 'Glass',
          _parentKeys: [
            'Atmospheric_Condenser',
          ],
        },
        Iron: {
          key: 'Iron',
          _parentKeys: [
            'Atmospheric_Condenser',
          ],
        },
        Medium_Printer: {
          key: 'Medium_Printer',
          _parentKeys: [
            'Atmospheric_Condenser',
          ],
        },
        Atmospheric_Condenser: {
          key: 'Atmospheric_Condenser',
          _parentKeys: [
            'Argon',
            'Helium',
            'Hydrogen',
            'Methane',
            'Nitrogen',
            'Sulfur',
          ],
        },
        Argon: {
          key: 'Argon',
          _parentKeys: [
            'Steel',
          ],
        },
        Carbon: {
          key: 'Carbon',
          _parentKeys: [
            'Steel',
          ],
        },
        Chemistry_Lab: {
          key: 'Chemistry_Lab',
          _parentKeys: [
            'Steel',
          ],
        },
        Steel: {
          key: 'Steel',
          _parentKeys: [
            'Auto_Extractor',
            'Crane',
            'Extra_Large_Shredder',
            'Hydrazine_Thruster',
            'Large_Fog_Horn',
            'Large_Storage_Silo_A',
            'Large_Storage_Silo_B',
            'Nanocarbon_Alloy',
            'Probe_Scanner',
          ],
        },
        EXO_Chip: {
          key: 'EXO_Chip',
          _parentKeys: [
            'Auto_Extractor',
          ],
        },
        Rubber: {
          key: 'Rubber',
          _parentKeys: [
            'Auto_Extractor',
          ],
        },
        Tungsten_Carbide: {
          key: 'Tungsten_Carbide',
          _parentKeys: [
            'Auto_Extractor',
          ],
        },
        Large_Printer: {
          key: 'Large_Printer',
          _parentKeys: [
            'Auto_Extractor',
          ],
        },
        Auto_Extractor: {
          key: 'Auto_Extractor',
          _parentKeys: [],
        },
        Silicone: {
          key: 'Silicone',
          _parentKeys: [
            'Crane',
            'Field_Shelter',
            'Medium_Gas_Canister',
            'Paver',
            'Shelter',
          ],
        },
        Titanium: {
          key: 'Titanium',
          _parentKeys: [
            'Crane',
          ],
        },
        Crane: {
          key: 'Crane',
          _parentKeys: [],
        },
        Extra_Large_Shredder: {
          key: 'Extra_Large_Shredder',
          _parentKeys: [],
        },
        Small_Printer: {
          key: 'Small_Printer',
          _parentKeys: [
            'Hydrazine_Thruster',
          ],
        },
        Hydrazine_Thruster: {
          key: 'Hydrazine_Thruster',
          _parentKeys: [],
        },
        Large_Fog_Horn: {
          key: 'Large_Fog_Horn',
          _parentKeys: [],
        },
        Aluminum: {
          key: 'Aluminum',
          _parentKeys: [
            'Large_Storage_Silo_A',
          ],
        },
        Large_Storage_Silo_A: {
          key: 'Large_Storage_Silo_A',
          _parentKeys: [],
        },
        Large_Storage_Silo_B: {
          key: 'Large_Storage_Silo_B',
          _parentKeys: [],
        },
        Helium: {
          key: 'Helium',
          _parentKeys: [
            'Nanocarbon_Alloy',
          ],
        },
        Titanium_Alloy: {
          key: 'Titanium_Alloy',
          _parentKeys: [
            'Drill_Strength_2',
            'Drill_Strength_3',
            'Hydrazine_Jet_Pack',
            'Large_Shuttle',
            'Nanocarbon_Alloy',
          ],
        },
        Nanocarbon_Alloy: {
          key: 'Nanocarbon_Alloy',
          _parentKeys: [
            'Extra_Large_Resource_Canister',
            'Large_Resource_Canister',
            'Portable_Oxygenator',
            'RTG',
          ],
        },
        Diamond: {
          key: 'Diamond',
          _parentKeys: [
            'Drill_Mod_3',
            'Drill_Strength_3',
            'Extra_Large_Resource_Canister',
          ],
        },
        Extra_Large_Resource_Canister: {
          key: 'Extra_Large_Resource_Canister',
          _parentKeys: [],
        },
        Large_Resource_Canister: {
          key: 'Large_Resource_Canister',
          _parentKeys: [],
        },
        Backpack: {
          key: 'Backpack',
          _parentKeys: [
            'Portable_Oxygenator',
          ],
        },
        Portable_Oxygenator: {
          key: 'Portable_Oxygenator',
          _parentKeys: [],
        },
        Lithium: {
          key: 'Lithium',
          _parentKeys: [
            'RTG',
          ],
        },
        RTG: {
          key: 'RTG',
          _parentKeys: [],
        },
        Probe_Scanner: {
          key: 'Probe_Scanner',
          _parentKeys: [],
        },
        Hydrogen: {
          key: 'Hydrogen',
          _parentKeys: [
            'Hydrazine',
          ],
        },
        Ammonium: {
          key: 'Ammonium',
          _parentKeys: [
            'Hydrazine',
          ],
        },
        Hydrazine: {
          key: 'Hydrazine',
          _parentKeys: [
            'Graphene',
          ],
        },
        Graphite: {
          key: 'Graphite',
          _parentKeys: [
            'Graphene',
          ],
        },
        Graphene: {
          key: 'Graphene',
          _parentKeys: [
            'Diamond',
            'Field_Shelter',
            'Solar_Array',
            'Titanium_Alloy',
            'XL_Wind_Turbine',
          ],
        },
        Drill_Mod_3: {
          key: 'Drill_Mod_3',
          _parentKeys: [],
        },
        Drill_Strength_3: {
          key: 'Drill_Strength_3',
          _parentKeys: [],
        },
        Field_Shelter: {
          key: 'Field_Shelter',
          _parentKeys: [],
        },
        Copper: {
          key: 'Copper',
          _parentKeys: [
            'Solar_Array',
          ],
        },
        Aluminum_Alloy: {
          key: 'Aluminum_Alloy',
          _parentKeys: [
            'Solar_Array',
          ],
        },
        Solar_Array: {
          key: 'Solar_Array',
          _parentKeys: [],
        },
        Nitrogen: {
          key: 'Nitrogen',
          _parentKeys: [
            'Titanium_Alloy',
          ],
        },
        Drill_Strength_2: {
          key: 'Drill_Strength_2',
          _parentKeys: [],
        },
        Hydrazine_Jet_Pack: {
          key: 'Hydrazine_Jet_Pack',
          _parentKeys: [],
        },
        Ceramic: {
          key: 'Ceramic',
          _parentKeys: [
            'Large_Shuttle',
          ],
        },
        Large_Shuttle: {
          key: 'Large_Shuttle',
          _parentKeys: [],
        },
        XL_Wind_Turbine: {
          key: 'XL_Wind_Turbine',
          _parentKeys: [],
        },
        Methane: {
          key: 'Methane',
          _parentKeys: [
            'Silicone',
          ],
        },
        Resin: {
          key: 'Resin',
          _parentKeys: [
            'Silicone',
          ],
        },
        Quartz: {
          key: 'Quartz',
          _parentKeys: [
            'Silicone',
          ],
        },
        Medium_Gas_Canister: {
          key: 'Medium_Gas_Canister',
          _parentKeys: [],
        },
        Paver: {
          key: 'Paver',
          _parentKeys: [],
        },
        Shelter: {
          key: 'Shelter',
          _parentKeys: [],
        },
        Sulfur: {
          key: 'Sulfur',
          _parentKeys: [
            'Explosive_Powder',
          ],
        },
        Explosive_Powder: {
          key: 'Explosive_Powder',
          _parentKeys: [
            'Dynamite',
            'Fireworks',
          ],
        },
        Dynamite: {
          key: 'Dynamite',
          _parentKeys: [],
        },
        Fireworks: {
          key: 'Fireworks',
          _parentKeys: [],
        },
      },
    })
  })
})
