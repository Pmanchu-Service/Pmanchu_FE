import { theme } from "../../style/theme";
import styled from "styled-components";
import plus from "../../assets/signupImg/ic_round-plus.svg";

export const SpeInput = ({ placeholder }) => {
  return (
    <>
      <StyledContent>
        <StyledInput placeholder={placeholder} />
        <PlusBtn />
      </StyledContent>
    </>
  );
};

const StyledContent = styled.div`
  width: 690px;
  display: flex;
  gap: 12px;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: ${theme.color.gray[1]};
  border: 1px solid ${theme.color.gray[2]};
  padding-left: 12px;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: ${theme.color.gray[5]};
  }
`;
const PlusBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: ${theme.color.gray[4]};
  background-image: url(${plus});
  background-position: center center;
  cursor: pointer;
`;
