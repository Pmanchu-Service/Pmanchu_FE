import styled from 'styled-components';
import { theme } from '../../style/theme';
import { useState } from 'react';

export const MemberApplicantToggle = ({ setIsSelected }) => {
  const [isToggle, setIsToggle] = useState('팀원');

  const toggleClick = (value) => {
    setIsToggle(value);
    value === '팀원' ? setIsSelected(false) : setIsSelected(true);
  };

  return (
    <>
      <>
        <ToggleContainer>
          <Button
            onClick={() => toggleClick('팀원')}
            isToggle={isToggle === '팀원'}
          >
            팀원
          </Button>
          <Button
            onClick={() => toggleClick('지원자')}
            isToggle={isToggle === '지원자'}
          >
            지원자
          </Button>
        </ToggleContainer>
      </>
    </>
  );
};

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isToggle ? theme.color.black : theme.color.white)};
  background-color: ${(props) =>
    props.isToggle ? theme.color.white : theme.color.main[3]};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 65px;
  gap: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isToggle ? theme.color.white : theme.color.main[3]};
`;

const Toggle = styled.div`
  position: absolute;
  width: 79px;
  height: 41px;
  border-radius: 4px;
  background-color: ${theme.color.white};
  left: 10px;
  transform: translateY(-50%);
  transition: all 0.4s;
`;
