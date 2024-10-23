import styled from 'styled-components';
import { theme } from '../../style/theme';
import { useState } from 'react';
import selectArrowImg from '../../assets/usersearchpageImg/selectarrow.svg';
import orderImg from '../../assets/usersearchpageImg/order.svg';

export const PostList = () => {
  const [isOption, setIsOption] = useState(true);
  const [content, setContent] = useState('모집중');

  const selectClick = () => {
    setIsOption(!isOption);
  };
  const optionClick = (value) => {
    setIsOption(false);
    setContent(value);
  };

  return (
    <OrderListContainer>
      <SelectBtn isOpen={isOption} onClick={selectClick}>
        {!isOption && <OrderImg src={orderImg} alt="select아이콘" />}
        {content}
        {!isOption && <OrderImg src={selectArrowImg} alt="화살표" />}
      </SelectBtn>
      {isOption && (
        <DropdownContainer>
          <ListContents onClick={() => optionClick('진행중')}>
            <OptionBtn>진행중</OptionBtn>
          </ListContents>
          <LastListContents onClick={() => optionClick('종료됨')}>
            <LastOptionBtn>종료됨</LastOptionBtn>
          </LastListContents>
        </DropdownContainer>
      )}
    </OrderListContainer>
  );
};

const OrderImg = styled.img`
  position: absolute;
  top: 10px;
  &:first-child {
    left: 8px;
  }
  &:nth-child(2) {
    right: 8px;
  }
`;

const SelectBtn = styled.button`
  position: relative;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${theme.color.main[4]};
  border-radius: ${props => props.isOpen ? '0' : '5px'};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.white};
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 0.5px;
    background-color: white;
  }
`;

const OptionBtn = styled.button`
  width: 100%;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  background-color: ${theme.color.main[4]};
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.white};
`;

const LastOptionBtn = styled.button`
  width: 100%;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  background-color: ${theme.color.main[4]};
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.white};
  border-bottom-left-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${theme.color.main[4]};
  z-index: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
`;

const ListContents = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 1px;
    background-color: white;
  }
`;

const LastListContents = styled(ListContents)`
  &::after {
    display: none;
  }
`;

const OrderListContainer = styled.div`
  width: 130px;
  position: relative;
`;