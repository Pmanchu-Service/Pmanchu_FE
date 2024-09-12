import styled from "styled-components";
import { SelectBtn } from "./../button/SelectBtn";
import { theme } from "../../style/theme";
import Arrow from "../../assets/selectArrow.svg";

export const HeadHuntingModal = () => {
  return (
    <>
      <ModalContainer>
        <Contents>
          <TitleContainer>
            <Title>프로젝트 제의</Title>
            <SubTitle>프로젝트를 선택하세요</SubTitle>
          </TitleContainer>
          <SubContents>
            <ProjectSelector>
              <option>프만추 프만추 프만추 프만추</option>
              <option>프만추 프만추 프만추 프만추</option>
              <option>프만추 프만추 프만추 프만추</option>
              <option>프만추 프만추 프만추 프만추</option>
              <option>프만추 프만추 프만추 프만추</option>
            </ProjectSelector>
            <SelectBtn />
          </SubContents>
        </Contents>
      </ModalContainer>
    </>
  );
};

const SubContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectSelector = styled.select`
  appearance: none; /* 기본 화살표 제거 */
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${Arrow}) no-repeat 95% 50%;
  width: 220px;
  height: 48px;
  border-radius: 7px;
  border: 2px ${theme.color.gray[5]} solid;
  padding: 0 34px 0 34px;
  font-size: 16px;
  font-weight: 600;
  &:not(:hover) {
    outline: none;
  }
  &:hover {
    outline: none;
  }
`;

const ModalContainer = styled.div`
  width: 560px;
  height: 320px;
  border-radius: 10px;
  background-color: ${theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
