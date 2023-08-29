import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function ItemsPage() {
  const { query } = useRouter()
  const id = query.slug
  return <h1>item detail {id}</h1>
}
