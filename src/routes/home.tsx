import {useLoaderData} from 'react-router-dom'
import {Result} from '../types/best-sellers'

export default function Home() {
  const books = useLoaderData() as Result[]

  return (
    <ul>
      {books.map(book => (
        <li key={book.title}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </li>
      ))}
    </ul>
  )
}
