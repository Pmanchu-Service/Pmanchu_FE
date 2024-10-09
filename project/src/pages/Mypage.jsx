import { styled } from 'styled-components';
import { theme } from '../style/theme';
import edit from '../assets/mypageImg/edit.svg';
import profile from '../assets/mypageImg/profile.svg';
import { Introduction } from '../components/mypage/Introduction';
import { Explanation } from '../components/mypage/Explanation';
import { Link } from '../components/mypage/Link';
import { Project } from '../components/mypage/Project';

export const Mypage = () => {
  return (
    <>
      <MypageContainer>
        <ProfileContainer>
          <EditContainer>
            <EditBtn>
              {true ? '수정' : '프로젝트 제의'}{' '}
              {/*true일 땐 본인이 마이페이지 볼 때, false일 땐 타인이 다른 사람의 마이페이지를 볼 때*/}
              {true && <img src={edit} alt="수정로고" />}
              {/*true일 땐 본인이 마이페이지 볼 때, false일 땐 타인이 다른 사람의 마이페이지를 볼 때*/}
            </EditBtn>
          </EditContainer>
          <ProfileAll>
            <img src={profile} alt="프로필 이미지" />
            <ProfileSubAll>
              <ProfileContents>프만이</ProfileContents>
              <ProfileLine />
              <ProfileContents>Front-end</ProfileContents>
            </ProfileSubAll>
          </ProfileAll>
        </ProfileContainer>
        <DescriptionContainer>
          <ContentsAll>
            <StackContainer>
              <Introduction title={'기술스택'} />
              <StackAllContents>
                <Explanation value={'REACT'} />
                <Explanation value={'REACT'} />
                <Explanation value={'REACT'} />
                <Explanation value={'REACT'} />
                <Explanation value={'REACT'} />
                <Explanation value={'REACT'} />
              </StackAllContents>
            </StackContainer>
            <IntroContainer>
              <Introduction title={'자기소개'} />
              <IntroductionSelf>
                안녕하세요~ 떵!개 입니다~ 오늘의 먹방은? 프로 젝트에 만두추가!
                프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가!
                프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가!
                프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가!
                프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가!
                프로젝트에 만두추가! 맛있게먹습니다~~~~~~~~
              </IntroductionSelf>
            </IntroContainer>
            <ContactContainer>
              <Introduction title={'연락처'} />
              <Explanation value={'ttoheeSohee@jibgaja.com'} />
            </ContactContainer>
            <LinkAllContainer>
              <Introduction title={'링크'} />
              <LinksAll>
                <Link value={'링크링크링크'} />
                <Link value={'링크링크링크'} />
              </LinksAll>
            </LinkAllContainer>
          </ContentsAll>
          <ProjectContainer>
            <ProjectSubContainer>
              <Introduction title="현재 진행중인 프로젝트" />
              <ProjectContents>
                <Project
                  title={'프만추'}
                  content={
                    '안녕하세요~ 떵!개 입니다~ 오늘의 먹방은? 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 맛있게먹습니다~~~~~~~~ '
                  }
                />
              </ProjectContents>
            </ProjectSubContainer>
            <ProjectSubContainer>
              <Introduction title={'완료된 프로젝트'} />
              <ProjectContents>
                <Project
                  title={'프만추'}
                  content={
                    '안녕하세요~ 떵!개 입니다~ 오늘의 먹방은? 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 맛있게먹습니다~~~~~~~~ '
                  }
                />
              </ProjectContents>
            </ProjectSubContainer>
            {/*true일 땐 본인이 마이페이지 볼 때, false일 땐 타인이 다른 사람의 마이페이지를 볼 때*/}
            {true && (
              <ProjectSubContainer>
                <Introduction title={'지원한 프로젝트'} />
                <ProjectContents>
                  <Project
                    title={'프만추'}
                    content={
                      '안녕하세요~ 떵!개 입니다~ 오늘의 먹방은? 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 맛있게먹습니다~~~~~~~~ '
                    }
                  />
                  <Project
                    title={'프만추'}
                    content={
                      '안녕하세요~ 떵!개 입니다~ 오늘의 먹방은? 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 프로젝트에 만두추가! 맛있게먹습니다~~~~~~~~ '
                    }
                  />
                </ProjectContents>
              </ProjectSubContainer>
            )}
          </ProjectContainer>
        </DescriptionContainer>
      </MypageContainer>
    </>
  );
};

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 88px;
  margin-bottom: 128px;
  justify-content: center;
  align-items: center;
`;

const ProjectSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ProjectContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 888px;
  gap: 60px;
`;

const LinkAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const LinksAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 18px;
`;

const ContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 500px;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const IntroductionSelf = styled.div`
  width: 500px;
  font-weight: 400;
  font-size: 24px;
  flex-flow: wrap;
`;

const StackContents = styled.div`
  display: flex;
  gap: 70px;
`;

const StackAllContents = styled.div`
  width: 500px;
  display: flex;
  gap: 20px 63px;
  flex-flow: wrap;
`;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const EditContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const ProfileAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const ProfileSubAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ProfileLine = styled.hr`
  border: none;
  height: 2px;
  width: 160px;
  background-color: ${theme.color.gray[3]};
`;

const ProfileContents = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

const EditBtn = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  /* width: 80px;
  height: 40px; */
  padding: 10.5px 12px;
  background-color: ${theme.color.main[2]};
  border: none;
  font-weight: 600;
  font-size: 16px;
  color: ${theme.color.white};
  border-radius: 4px;
  cursor: pointer;
`;
