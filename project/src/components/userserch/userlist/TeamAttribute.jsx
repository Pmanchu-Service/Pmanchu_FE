import styled from 'styled-components';
import attribute from '../../../assets/viewpeople/attribute.svg';
import { useState } from 'react';
import { theme } from '../../../style/theme';

export const TeamAttribute = () => {
  const [isAttribute, setIsAttribute] = useState(false);

  const attributeClick = () => {
    setIsAttribute(!isAttribute);
  };

  return (
    <>
      <>
        <ImgFakeContainer>
          <AttributeImg
            src={attribute}
            alt="속성 이미지"
            onClick={attributeClick}
          />
        </ImgFakeContainer>
        {isAttribute && (
          <ListContainer>
            <ListContents onClick={attributeClick}>퇴출</ListContents>
            <ListLine />
            <ListContents onClick={attributeClick}>팀장 위임</ListContents>
          </ListContainer>
        )}
      </>
    </>
  );
};

const ImgFakeContainer = styled.div`
  width: 28px;
  height: 28px;
  position: relative;
`;

const AttributeImg = styled.img`
  cursor: pointer;
`;

const ListContents = styled.div`
  color: ${theme.color.gray[6]};
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: ${theme.color.main[5]};
    font-weight: 600;
  }
`;

const ListLine = styled.hr`
  width: 68px;
  height: 1px;
  border: none;
  background-color: ${theme.color.gray[6]};
`;

const ListContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 64px;
  border: 1px solid ${theme.color.gray[6]};
  border-radius: 4px;
  gap: 8px;
  background-color: ${theme.color.white};
  margin-left: 505px;
  margin-top: 30px;
`;
