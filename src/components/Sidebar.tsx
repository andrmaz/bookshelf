import styled from 'styled-components'
import {listName} from '../data/book'
import {Link} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <Wrapper>
      <Title>Categories</Title>
      <List>
        {listName.map(list => (
          <Link to={`/books/${list[0]}`} key={list[0]}>
            {list[1]}
          </Link>
        ))}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  border-right: 1px solid black;
  height: 100%;
  margin-left: -25%;
  padding: ${p => p.theme.spacing.medium};
  position: fixed;
  width: 25%;
`
const Title = styled.h3`
  font-size: x-large;
  margin: ${p => p.theme.spacing.medium} 0;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.medium};
  text-transform: capitalize;
`
