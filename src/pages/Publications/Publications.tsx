import styled from 'styled-components';

const PublicationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Publications = () => {
  return (
    <PublicationsContainer>
      <Title>Publications</Title>
    </PublicationsContainer>
  );
};

export default Publications; 