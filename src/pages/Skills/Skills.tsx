import styled from 'styled-components';

const SkillsContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary.main};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SkillCategory = styled.div`
  background: ${({ theme }) => theme.colors.background.light};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary.main};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Skills = () => {
  const skills = {
    'Laboratory Techniques': [
      'Microbial Culture and Identification',
      'PCR and Molecular Biology',
      'Antimicrobial Susceptibility Testing',
      'Microscopy and Staining Techniques'
    ],
    'Research Skills': [
      'Experimental Design',
      'Data Analysis',
      'Scientific Writing',
      'Literature Review'
    ],
    'Clinical Skills': [
      'Veterinary Diagnostics',
      'Disease Investigation',
      'Sample Collection',
      'Clinical Microbiology'
    ],
    'Software & Tools': [
      'Statistical Analysis Software',
      'Laboratory Information Systems',
      'Microsoft Office Suite',
      'Reference Management Tools'
    ]
  };

  return (
    <SkillsContainer>
      <Title>Skills & Expertise</Title>
      <SkillsGrid>
        {Object.entries(skills).map(([category, skillList]) => (
          <SkillCategory key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillList>
              {skillList.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills; 