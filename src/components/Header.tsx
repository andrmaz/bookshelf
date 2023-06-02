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
  background-color: ${p => p.theme.colors.primary};
  border-bottom: 1px solid black;
  display: flex;
  height: 100px;
  isolation: isolate;
  position: sticky;
  width: 100%;
`
const Title = styled.h1`
  color: ${p => p.theme.colors.background};
  font-size: xx-large;
  margin: auto;
  text-transform: capitalize;
`
