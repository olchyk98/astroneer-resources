import { useQuery } from '@tanstack/react-query'
import { useDebounce } from 'use-debounce'
import { useEffect, useState } from 'react'
import { Article } from '@astroneer/types'
import { search } from '../../request'
import { ViewStrategy } from '../../state'

export function useSearch () {
  const [ query, setQuery ] = useState('')
  const [ viewStrategy, setViewStrategy ] = useState<ViewStrategy>('recipe')
  const [ debouncedQuery ] = useDebounce(query, 300)
  const [ hits, setHits ] = useState<Article[]>([])
  const { isPending, error, data } = useQuery<Article[]>({
    queryKey: [ 'search', debouncedQuery ],
    async queryFn () {
      if (!debouncedQuery.trim()) return []
      return search(debouncedQuery)
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
    viewStrategy,
    setViewStrategy,
    query: debouncedQuery,
    error,
    hits,
  }
}
