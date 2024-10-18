import React from 'react';
import styled from 'styled-components'; 
import { TagComponent } from '../checkpost/TagComponent';

export const PostUser = () => {
  return (
    <>
        <ProjectTitle>
          <ProfileAdd />
          <TextContainer>
            <MainText>큐피트 프로젝트</MainText>
            <SubText>황양변김박최이하</SubText>
          </TextContainer>
        </ProjectTitle>
        <hr />
        <Buttons>
          <Button>모집중...</Button>
          <Button>계획서 보기</Button>
          <Button>보고서 보기</Button>
          <Apply>지원하기</Apply>
        </Buttons>
        <Section>
          <SectionTitle>주제</SectionTitle>
          <Writing>큐피트 프로젝트는 사람들 사이의 사랑과 감정적 유대를 심층적으로 탐구하고 지원하는 창의적인 접근 방식을 제공합니다. 큐피트 프로젝트는 단순히 사랑을 성취하는 것을 넘어, 개인의 성장과 자아 발견을 촉진하며, 건강한 사회적 관계를 구축하는 데 기여하고자 합니다.</Writing>
        </Section>
        <Section>
          <SectionTitle>구상안</SectionTitle>
          <Writing>이 프로젝트는 개인 맞춤형 조언과 소셜 미디어 데이터를 기반으로 사랑을 이루는 데 필요한 다양한 도구와 정보를 제공합니다. 그리스 신화의 사랑의 신 큐피트처럼, 우리는 최신 기술과 데이터를 활용하여 사람들 간의 관계를 개선하고, 감정적 소통을 강화할 수 있는 방법을 모색합니다.</Writing>
        </Section>
        <Section>
          <SectionTitle>모집기간</SectionTitle>
          <Writing>2024.08.26 ~ 2024.08.26</Writing>
        </Section>
        <Section>
          <SectionTitle>프로젝트 기간</SectionTitle>
          <Writing>2024.08.26 ~ 2024.08.26</Writing>
        </Section>
        <Section>
          <SectionTitle>모집 전공</SectionTitle>
          <TagsContainer>
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
            <TagComponent />
          </TagsContainer>
        </Section>
        <Section>
          <SectionTitle>기술 스택</SectionTitle>
          <TagsContainer>
            <TagComponent text="JavaScript" />
            <TagComponent text="React" />
            <TagComponent text="CSS" />
            <TagComponent text="HTML" />
          </TagsContainer>
          <TagsContainer>
            <TagComponent text="Node.js" />
            <TagComponent text="Express" />
            <TagComponent text="MongoDB" />
          </TagsContainer>
        </Section>
    </> 
  );
};

const ProjectTitle = styled.div`
  opacity: 90%;
  display: flex;
`;

const ProfileAdd = styled.div`
  width: 10vw;
  background-color: #B9B9B9;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 45px;
`;

const MainText = styled.h1`
  font-size: 25px;
  margin: 0;
  margin-top: 60px;
  color: #000;
`;

const SubText = styled.h3`
  font-size: 17px;
  color: #000;
`;

const Writing = styled.span`
  font-size: 16px;
  width: 45vw; 
  display: flex;
  font-weight: 500;
`;

const Section = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: #FFBD22;
  margin-bottom: 15px;
`;

const Buttons = styled.div``;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #FFBD22;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin-right: 15px;
  font-family: Pretendard;

  &:nth-child(3) {
    background-color: #B9B9B9;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 40%;
`;

const Apply = styled.button`
  left: 69.3vw; 
  float: right;
  position: fixed;
  padding: 10px 10px;
  width: 20vw;
  margin-top: 20px;
  background-color: #FFBD22;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
`;