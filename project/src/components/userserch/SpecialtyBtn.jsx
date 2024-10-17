import styled from 'styled-components';
import { theme } from '../../style/theme';

export const SpecialtyBtn = ({ text, onClick, tagColor }) => {
  return (
    <>
      <BtnContainer onClick={onClick} tagColor={tagColor}>
        {text}
      </BtnContainer>
    </>
  );
};

const BtnContainer = styled.button`
  padding: 14px 22px;
  background-color: ${(props) =>
    props.tagColor ? theme.color.main[3] : theme.color.white};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => (props.tagColor ? theme.color.white : theme.color.black)};
  border: ${(props) =>
    props.tagColor
      ? `1px solid ${theme.color.main[3]}`
      : `1px solid ${theme.color.gray[4]}`};
  outline: none;
  cursor: pointer;
`;
