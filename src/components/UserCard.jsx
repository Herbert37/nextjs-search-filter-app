import Link from 'next/link'

export const UserCard = ({ name, email, id }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <Link href={`/items/${id}`}>Detail</Link>
    </div>
  )
}
