import axios from 'axios'
import { ArticleWithRefs } from '@astroneer/types'

export async function fetchDeep (articleKey: string): Promise<ArticleWithRefs> {
  const r = await axios.get<ArticleWithRefs>(
    '/api/deep',
    { params: { key: articleKey } },
  )
  return r.data
}
