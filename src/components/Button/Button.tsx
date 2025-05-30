import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background: ${({ theme }) => theme.gradients.primary};
        color: ${({ theme }) => theme.colors.text.light};
        border: none;

        &:hover {
          opacity: 0.9;
        }
      `;
    case 'secondary':
      return css`
        background: ${({ theme }) => theme.glassMorphism.background};
        backdrop-filter: ${({ theme }) => theme.glassMorphism.backdropFilter};
        border: ${({ theme }) => theme.glassMorphism.border};
        color: ${({ theme }) => theme.colors.text.primary};

        &:hover {
          background: ${({ theme }) => theme.glassMorphism.background};
          opacity: 0.9;
        }
      `;
    case 'outline':
      return css`
        background: transparent;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.primary.main};

        &:hover {
          background: ${({ theme }) => theme.colors.primary.main};
          color: ${({ theme }) => theme.colors.text.light};
        }
      `;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
      `;
    case 'medium':
      return css`
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        font-size: ${({ theme }) => theme.typography.fontSize.md};
      `;
    case 'large':
      return css`
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
      `;
  }
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ variant = 'primary' }) => getVariantStyles(variant)}
  ${({ size = 'medium' }) => getSizeStyles(size)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button; 