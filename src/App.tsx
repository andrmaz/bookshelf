import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <h1>Title</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4em;
  background: ${p => p.theme.colors.primary};
`

export default App
