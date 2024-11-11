import styled from 'styled-components';

export const VoteBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`

export const KeywordContainer = styled.div`
  display: flex;
`
export const PageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`

export const PageMoveButton = styled.button`
  background-color: #6A8EF3;
  font-size: 1em;
  margin: 0 0.5em;
  border-radius: 5%;
  border: none;
  cursor: pointer;
`

export const PageNumberButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? 'gray' : 'white')};
  font-weight: ${({ isActive }) => (isActive ? '700' : '300')};
  font-size: 0.8em;
  margin: 0 0.3em;
  cursor: pointer;
  border: none;
  border-radius: 5%;
`