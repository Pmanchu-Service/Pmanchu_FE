import React from 'react';
import styled from 'styled-components';

export const TagComponent = ({ text }) => {
  return (
    <Tag>
      {text}
    </Tag>
  );
};

const Tag = styled.div`
  padding: 8px 16px;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 0.5px solid #d8d8d8;
  margin-top: 10px;
`;
