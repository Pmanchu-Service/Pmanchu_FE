import { styled } from 'styled-components';

export const Tags = () => {
  return (
  <>
    <Container>
      <Section>
        <SectionTitle>모집 전공</SectionTitle>
          <TagsContainer>
            <Tag>Front-end</Tag>
            <Tag>Back-end</Tag>
            <Tag>iOS</Tag>
            <Tag>AOS</Tag>
            <Tag>DevOps</Tag>
            <Tag>Design</Tag>
            <Tag>Flutter</Tag>
            <Tag>정보보안</Tag>
            <Tag>embedded</Tag>
            <Tag>AI</Tag>
          </TagsContainer>
      </Section>
      <Section>
        <SectionTitle>기술 스택</SectionTitle>
          <TagsContainer>
            <Tag>Front-end</Tag>
            <Tag>REACT</Tag>
            <Tag>REACT</Tag>
            <Tag>REACT</Tag>
          </TagsContainer>
          <TagsContainer>
            <Tag>Front-end</Tag>
            <Tag>REACT</Tag>
            <Tag>REACT</Tag>
            <Tag>REACT</Tag>
          </TagsContainer>
      </Section>
    </Container>
  </>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: #588D80;
  margin-bottom: 15px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 40%;
`;

const Tag = styled.div`
  padding: 8px 16px;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 0.5px solid #d8d8d8;
`;