import styled from "styled-components";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";
import { StackInput } from "./StackInput";

export const Stack = () => {
  return (
    <>
      <Container>
        <Title>
          <StyledText>기술 스택</StyledText>
          <img src={star} alt="필수 입력" />
        </Title>
        <StackInput />
      </Container>
    </>
  );
};

const StyledText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
