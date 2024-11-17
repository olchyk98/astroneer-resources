import { useQuery } from '@tanstack/react-query'
import { useDebounce } from 'use-debounce'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Article } from '../../../types'

export function useSearch () {
  const [ query, setQuery ] = useState('')
  const [ debouncedQuery ] = useDebounce(query, 300)
  const [ hits, setHits ] = useState<Article[]>([])
  const { isPending, error, data } = useQuery<Article[]>({
    queryKey: [ 'search', debouncedQuery ],
    async queryFn () {
      if (!debouncedQuery.trim()) return []
      await new Promise((res) => setTimeout(() => res(undefined), 3000))
      return axios.get<Article[]>('/api/search', { params: { q: debouncedQuery } })
        .then((r) => r.data)
    },
  })

  // XXX: This dirty trick preserves the previous
  // state of "data" while the queryFn is
  // working (data is pending). This was done to
  // simulate deprecated "keepPreviousData" behaviour
  // from React Query.
  //
  // XXX: By doing this we can display
  // loading spinner on top of previous
  // results, which removes glitchy experience
  // when all items disappear, and then the spinner
  // appears. Previously, the container height
  // would jump a lot, since it's dependent on its
  // content.
  useEffect(() => {
    if (!isPending) {
      setHits(data ?? [])
    }
  }, [ data ])

  return {
    isPending,
    setQuery,
    query,
    error,
    hits,
  }
}
