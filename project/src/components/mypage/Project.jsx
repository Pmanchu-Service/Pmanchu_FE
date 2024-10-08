import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Project = ({ title, content }) => {
  return (
    <ProjectContainer>
      <ProjectImg />
      <ContentContainer>
        <Title>{title}</Title>
        <ProjectContents>{content}</ProjectContents>
      </ContentContainer>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  gap: 48px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectContents = styled.div`
  font-size: 18px;
  font-weight: 400;
  display: flex;
  flex-flow: wrap;
  width: 608px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

const ProjectImg = styled.div`
  width: 232px;
  height: 160px;
  background-color: ${theme.color.gray[4]};
`;
