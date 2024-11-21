import { urlComposer } from '../../src/url-composer'

const url = process.env.ASTRONEER_WIKI_URL ?? 'https://127.0.0.1.local'

describe('urlComposer', () => {
  it('should default domain to wiki', () => {
    const result = urlComposer('RTG')
    expect(result).toEqual(`${url}/wiki/RTG`)
  })

  it('should properly append article to root with wiki domain', () => {
    const result = urlComposer({ key: 'RTG' }, 'wiki')
    expect(result).toEqual(`${url}/wiki/RTG`)
  })

  it('should properly append key to root with wiki domain', () => {
    const result = urlComposer('RTG', 'wiki')
    expect(result).toEqual(`${url}/wiki/RTG`)
  })

  it('should normalize keys that start with /', () => {
    const result = urlComposer('/RTG', 'wiki')
    expect(result).toEqual(`${url}/wiki/RTG`)
  })

  it('should properly append key to root with wiki root', () => {
    const result = urlComposer('/RTG', 'root')
    expect(result).toEqual(`${url}/RTG`)
  })
})
