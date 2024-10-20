import styled from "styled-components";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";
import tilde from "../../assets/writePostImg/mdi_tilde.svg";

export const Date = ({ text }) => {
  return (
    <>
      <Container>
        <Title>
          <StyledText>{text}</StyledText>
          <img src={star} alt="필수 입력" />
        </Title>
        <Section>
          <StyledCalendar type="date" />
          <StyledImg src={tilde} alt="물결표시" />
          <StyledCalendar type="date" />
        </Section>
      </Container>
    </>
  );
};

const Section = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;
const StyledImg = styled.img`
  width: 32px;
  height: 32px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 690px;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-start;
`;
const StyledText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const StyledCalendar = styled.input`
  width: 170px;
  height: 40px;
  padding: 11px 12px 10px;
  border-radius: 4px;
`;
