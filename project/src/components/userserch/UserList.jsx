import styled from 'styled-components';
import { theme } from '../../style/theme';
import { Button } from '../button/Button';
import React, { useState } from 'react';

export const UserList = React.memo(({ name, intro, type }) => {
  const [projectOffer, setProjectOffer] = useState(false);

  const projectOfferClick = () => {
    setProjectOffer(!projectOffer);
  };

  const userListType = {
    projectContain: projectOffer ? (
      <Button children={'제의 완료'} onClick={projectOfferClick} />
    ) : (
      <Button children={'프로젝트 제의'} onClick={projectOfferClick} />
    ),
    accept: (
      <IsAcceptContainer>
        <Button children={'수락'} isAccept={true} type="acceptLogo" />
        <Button children={'거절'} isAccept={false} type="acceptLogo" />
      </IsAcceptContainer>
    ),
  };
  return (
    <UserListContainer>
      <UserListAll>
        <UserImgContents>
          <ProfileImg />
          <UserContents>
            <Name>{name}</Name>
            <Intro>{intro}</Intro>
          </UserContents>
        </UserImgContents>
        {userListType[type]}
      </UserListAll>
      <Line />
    </UserListContainer>
  );
});

const IsAcceptContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.color.black};
`;

const Intro = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.gray[5]};
`;

const ProfileImg = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${theme.color.gray[3]};
`;

const UserContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const UserImgContents = styled.div`
  display: flex;
  gap: 12px;
`;

const UserListAll = styled.div`
  width: 520px;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 520px;
  border: none;
  height: 2px;
  background-color: ${theme.color.gray[2]};
`;
