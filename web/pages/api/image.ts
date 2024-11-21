import axios from 'axios'
import type { Stream } from 'stream'
import type { NextApiRequest, NextApiResponse } from 'next'

interface ErrorResponse {
  ok: false
  message: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | unknown>,
) {
  const url = req.query?.['url']
  if (typeof url !== 'string') {
    res.status(400).json({ ok: false, message: '"url" query param is missing or has invalid type' })
    return
  }
  try {
    const response = await axios.get<Stream>(url, { responseType: 'stream' })
    res.setHeader('Content-Type', response.headers['content-type'])
    res.setHeader('Cache-Control', 'public, max-age=31536000')
    return response.data.pipe(res)
  } catch (e) {
    res.status(500).json({ ok: false, message: `Could not retrieve the remote resource: ${e}` })
    return
  }
}
