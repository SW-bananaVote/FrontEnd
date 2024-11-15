import React from 'react';
import { KeywordBox } from './KeywordStyle';

// props = title, content
const Keyword = ({ title, content }) => {
  return (
    <KeywordBox to="/votedetail" state={{title, content}}>{title}</KeywordBox>
  );
}

export default Keyword;