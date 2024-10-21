import styled from "styled-components";
import { theme } from "../../style/theme";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";

export const SmallBtn = () => {
  return (
    <>
      <StyledContainer>
        <Button>계획서 작성하러 가기</Button>
        <img src={star} alt="필수 입력" />
      </StyledContainer>
    </>
  );
};

const Button = styled.button`
  height: 39px;
  padding: 10px 12px;
  background-color: ${theme.color.main[3]};
  color: ${theme.color.white};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const StyledContainer = styled.div`
  width: 690px;
  display: flex;
  align-items: flex-start;
`;
