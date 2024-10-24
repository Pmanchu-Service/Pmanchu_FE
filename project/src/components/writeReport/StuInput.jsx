import { TinyInput } from "./TinyInput";
import { SpeInput } from "../writePost/SpeInput";
import styled from "styled-components";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";
import { theme } from "../../style/theme";

export const StuInput = () => {
  return (
    <>
      <Container>
        <Title>
          <Text>팀원 및 역할 </Text>
          <img src={star} alt="필수 입력" />
        </Title>
        <Content>
          <TinyInput placeholder="학번" />
          <TinyInput placeholder="이름" />
          <SpeInput placeholder="역할" />
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.black};
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Content = styled.div`
  width: 690px;
  display: flex;
  gap: 8px;
`;
