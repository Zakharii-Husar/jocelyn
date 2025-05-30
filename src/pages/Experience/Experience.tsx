import styled from 'styled-components';

const ExperienceContainer = styled.div`
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

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <Title>Experience & Education</Title>
      <Section>
        <SectionTitle>Work Experience</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>Education</SectionTitle>
      </Section>
    </ExperienceContainer>
  );
};

export default Experience; 