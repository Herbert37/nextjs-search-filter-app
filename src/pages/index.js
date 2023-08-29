import React, { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from 'src/store/search'
import { UserCard } from 'src/components/UserCard'
const SearchForm = lazy(() => import('src/components/SearchForm'))

export default function Home() {
  const { itemsResponse } = useSelector((state) => ({
    itemsResponse: state.search.itemsResponse,
  }))
  const dispatch = useDispatch()

  const onGetItems = () => {
    dispatch(fetchItems())
  }

  useEffect(() => {
    onGetItems()
  }, [])

  return (
    <>
      <h1>HOME</h1>
      <SearchForm />
      {itemsResponse.map((item, index) => (
        <UserCard key={index} {...item} />
      ))}
    </>
  )
}
