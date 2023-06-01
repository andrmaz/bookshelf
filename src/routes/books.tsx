import {useLoaderData} from 'react-router-dom'
import {Book} from '../types/book-list'

export default function Books() {
  const books = useLoaderData() as Book[]

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
