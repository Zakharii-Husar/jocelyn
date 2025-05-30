import styled from 'styled-components';

const ResearchContainer = styled.div`
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

const Research = () => {
  return (
    <ResearchContainer>
      <Title>Research Areas</Title>
    </ResearchContainer>
  );
};

export default Research; 