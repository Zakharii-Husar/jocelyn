import styled from 'styled-components';

const ProjectsContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary.main};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary.main};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const ProjectDetails = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Projects = () => {
  const projects = [
    {
      title: 'Antimicrobial Resistance Study',
      description: 'Investigation of antimicrobial resistance patterns in veterinary clinical isolates.',
      details: 'Research Project • 2023'
    },
    {
      title: 'Microbiome Analysis',
      description: 'Characterization of microbial communities in animal health and disease.',
      details: 'Laboratory Study • 2022'
    },
    {
      title: 'Disease Surveillance',
      description: 'Development of surveillance protocols for emerging infectious diseases.',
      details: 'Field Study • 2021'
    }
  ];

  return (
    <ProjectsContainer>
      <Title>Research Projects</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectDetails>{project.details}</ProjectDetails>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects; 