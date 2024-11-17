import { useQuery } from '@tanstack/react-query'
import { useDebounce } from 'use-debounce'
import { useState } from 'react'
import axios from 'axios'
import { Article } from '../../../types'

export function useSearch () {
  const [ query, setQuery ] = useState('')
  const [ debouncedQuery ] = useDebounce(query, 900)
  const { isPending, error, data } = useQuery<Article[]>({
    queryKey: [ 'search', debouncedQuery ],
    async queryFn () {
      if (!debouncedQuery.trim()) return []
      return axios.get<Article[]>('/api/search', { params: { q: debouncedQuery } })
        .then((r) => r.data)
    },
  })

  return {
    isPending,
    setQuery,
    error,
    hits: data,
  }
}
