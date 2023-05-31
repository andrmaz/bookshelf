import {createBrowserRouter, Navigate} from 'react-router-dom'
import App from './books'
import Book from './book'
import ErrorBoundary from '../components/ErrorBoundary'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/books' />,
  },
  {
    path: 'books',
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: 'books/:id',
    element: <Book />,
    errorElement: <ErrorBoundary />,
  },
])
