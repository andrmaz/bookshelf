import {useLoaderData, useParams} from 'react-router-dom'
import {Book} from '../types/book-list'
import Layout from '../components/Layout'
import styled from 'styled-components'
import {Card} from '../components/Card'
import {decodeListName} from '../utils/book'

type Params = {
  list: string
}

export default function Books() {
  const {list} = useParams<Params>()
  const books = useLoaderData() as Book[]

  return (
    <Layout title={decodeListName(list)}>
      <Wrapper>
        {books.map(book => (
          <Card key={book.title} book={book} />
        ))}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.small};
  height: 100%;
  overflow-y: scroll;
  padding: ${p => p.theme.spacing.medium};
  width: 100%;
`
