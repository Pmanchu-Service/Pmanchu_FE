import styled from "styled-components";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";
import { TagComponent } from "../checkpost/TagComponent";
import { SpeInput } from "./SpeInput";

export const Stack = () => {
  return (
    <>
      <Container>
        <Title>
          <StyledText>기술 스택</StyledText>
          <img src={star} alt="필수 입력" />
        </Title>
        <StyledContent>
          <TagComponent text="front-end" />
          <SpeInput placeholder="스택을 입력하세요" />
        </StyledContent>
        <StyledContent>
          <TagComponent text="front-end" />
          <SpeInput placeholder="스택을 입력하세요" />
        </StyledContent>
      </Container>
    </>
  );
};

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;
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
  width: 690px;
`;
