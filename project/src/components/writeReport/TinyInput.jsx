import styled from "styled-components";
import { theme } from "../../style/theme";

export const TinyInput = ({ placeholder }) => {
  return (
    <>
      <StyledInput placeholder={placeholder} />
    </>
  );
};

const StyledInput = styled.input`
  width: 100px;
  height: 40px;
  padding: 11px 0 10px 12px;
  background-color: ${theme.color.gray[1]};
  border: 1px solid ${theme.color.gray[2]};
  border-radius: 8px;
  ::placeholder {
    color: ${theme.color.gray[5]};
  }
`;
