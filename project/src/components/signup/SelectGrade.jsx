import styled from "styled-components";
import { theme } from "../../style/theme";
import arrow from "../../assets/signup-loginImg/iconamoon_arrow-up-2-light.svg";
import star from "../../assets/signup-loginImg/mingcute_asterisk-fill.svg";

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
          <Option>10</Option>
          <Option>9</Option>
          <Option>8</Option>
          <Option>7</Option>
          <Option>6</Option>
          <Option>5</Option>
          <Option>4</Option>
          <Option>3</Option>
          <Option>2</Option>
          <Option>1</Option>
        </StyledSelect>
      </StyleDiv>
    </>
  );
};

const Option = styled.option`
  width: 344px;
  height: 24px;
  background-color: ${theme.color.white};
`;
const StyledOption = styled.option`
  ::placeholder {
    color: ${theme.color.gray[5]};
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
  gap: 8px;
`;