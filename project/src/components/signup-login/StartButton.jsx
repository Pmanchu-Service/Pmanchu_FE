import { theme } from "../../style/theme";
import styled from "styled-components";

export const StartButton = () => {
  return (
    <>
      <StyledButton>시작하기</StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  border: none;
  color: ${theme.color.white};
  font-size: 32px;
  font-weight: 600;
  width: 690px;
  border-radius: 10px;
  background-color: ${theme.color.gray[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 0;
`;
