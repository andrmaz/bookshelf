import styled from 'styled-components'

export interface HeaderProps {
  title?: string
}

export const Header = ({title}: HeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  border-bottom: 1px solid black;
  display: flex;
  height: 100px;
  isolation: isolate;
  position: sticky;
  width: 100%;
`
const Title = styled.h1`
  font-size: xx-large;
  margin: auto;
  text-transform: capitalize;
`
