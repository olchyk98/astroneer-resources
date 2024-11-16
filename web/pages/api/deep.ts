import { Node, fetchArticleByKeyDeep } from '@astroneer/scrapper'
import type { NextApiRequest, NextApiResponse } from 'next'

interface ErrorResponse {
  ok: false
  message: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | Node>,
) {
  const key = req.query?.['key']
  if (typeof key !== 'string') {
    res.status(400).json({ ok: false, message: '"key" query param is missing or has invalid type' })
    return
  }
  const article = await fetchArticleByKeyDeep(key)
  res.status(200).json(article)
}