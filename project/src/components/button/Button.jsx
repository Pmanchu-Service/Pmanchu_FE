import styled from 'styled-components';
import { theme } from '../../style/theme';
import edit from '../../assets/mypageImg/edit.svg';
import rejectImg from '../../assets/usersearchpageImg/reject.svg';
import acceptImg from '../../assets/usersearchpageImg/accept.svg';

export const Button = ({ value, isAccept, type }) => {
  const buttonType = {
    editLogo: <img src={edit} alt="수정로고" />,
    acceptLogo: isAccept ? (
      <img src={acceptImg} alt="수락 아이콘" />
    ) : (
      <img src={rejectImg} alt="거절 아이콘" />
    ),
  };
  return (
    <ButtonContainer isAccept={isAccept}>
      {true && buttonType[type]}
      {/*true일 땐 본인이 마이페이지 볼 때, false일 땐 타인이 다른 사람의 마이페이지를 볼 때*/}
      {value}
      {buttonType[type]}
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
