import styled from 'styled-components'
import {Sidebar} from './Sidebar'
import {Header, HeaderProps} from './Header'

export default function Layout({
  title,
  children,
}: React.PropsWithChildren<HeaderProps>) {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header title={title} />
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  margin-left: 25%;
  width: 75%;
`
const Container = styled.div`
  height: 100%;
  width: 100%;
`
const Content = styled.main`
  background-color: ${p => p.theme.colors.tertiary};
  height: 100%;
  width: 100%;
`
