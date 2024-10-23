import styled from "styled-components";
import { Header } from "../components/Header";
import { theme } from "../style/theme";
import { Input } from "../components/signup/Input";
import { Textarea } from "../components/signup/Textarea";
import { BigBtn } from "../components/writePost/BigBtn";

export const WritePlan = () => {
  return (
    <>
      <PlanContainer>
        <Container>
          <Header />
          <Title>
            <Text>프로젝트 계획서</Text>
            <StyledHr />
          </Title>
        </Container>
        <Contents>
          <Sub>개요</Sub>
          <Input text="동기" placeholder="동기를 입력하세요" />
          <Textarea text="상세" placeholder="세부적인 내용을 입력하세요" />
          <Span>
            <Textarea text="기대효과" placeholder="기대효과를 입력하세요" />
            <Sub>진행 일정</Sub>
          </Span>
          <Container>
            <Textarea
              text="프로젝트 진행 계획"
              placeholder="진행 계획을 입력하세요"
            />
            <BigBtn text="완료" />
          </Container>
        </Contents>
      </PlanContainer>
    </>
  );
};

const Span = styled.span`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const Sub = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
  gap: 40px;
`;
const StyledHr = styled.div`
  width: 690px;
  height: 0;
  border: 2px solid ${theme.color.gray[3]};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;
const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 100px;
`;
const Text = styled.p`
  font-size: 32px;
  font-weight: 600;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
