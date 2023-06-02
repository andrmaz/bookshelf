import styled from 'styled-components'
import {Book} from '../types/book-list'
import {Button} from './Button'

interface Props {
  book: Book
}

export const Card = ({book}: Props) => {
  return (
    <Wrapper>
      <Info>
        <Header>
          <Title>{book.title}</Title>
          <Author>
            <i>Author: </i>
            {book.author}
          </Author>
        </Header>
        <Description>{book.description}</Description>
        <Footer>
          <span>
            <i>Publisher: </i>
            {book.publisher}
          </span>
          <Button>Add to favorite</Button>
        </Footer>
      </Info>
      <Cover>
        <Image
          src={book.book_image}
          alt={`${book.title.toLowerCase()} cover`}
        />
      </Cover>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.spacing['x-small']};
  display: flex;
  height: fit-content;
  isolation: isolate;
  padding: ${p => p.theme.spacing.small};
  width: min(800px, 100%);
`
const Info = styled.div`
  flex: 1;
  padding: ${p => p.theme.spacing.small};
`
const Header = styled.header`
  height: minmax(35%, 40%);
  margin-bottom: ${p => p.theme.spacing.medium};
`
const Title = styled.h3`
  font-size: large;
`
const Author = styled.h5`
  font-size: medium;
`
const Description = styled.p``
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: ${p => p.theme.spacing.medium};
`
const Cover = styled.div`
  height: 350px;
  width: 300px;
`
const Image = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`
