import React from 'react';
import styled from 'styled-components';


export const TagComponent = ({ text }) => {
  return <Tag>{text}</Tag>;
};

const Tag = styled.button`
  padding: 14px 22px;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  border: 1px solid #b5b5b5;
`;
