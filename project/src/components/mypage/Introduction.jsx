import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Introduction = ({ title }) => {
  return (
    <IntroContainer>
      <Title>{title}</Title>
      <Line />
    </IntroContainer>
  );
};

const Line = styled.hr`
  width: 100%;
  height: 2px;
  border: none;
  background-color: ${theme.color.gray[3]};
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: ${theme.color.main[4]};
`;

const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
