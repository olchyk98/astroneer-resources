import { fetchArticleDeep } from '../../src'
import $RTGDeepTree from '../test-data/rtg-deep-tree.json'
import { urlComposer } from '../../src/url-composer'

describe('fetchArticleDeep', () => {
  it('RTG', async () => {
    const url = urlComposer('RTG')
    const article = await fetchArticleDeep(url, { strategy: 'cache' })
    expect(article).toStrictEqual($RTGDeepTree)
    return
  })
})
