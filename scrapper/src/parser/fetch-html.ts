import axios, { AxiosError } from 'axios'

export async function fetchHTML (url: string): Promise<string> {
  // XXX: Axios will perform encodedURIComponent operation
  // if needed. This helps to handle the case when, for example,
  // "Medium_Fluid_&_Soil_Canister" should become "Medium_Fluid_%26_Soil_Canister".
  const result = await axios.get<string>(url).catch((e: AxiosError) => e)
  if ('isAxiosError' in result || result.status !== 200) {
    throw result
  }
  return result.data
}
