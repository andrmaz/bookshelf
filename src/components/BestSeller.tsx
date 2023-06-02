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
        <Author>{book.author}</Author>
      </Header>
      <Description>{book.description}</Description>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.spacing['x-small']};
  height: 200px;
  padding: ${p => p.theme.spacing.small};
  width: 300px;
`
const Header = styled.header`
  height: minmax(35%, 40%);
`
const Title = styled.h3`
  font-size: large;
`
const Author = styled.h5`
  font-size: medium;
`
const Description = styled.p``
