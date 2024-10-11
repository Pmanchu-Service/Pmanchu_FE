import React from 'react';
import styled from 'styled-components';

export const TagComponent = ( ) => {
  return (
    <Tag>
      test
    </Tag>
  );
};

const Tag = styled.button`
  padding: 8px 16px;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 0.5px solid #d8d8d8;
  margin-top: 10px;
`;
