import useSWR from 'swr'

import { fetcher } from '@/utils/helpers/fetcher.js'

const useCities = () => {
  const { data, isLoading, error } = useSWR(
    'http://localhost:3000/api/cities',
    fetcher
  )

  return { data, isLoading, error }
}

export default useCities
