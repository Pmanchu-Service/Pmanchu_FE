import styled from 'styled-components';
import order from '../../assets/usersearchpageImg/order.svg';
import { theme } from '../../style/theme';
import { useState } from 'react';
import selectArrowImg from '../../assets/usersearchpageImg/selectarrow.svg';
import orderImg from '../../assets/usersearchpageImg/order.svg';

export const OrderList = () => {
  const [isOption, setIsOption] = useState(false);
  const [content, setContent] = useState('최신순');

  const selectClick = () => {
    setIsOption(!isOption);
  };
  const optionClick = (value) => {
    setIsOption(false);
    setContent(value);
  };

  return (
    <>
      <>
        <OrderListContainer>
          <SelectBtn onClick={selectClick}>
            <OrderImg src={orderImg} alt="select아이콘" />
            {content}
            <OrderImg src={selectArrowImg} alt="화살표" />
          </SelectBtn>
          {isOption && (
            <ListContainer>
              <ListContents onClick={() => optionClick('최신순')}>
                <OptionBtn>최신순</OptionBtn>
              </ListContents>
              <ListContents onClick={() => optionClick('프로젝트 많이 한 순')}>
                <OptionBtn>프로젝트 많이 한 순</OptionBtn>
              </ListContents>
            </ListContainer>
          )}
        </OrderListContainer>
      </>
    </>
  );
};

const OrderImg = styled.img`
  position: absolute;
  top: 8px;
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
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${theme.color.main[4]};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.white};
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

const ListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const ListContents = styled.li`
  width: 100%;
  display: flex;
`;

const OrderListContainer = styled.div`
  width: 179px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
