import styled from "styled-components";
import { theme } from "../../style/theme";
import { Input } from "./Input";
import plus from "../../assets/signupImg/ic_round-plus.svg";

export const PlusInput = (props) => {
  return (
    <>
      <InputContainer>
        <Input
          text={props.text}
          width="638px"
          height="40px"
          placeholder={props.placeholder}
        />
        <PlusBtn />
      </InputContainer>
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
`;
const PlusBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: ${theme.color.gray[4]};
  margin: 32px 0 0 12px;
  background-image: url(${plus});
  background-position: center center;
`;
