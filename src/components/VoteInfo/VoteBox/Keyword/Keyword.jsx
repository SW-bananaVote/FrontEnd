import React from 'react';
import { KeywordBox } from './KeywordStyle';

// props = word, link
const Keyword = ({ word, link }) => {
  return (
    <KeywordBox href={link}>{word}</KeywordBox>
  );
}

export default Keyword;