import { BleData } from './../typings'
import { API_URL } from '../config'

interface GetDataResponse {
  error: string | null
  items: Array<BleData>
  totalCount: number
}

const getData = async (
  token: string,
  count: number,
  page: number,
): Promise<GetDataResponse> => {
  const response = await fetch(
    `${API_URL}/api/bledata/?count=${count}&page=${page}`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  )
  const data = await response.json()

  return { ...data }
}

export { getData }
