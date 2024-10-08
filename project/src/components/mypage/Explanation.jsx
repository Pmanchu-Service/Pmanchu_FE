import styled from 'styled-components';
import dot from '../../assets/mypageImg/dot.svg';

export const Explanation = ({ value }) => {
  return (
    <>
      <ExContainer>
        <img src={dot} alt="점" />
        <Contents>{value}</Contents>
      </ExContainer>
    </>
  );
};
const ExContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Contents = styled.div`
  font-size: 24px;
  font-weight: 400;
`;
