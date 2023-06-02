import {ActionFunction, json} from 'react-router-dom'
import {addToBookshelf} from '../utils/storage'

interface ActionData {
  errors?: {
    title?: string
  }
}

export const addAction: ActionFunction = async ({request}) => {
  const formData = await request.formData()
  const bookTitle = formData.get('book-title')
  if (typeof bookTitle !== 'string') {
    return json<ActionData>(
      {errors: {title: 'Invalid book title'}},
      {status: 400}
    )
  }
  await addToBookshelf(bookTitle)
  return null
}
