import styled from 'styled-components'

export const Button = (props: React.ComponentPropsWithoutRef<'button'>) => {
  return <Base {...props} />
}

const Base = styled.button`
  background-color: ${p => p.theme.colors.action};
  box-shadow: 4px 4px ${p => p.theme.colors.backdrop};
  border-radius: ${p => p.theme.spacing['x-small']};
  color: ${p => p.theme.colors.foreground};
  cursor: pointer;
  font-size: small;
  padding: ${p => p.theme.spacing.small};
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.active};
    color: ${p => p.theme.colors.background};
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  &:disabled {
    background-color: ${p => p.theme.colors.disabled};
  }
`
