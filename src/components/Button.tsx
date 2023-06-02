import styled from 'styled-components'

export const Button = (props: React.ComponentPropsWithoutRef<'button'>) => {
  return <Base {...props} />
}

const Base = styled.button`
  padding: ${p => p.theme.spacing.small};
  border-radius: ${p => p.theme.spacing['x-small']};
  font-size: small;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.background};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  &:disabled {
    /* TODO */
  }
`
