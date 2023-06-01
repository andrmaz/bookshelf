import {Params} from 'react-router-dom'
import {BestSellersData} from '../types/best-sellers'
import {BookListData} from '../types/book-list'
import {apiKey, apiUrl} from '../utils/env'

async function getBookList({signal}: Request) {
  const res = await fetch(
    `${apiUrl}/lists/best-sellers/history.json?api-key=${apiKey}`,
    {
      signal,
    }
  )
  const data: BestSellersData = await res.json()
  return data.results
}

async function getBooksByList({signal}: Request, params: Params<string>) {
  const res = await fetch(
    `${apiUrl}/lists/current/${params.list}.json?api-key=${apiKey}`,
    {
      signal,
    }
  )
  const data: BookListData = await res.json()
  return data.results.books
}

export {getBookList, getBooksByList}
