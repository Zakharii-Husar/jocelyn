import styled from 'styled-components';

interface InputProps {
  error?: boolean;
  fullWidth?: boolean;
}

const Input = styled.input<InputProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.primary.main};
  background: ${({ theme }) => theme.glassMorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassMorphism.backdropFilter};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.light};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}33;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Input; 