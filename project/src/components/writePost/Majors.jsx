import { SpecialtyBtn } from "../../components/userserch/SpecialtyBtn";
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
          <Content>
            <SpecialtyBtn text="Front-end" />
            <SpecialtyBtn text="Back-end" />
            <SpecialtyBtn text="iOS" />
            <SpecialtyBtn text="AOS" />
            <SpecialtyBtn text="DevOps" />
            <SpecialtyBtn text="Design" />
          </Content>
          <Content>
            <SpecialtyBtn text="Flutter" />
            <SpecialtyBtn text="정보보안" />
            <SpecialtyBtn text="embedded" />
            <SpecialtyBtn text="AI" />
          </Content>
        </StyledDiv>
      </Container>
    </>
  );
};

const Content = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledDiv = styled.div`
  width: 690px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
