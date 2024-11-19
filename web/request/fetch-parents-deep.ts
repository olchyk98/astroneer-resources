import axios from 'axios'
import { ArticleWithRefs } from '@astroneer/types'

export async function fetchParentsDeep (articleKey: string): Promise<ArticleWithRefs> {
  const r = await axios.get<ArticleWithRefs>(
    '/api/parentsdeep',
    { params: { key: articleKey } },
  )
  return r.data
}
