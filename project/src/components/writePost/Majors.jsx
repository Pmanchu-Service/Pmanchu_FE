import { TagComponent } from "../checkpost/TagComponent";
import styled from "styled-components";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";

export const Majors = () => {
  return (
    <>
      <Container>
        <Title>
          <Text>모집 전공</Text>
          <img src={star} alt="필수 입력" />
        </Title>
        <StyledDiv>
          <TagComponent text="front-end" />
        </StyledDiv>
      </Container>
    </>
  );
};

const StyledDiv = styled.div`
  width: 690px;
  display: flex;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-start;
`;
