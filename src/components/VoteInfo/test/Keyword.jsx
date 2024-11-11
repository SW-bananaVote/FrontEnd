import React from 'react';
import styled from 'styled-components';

export const KeywordBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10%;  
`

// props = word, link
const Keyword = ({ word, link }) => {
  return (
    <KeywordBox href={link}>{word}</KeywordBox>
  );
}

export default Keyword;