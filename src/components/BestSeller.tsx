import styled from 'styled-components'
import {Result} from '../types/best-sellers'

interface Props {
  book: Result
}

export const BestSeller = ({book}: Props) => {
  return (
    <Wrapper>
      <Header>
        <Title>{book.title}</Title>
        <Author>
          <i>By</i> {book.author}
        </Author>
      </Header>
      <Description>{book.description}</Description>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.spacing['x-small']};
  height: 200px;
  padding: ${p => p.theme.spacing.small};
  width: 300px;
`
const Header = styled.header`
  height: minmax(35%, 40%);
  margin-bottom: ${p => p.theme.spacing.small};
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
