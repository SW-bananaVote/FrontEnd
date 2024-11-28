import styled from "styled-components"

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  // border: 1px solid black;
`

export const NewsCategory = styled.p`
  font-weight: 500;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`

export const NewsLink = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5em;
  padding: 1em 1em 0 1em ;
`