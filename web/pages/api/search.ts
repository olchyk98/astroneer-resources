import { searchCachedArticles } from '@astroneer/scrapper'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Article } from '../../../types'

interface ErrorResponse {
  ok: false
  message: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | Article[]>,
) {
  const q = req.query?.['q']
  if (typeof q !== 'string') {
    res.status(400).json({ ok: false, message: '"q" query param is missing or has invalid type' })
    return
  }
  try {
    const articles = searchCachedArticles(q)
    res.status(200).json(articles)
  } catch (e) {
    console.log(`Could not perform the search operation: ${e}`)
  }
}
