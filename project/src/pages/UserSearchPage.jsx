import styled from 'styled-components';
import { Header } from '../components/Header';
import { UserList } from '../components/userserch/UserList';
import { OrderList } from '../components/userserch/OrderList';
import { SearchBar } from '../components/search/SearchBar';
import { useCallback, useState } from 'react';
import { SpecialtyBtn } from '../components/userserch/SpecialtyBtn';
import { theme } from '../style/theme';

export const UserSearchPage = () => {
  const [tagColor, setTagColor] = useState(Array(10).fill(false));
  // const [projectOffer, setProjectOffer] = useState(false);

  const tagClick = useCallback((index) => {
    setTagColor((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = !newColors[index];
      return newColors;
    });
  }, []);

  // const projectOfferClick = useCallback(() => {
  //   setProjectOffer(true);
  // }, []);

  return (
    <UserSearchContainer>
      <Header />
      <UserSearchContentsAll>
        <SearchContainer>
          <SearchBar />
          <OrderList />
        </SearchContainer>
        <UserSearchContents>
          <MajorContainer>
            <MajorTagContainer>
              <SpecialtyBtn
                text={'Front-end'}
                onClick={() => tagClick(0)}
                tagColor={tagColor[0]}
              />
              <SpecialtyBtn
                text={'Back-end'}
                onClick={() => tagClick(1)}
                tagColor={tagColor[1]}
              />
              <SpecialtyBtn
                text={'iOS'}
                onClick={() => tagClick(2)}
                tagColor={tagColor[2]}
              />
              <SpecialtyBtn
                text={'AOS'}
                onClick={() => tagClick(3)}
                tagColor={tagColor[3]}
              />
              <SpecialtyBtn
                text={'DevOps'}
                onClick={() => tagClick(4)}
                tagColor={tagColor[4]}
              />
              <SpecialtyBtn
                text={'Design'}
                onClick={() => tagClick(5)}
                tagColor={tagColor[5]}
              />
              <SpecialtyBtn
                text={'Flutter'}
                onClick={() => tagClick(6)}
                tagColor={tagColor[6]}
              />
              <SpecialtyBtn
                text={'정보보안'}
                onClick={() => tagClick(7)}
                tagColor={tagColor[7]}
              />
              <SpecialtyBtn
                text={'embedded'}
                onClick={() => tagClick(8)}
                tagColor={tagColor[8]}
              />
              <SpecialtyBtn
                text={'AI'}
                onClick={() => tagClick(9)}
                tagColor={tagColor[9]}
              />
            </MajorTagContainer>
            <Line />
          </MajorContainer>
          <UserListContainer>
            <UserProfile>
              <UserList
                type="projectContain"
                name={'sohee_ttohee'}
                intro={'안녕하세요 떵깨'}
              />
              <UserList
                type="projectContain"
                name={'sohee_ttohee'}
                intro={'안녕하세요 떵깨'}
              />
              <UserList
                type="projectContain"
                name={'sohee_ttohee'}
                intro={'안녕하세요 떵깨'}
              />
            </UserProfile>
          </UserListContainer>
        </UserSearchContents>
      </UserSearchContentsAll>
    </UserSearchContainer>
  );
};

const UserSearchContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const MajorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const UserSearchContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 140px;
  gap: 40px;
`;

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const SearchContainer = styled.div`
  display: flex;
  position: absolute;
  gap: 20px;
  left: 25%;
  top: 132px;
`;

const MajorTagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const UserSearchContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Line = styled.div`
  width: 1200px;
  border: none;
  height: 1px;
  background-color: ${theme.color.gray[3]};
`;
