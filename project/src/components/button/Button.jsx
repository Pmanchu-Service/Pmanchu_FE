import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { theme } from '../../style/theme';
import edit from '../../assets/mypageImg/edit.svg';

export const Button = ({ value }) => {
  const path = useLocation().pathname;

  return (
    <ButtonContainer>
      {true && path == '/mypage' && <img src={edit} alt="수정로고" />}
      {/*true일 땐 본인이 마이페이지 볼 때, false일 땐 타인이 다른 사람의 마이페이지를 볼 때*/}
      {value}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10.5px 12px;
  background-color: ${theme.color.main[2]};
  border: none;
  font-weight: 600;
  font-size: 16px;
  color: ${theme.color.white};
  border-radius: 4px;
  cursor: pointer;
`;
