import styled from 'styled-components';
import { MemberApplicantToggle } from '../components/viewpeople/MemberApplicantToggle';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { theme } from '../style/theme';
import { UserList } from '../components/userserch/UserList';

export const ViewPeoplePage = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <ViewPeopleContainer>
        <Header />
        <ViewContents>
          <TitleContainer>
            <MemberApplicantToggle setIsSelected={setIsSelected} />
            <Line />
          </TitleContainer>
          <UserListContainer>
            {isSelected && (
              <>
                <UserList
                  type="accept"
                  name="sohee_ttohee"
                  intro="안녕하세요 떵깨"
                />
                <UserList
                  type="accept"
                  name="sohee_ttohee"
                  intro="안녕하세요 떵깨"
                />
                <UserList
                  type="accept"
                  name="sohee_ttohee"
                  intro="안녕하세요 떵깨"
                />
              </>
            )}
          </UserListContainer>
        </ViewContents>
      </ViewPeopleContainer>
    </>
  );
};

const ViewPeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const ViewContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 52px;
  justify-content: center;
  align-items: center;
`;

const Line = styled.hr`
  width: 1024px;
  height: 1px;
  border: none;
  background-color: ${theme.color.gray[2]};
`;
