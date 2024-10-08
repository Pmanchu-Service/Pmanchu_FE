import styled from 'styled-components';
import link from '../../assets/mypageImg/link.svg';

export const Link = ({ value }) => {
  return (
    <LinkContainer>
      <img src={link} alt="링크 아이콘" />
      <LinkContents>{value}</LinkContents>
    </LinkContainer>
  );
};

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LinkContents = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
