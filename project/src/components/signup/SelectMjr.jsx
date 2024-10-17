import styled from "styled-components";
import star from "../../assets/signup-loginImg/mingcute_asterisk-fill.svg";
import { Checkbox } from "./Checkbox";

export const SelectMjr = () => {
  return (
    <>
      <Container>
        <Title>
          <StyledText>전공</StyledText>
          <StyledImg src={star} />
        </Title>
        <StyledDiv>
          <A>
            <Checkbox text="Back-end" />
            <Checkbox text="Front-end" />
            <Checkbox text="Flutter" />
            <Checkbox text="AOS" />
            <Checkbox text="DevOps" />
          </A>
          <A>
            <Checkbox text="디자인" />
            <Checkbox text="iOS" />
            <Checkbox text="임베디드" />
            <Checkbox text="정보보안" />
            <Checkbox text="AI" />
          </A>
        </StyledDiv>
      </Container>
    </>
  );
};

const A = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StyledDiv = styled.div`
  width: 400px;
  height: 204px;
  display: flex;
  flex-wrap: wrap;
  gap: 180px;
`;
const StyledImg = styled.img`
  width: 12px;
  height: 12px;
`;
const Title = styled.div`
  width: 44px;
  height: 28px;
  display: flex;
  margin-bottom: 12px;
`;
const StyledText = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
const Container = styled.div`
  width: 690px;
  height: 244px;
`;
