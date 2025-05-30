import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const Header = styled.header`
  background: ${({ theme }) => theme.colors.background.light};
  padding: ${({ theme }) => theme.spacing.md};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.background.light};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header>
        <Navigation />
      </Header>
      <Main>
        {children || <Outlet />}
      </Main>
      <Footer>
        <p>© {new Date().getFullYear()} Jocelyn Zambrano. All rights reserved.</p>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout; 