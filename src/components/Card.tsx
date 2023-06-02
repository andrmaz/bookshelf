import styled from 'styled-components'
import {Book} from '../types/book-list'
import {Button} from './Button'
import {Form, useNavigation} from 'react-router-dom'

interface Props {
  book: Book
}

export const Card = ({book}: Props) => {
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const busy = navigation.formData?.get('book-title') === book.title
  const isAdding = busy && submitting

  return (
    <Wrapper>
      <Info>
        <Header>
          <Title>{book.title}</Title>
          <Author>
            <Term>Author: </Term>
            {book.author}
          </Author>
        </Header>
        <Description>{book.description}</Description>
        <Footer>
          <Publisher>
            <Term>Publisher: </Term>
            {book.publisher}
          </Publisher>
          <Form method='post' replace>
            <input type='hidden' name='book-title' value={book.title} />
            <Add type='submit' disabled={isAdding}>
              {isAdding ? 'Adding...' : 'Add to bookshelf'}
            </Add>
          </Form>
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
  background-color: ${p => p.theme.colors.background};
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
  position: relative;
`
const Header = styled.header`
  height: minmax(35%, 40%);
  margin-bottom: ${p => p.theme.spacing.medium};
`
const Title = styled.h3`
  font-size: large;
  font-weight: ${p => p.theme.weight.bold};
`
const Author = styled.h5`
  font-size: medium;
  font-weight: ${p => p.theme.weight.medium};
`
const Description = styled.p`
  font-size: small;
  font-weight: ${p => p.theme.weight.normal};
`
const Add = styled(Button)`
  position: absolute;
  bottom: ${p => p.theme.spacing.small};
  right: ${p => p.theme.spacing.small};
`
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: ${p => p.theme.spacing.medium};
`
const Publisher = styled.span`
  font-size: small;
  font-weight: ${p => p.theme.weight.medium};
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
const Term = styled.i`
  font-weight: ${p => p.theme.weight.normal};
`
