import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const Name = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const Credentials = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo to="/">
        <Name>Jocelyn Zambrano</Name>
        <Credentials>DVM, MSc</Credentials>
      </Logo>
      <NavLinks>
        <NavLink to="/">About Me</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/publications">Publications</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navigation; 