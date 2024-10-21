import React from 'react';
import styled from 'styled-components';


export const TagComponent = ({ text }) => {
  return <Tag>{text}</Tag>;
};

const Tag = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  border: 0.5px solid #d8d8d8;
`;
