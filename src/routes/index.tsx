import {Navigate, createBrowserRouter} from 'react-router-dom'
import Home from './home'
import Books from './books'
import ErrorBoundary from '../components/ErrorBoundary'
import {getBookList, getBooksByList} from '../api'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/books' />,
  },
  {
    path: '/books',
    element: <Home />,
    loader: async ({request}) => getBookList(request),
    errorElement: <ErrorBoundary />,
  },
  {
    path: 'books/:list',
    element: <Books />,
    loader: async ({request, params}) => getBooksByList(request, params),
    errorElement: <ErrorBoundary />,
  },
])
