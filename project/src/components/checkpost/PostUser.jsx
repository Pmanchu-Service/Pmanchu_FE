import React from 'react';
import styled from 'styled-components'; 
import { TagComponent } from '../checkpost/TagComponent';
import { ReactComponent as Heart } from '../../assets/projectformpage/heart-fill.svg'
import { PostList } from './PostList';
import { useState } from "react"
import { ReactComponent as  CategoryBtn } from "../../assets/mainpage/CategoryBtn.svg";
import { ReactComponent as  BottomArrow } from "../../assets/mainpage/bottomArrow.svg";
import { ReactComponent as WriteBtn } from "../../assets/projectformpage/Vector.svg";
import { ReactComponent as PenBtn } from "../../assets/projectformpage/pen.svg";
import { ReactComponent as TrashBtn } from "../../assets/projectformpage/trashcan.svg";

export const PostUser = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  return (
    <>
      {isAdmin ? (
        <StyledPostUser>
          <ProjectTitle>
            <ProfileAdd />
            <TextContainer>
              <TextContent>
                <MainText>큐피트 프로젝트</MainText>
                <ContentsContainer>
                  <SubText>황양변김박최이하</SubText>
                </ContentsContainer>
              </TextContent>
              <ImgContainer>
                <Heart />
              </ImgContainer>
            </TextContainer>
          </ProjectTitle>
          <hr />
          <Buttons>
            <PostList />
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
              <TagComponent text="Front-end" />
              <TagComponent text="Back-end" />
              <TagComponent text="IOS"/>
              <TagComponent text="AOS"/>
              <TagComponent text="DevOps"/>
              <TagComponent text="Design"/>
              <TagComponent text="Flutter"/>
              <TagComponent text="정보보안"/>
              <TagComponent text="embedded"/>
              <TagComponent text="AI"/>
            </TagsContainer>
          </Section>
          <Section>
            <SectionTitle>기술 스택</SectionTitle>
            <MajorTitle>Front-end</MajorTitle>
            <TagsContainer> 
              <TagComponent text="REACT" />
              <TagComponent text="REACT" />
              <TagComponent text="REACT" />
            </TagsContainer>
          </Section>
          <Section>
            <MajorTitle>Front-end</MajorTitle>
            <TagsContainer> 
              <TagComponent text="REACT" />
              <TagComponent text="REACT" />
              <TagComponent text="REACT" />
            </TagsContainer>
          </Section>
        </StyledPostUser>)
        : 
        (<>
        <MasProjectTitle>
          <MasProfileAdd />
          <MasTextContainer>
            <MasTextContent>
              <MasMainText>큐피트 프로젝트</MasMainText>
              <MasContentsContainer>
                <MasSubText>황양변김박최이하</MasSubText>
              </MasContentsContainer>
            </MasTextContent>
              <MasTitleButtons>
                <MasTitleBox>
                  <MasTitleButton>
                    보고서 작성<WriteBtn/>
                  </MasTitleButton>
                  <MasTitleButton>
                    수정<PenBtn/>
                  </MasTitleButton>
                  <MasTitleButton>
                    삭제
                    <TrashBtn/>
                  </MasTitleButton>
                  <MasImgContainer>
                    <Heart />
                  </MasImgContainer>
                </MasTitleBox>
              </MasTitleButtons>
          </MasTextContainer>
        </MasProjectTitle>
        <hr />
        <MasButtons>
          <MasButton>계획서 보기</MasButton>
          <MasButton>보고서 보기</MasButton>
          <MasApply>모집 마감하기</MasApply>
        </MasButtons>
        <MasSection>
          <MasSectionTitle>주제</MasSectionTitle>
          <MasWriting>큐피트 프로젝트는 사람들 사이의 사랑과 감정적 유대를 심층적으로 탐구하고 지원하는 창의적인 접근 방식을 제공합니다. 큐피트 프로젝트는 단순히 사랑을 성취하는 것을 넘어, 개인의 성장과 자아 발견을 촉진하며, 건강한 사회적 관계를 구축하는 데 기여하고자 합니다.</MasWriting>
        </MasSection>
        <MasSection>
          <MasSectionTitle>구상안</MasSectionTitle>
          <MasWriting>이 프로젝트는 개인 맞춤형 조언과 소셜 미디어 데이터를 기반으로 사랑을 이루는 데 필요한 다양한 도구와 정보를 제공합니다. 그리스 신화의 사랑의 신 큐피트처럼, 우리는 최신 기술과 데이터를 활용하여 사람들 간의 관계를 개선하고, 감정적 소통을 강화할 수 있는 방법을 모색합니다.</MasWriting>
        </MasSection>
        <MasSection>
          <MasSectionTitle>모집기간</MasSectionTitle>
          <MasWriting>2024.08.26 ~ 2024.08.26</MasWriting>
        </MasSection>
        <MasSection>
          <MasSectionTitle>프로젝트 기간</MasSectionTitle>
          <MasWriting>2024.08.26 ~ 2024.08.26</MasWriting>
        </MasSection>
        <MasSection>
          <MasSectionTitle>모집 전공</MasSectionTitle>
          <MasTagsContainer>
            <TagComponent text="Front-end" />
            <TagComponent text="Back-end" />
            <TagComponent text="IOS"/>
            <TagComponent text="AOS"/>
            <TagComponent text="DevOps"/>
            <TagComponent text="Design"/>
            <TagComponent text="Flutter"/>
            <TagComponent text="정보보안"/>
            <TagComponent text="embedded"/>
            <TagComponent text="AI"/>
          </MasTagsContainer>
        </MasSection>
        <MasSection>
          <MasSectionTitle>기술 스택</MasSectionTitle>
          <MasMajorTitle>Front-end</MasMajorTitle>
          <MasTagsContainer> 
            <TagComponent text="REACT" />
            <TagComponent text="REACT" />
            <TagComponent text="REACT" />
          </MasTagsContainer>
        </MasSection>
        <MasSection>
          <MasMajorTitle>Front-end</MasMajorTitle>
          <MasTagsContainer> 
            <TagComponent text="REACT" />
            <TagComponent text="REACT" />
            <TagComponent text="REACT" />
          </MasTagsContainer>
        </MasSection>
        </>)
        }
    </> 
  );
};

const StyledPostUser = styled.div`
  /* Add any styles specific to the container here */
`;

const ProjectTitle = styled.div`
  opacity: 90%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%; 
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 30px;
  width: 100%;
  justify-content: space-between;
`;

const TextContent = styled.div` 
  display: flex;
  flex-direction: column;
`;

const ProfileAdd = styled.div`
  display: flex;
  height: 150px;
  width: 200px;
  background-color: #B9B9B9;
`;

const MainText = styled.h1`
  font-size: 27px;
  margin: 0;
  color: #000;
  padding-bottom: 20px;
`;

const SubText = styled.h3`
  font-size: 20px;
  color: #000;
  gap: 10px;
`;

const ContentsContainer = styled.div`
  width: 60vw;
  display: flex;
`

const Writing = styled.span`
  font-size: 16px;
  width: 45vw; 
  display: flex;
  font-weight: 600;
`;

const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  &:last-child {
    padding: 0px 0px 50px 0px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: #FFBD22;
  padding-bottom: 15px;
`;

const MajorTitle = styled.h3`
  font-size: 20px;
  padding: 5px 0px 20px 0px;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;  
  padding-top: 20px;
  font-weight: 700;

  &:last-child {
    display: flex;
    float: right;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #FFBD22;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: 600;

  &:nth-child(3) {
    background-color: #B9B9B9;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  padding-top: 120px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 40%;
`;

const Apply = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  width: 20vw;
  background-color: #FFBD22;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  margin-left: auto;
`;

const MasProjectTitle = styled.div`
  opacity: 90%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%; 
`;

const MasProfileAdd = styled.div`
  display: flex;
  height: 150px;
  width: 200px;
  background-color: #B9B9B9;
`;

const MasMainText = styled.h1`
  font-size: 27px;
  margin: 0;
  color: #000;
  padding-bottom: 20px;
`;

const MasSubText = styled.h3`
  font-size: 20px;
  color: #000;
  gap: 10px;
`;

const MasContentsContainer = styled.div`
  display: flex;
`

const MasWriting = styled.span`
  font-size: 16px;
  width: 750px; 
  display: flex;
  font-weight: 600;
`;

const MasSection = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  &:last-child{
    padding: 0px 0px 50px 0px;
  }
`;

const MasSectionTitle = styled.h3`
  font-size: 20px;
  color: #FFBD22;
  padding-bottom: 15px;
`;

const MasMajorTitle = styled.h3`
  font-size: 20px;
  padding: 5px 0px 20px 0px;
`;

const MasTextContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: flex-start;
  padding-left: 30px;
  width: 100%;
  justify-content: space-between; 
`;

const MasTextContent = styled.div` 
  display: flex;
  flex-direction: column;
`;

const MasTitleButtons = styled.div`
  display: flex;
  align-items: center;
  padding-top: 65px;
`;

const MasTitleButton = styled.button`
  padding: 5px 12px 5px 12px;
  background-color: #FFBD22;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 80px;
  
  &:nth-child(1) {
    width: 120px;
    background-color: #B9B9B9;
  }
`;

const MasImgContainer = styled.div`
  padding-left: 10px;
`

const MasTitleBox = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 50px;
`

const MasButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  font-weight: 700;

  &:last-child{
    display: flex;
    float: right;
  }
`;

const MasButton = styled.button`
  padding: 12px 24px;
  background-color: #FFBD22;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: 600;

  &:nth-child(3) {
    background-color: #B9B9B9;
  }
`;

const MasButtonBox = styled.div`
  height: 40px;
  padding: 10px;
  background: #FFBD22;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const MasTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 40%;
`;

const MasApply = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  width: 20vw;
  background-color: #FFBD22;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  margin-left: auto;
`;