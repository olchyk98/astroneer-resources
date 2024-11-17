import axios, { AxiosError } from 'axios'

export async function fetchHTML (url: string): Promise<string> {
  const result = await axios.get<string>(url).catch((e: AxiosError) => e)
  if ('isAxiosError' in result || result.status !== 200) {
    throw result
  }
  return result.data
}
