import styled from 'styled-components';
import transformationAnimation from '../../assets/style_images/transformation_animation.gif';

const AboutContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Row = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const AnimationColumn = styled.div`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Animation = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const TextColumn = styled.div`
  flex: 0 0 60%;
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary.main};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const ResearchColumn = styled.div`
  position: relative;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  &:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: -${({ theme }) => theme.spacing.md};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const ResearchItem = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.4;
`;

const About = () => {
  return (
    <AboutContainer>
      <Row>
        <AnimationColumn>
          <Animation src={transformationAnimation} alt="Transformation animation" />
        </AnimationColumn>
        <TextColumn>
          <Description>
            I'm a veterinarian and microbiologist passionate about protecting our water, wildlife, and communities. 
            With a background in clinical pathology and a focus on microbiology and microbial ecology, 
            I work to develop innovative methods to monitor aquatic ecosystems, as healthy water means 
            a healthier world for all of us.
          </Description>
        </TextColumn>
      </Row>
      <SectionTitle>Research Experience</SectionTitle>
      <ResearchGrid>
        <ResearchColumn>
          <ResearchItem>Next generation sequencing</ResearchItem>
        </ResearchColumn>
        <ResearchColumn>
          <ResearchItem>Water insecurity in Indigenous communities</ResearchItem>
        </ResearchColumn>
        <ResearchColumn>
          <ResearchItem>Targeted metagenomics</ResearchItem>
        </ResearchColumn>
      </ResearchGrid>
    </AboutContainer>
  );
};

export default About; 