import styled from "styled-components";
import { theme } from "../../style/theme";
import arrow from "../../assets/signupImg/iconamoon_arrow-up-2-light.svg";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";

export const SelectGrade = () => {
  return (
    <>
      <StyleDiv>
        <Title>
          <StyledText>기수 선택</StyledText>
          <StyleImg src={star} />
        </Title>
        <StyledSelect>
          <StyledOption value="" disabled selected>
            기수를 선택하세요
          </StyledOption>
          <option>10</option>
          <option>9</option>
          <option>8</option>
          <option>7</option>
          <option>6</option>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </StyledSelect>
      </StyleDiv>
    </>
  );
};

const StyledOption = styled.option`
  ::placeholder {
    color: ${theme.color.gray[5]};
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 8px;
`;
const StyledText = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
const StyleImg = styled.img`
  width: 12px;
  height: 12px;
`;
const StyledSelect = styled.select`
  width: 344px;
  height: 40px;
  border: 1px solid ${theme.color.gray[2]};
  border-radius: 8px;
  background-color: ${theme.color.gray[1]};
  padding: 0 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  ::-ms-expand {
    display: none;
  }
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
`;
const StyleDiv = styled.div`
  width: 690px;
  height: 76px;
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;
