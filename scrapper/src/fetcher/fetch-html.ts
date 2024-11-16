import axios, { AxiosError } from 'axios'

export async function fetchHTML (url: string): Promise<string> {
  const result = await axios.get<string>(url).catch((e: AxiosError) => e)
  if ('isAxiosError' in result) {
    throw result
  }
  return result.data
}
