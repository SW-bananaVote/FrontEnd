import React, { useState } from 'react';
import { 
  SearchBarContainer, 
  KeywordCount, 
  SelectBox, 
  SearchInput, 
  SearchButton 
} from "./SearchBarStyle"

const SearchBar = ({ onSearch, keywordCount }) => {
  const [searchType, setSearchType] = useState('title'); // 'title', 'content', 'title+content'
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchType, searchQuery); // 검색 유형과 검색어를 전달
  };

  return (
    <SearchBarContainer>
      <KeywordCount>총 {keywordCount}개</KeywordCount> {/* 개수 표시 */}
      <SelectBox value={searchType} onChange={handleSearchTypeChange}>
        <option value="title">제목</option>
        <option value="content">내용</option>
        <option value="title+content">제목+내용</option>
      </SelectBox>
      <SearchInput
        type="text"
        placeholder="검색어를 입력해주세요."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <SearchButton onClick={handleSearch}>검색</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
