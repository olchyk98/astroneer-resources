import axios, { AxiosError } from 'axios'
import fs from 'fs'

export async function fetchHTML (url: string): Promise<string> {
  const result = await axios.get<string>(url).catch((e: AxiosError) => e)
  if ('isAxiosError' in result) {
    throw result
  }
  fs.writeFileSync('./output.html', result.data)
  return result.data
}
