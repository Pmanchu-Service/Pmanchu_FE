import styled from "styled-components";
import { theme } from "../../style/theme";
import { Input } from "./Input";
import plus from "../../assets/signupImg/ic_round-plus.svg";

export const PlusInput = () => {
  return (
    <>
      <InputContainer>
        <Input
          text="기술스택"
          width="638px"
          height="40px"
          placeholder="기술 스택을 입력하세요"
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
