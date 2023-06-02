import {useLoaderData} from 'react-router-dom'
import {Result} from '../types/best-sellers'
import {BestSeller} from '../components/BestSeller'
import styled from 'styled-components'
import Layout from '../components/Layout'

export default function Home() {
  const books = useLoaderData() as Result[]

  return (
    <Layout title='Best sellers'>
      <Wrapper>
        {books.map(book => (
          <BestSeller key={book.title} book={book} />
        ))}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  height: 100%;
  justify-items: center;
  gap: ${p => p.theme.spacing.small};
  overflow-y: scroll;
  padding: ${p => p.theme.spacing.medium};
  width: 100%;
`
