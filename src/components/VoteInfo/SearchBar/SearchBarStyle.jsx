import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  background-color: #f3f3f3;
  padding: 1em;
  margin: 0 0 2em 0;
  border-radius: 5%;
  gap: 0.5em;
`;

export const KeywordCount = styled.div`
  padding-right: 20em;
  font-size: 1em;
  color: #333;
`;

export const SelectBox = styled.select`
  padding: 0.5em;
  border-radius: 6%;
  border: 1px solid #ccc;
`;

export const SearchInput = styled.input`
  padding: 0.5em;
  border-radius: 5%;
  border: 1px solid #ccc;
  flex: 1;
`;

export const SearchButton = styled.button`
  padding: 0.5em 1em;
  background-color: #4b5cc4;
  color: white;
  border: none;
  border-radius: 5%;
  cursor: pointer;
`;
