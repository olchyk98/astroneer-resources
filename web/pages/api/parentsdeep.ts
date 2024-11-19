import type { NextApiRequest, NextApiResponse } from 'next'
import { ArticleWithRefs } from '@astroneer/types'
import { fetchParentsWithRefsForArticle } from '@astroneer/scrapper'

interface ErrorResponse {
  ok: false
  message: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | ArticleWithRefs>,
) {
  const key = req.query?.['key']
  if (typeof key !== 'string') {
    res.status(400).json({ ok: false, message: '"key" query param is missing or has invalid type' })
    return
  }
  const article = await fetchParentsWithRefsForArticle(key)
  res.status(200).json(article)
}
