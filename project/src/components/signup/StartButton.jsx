import { theme } from "../../style/theme";
import styled from "styled-components";

export const StartButton = () => {
  return (
    <>
      <StyledDiv>
        <StyledButton>시작하기</StyledButton>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  width: 690px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: ${theme.color.gray[4]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  border: none;
  color: ${theme.color.white};
  font-size: 32px;
  font-weight: 600;
  background: none;
`;
