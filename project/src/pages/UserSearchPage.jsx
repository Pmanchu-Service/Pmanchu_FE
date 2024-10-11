import styled from 'styled-components';
import { Header } from '../components/Header';
import { UserList } from '../components/userserch/UserList';
import { OrderList } from '../components/userserch/OrderList';

export const UserSearchPage = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <OrderList />
        </div>
        <UserListContainer>
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
        </UserListContainer>
      </div>
    </>
  );
};

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
