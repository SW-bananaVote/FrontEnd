import styled from "styled-components";

export const VoteDetailContainer = styled.div`
  display: flex;
  padding: 0 0 2em 0;
  flex-direction: column;
  align-items: center;
`

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.4em solid #848484;
  width: 70%;
  margin: 0 0 1.5em 0;
  height: 100%;
  `

export const Title = styled.h1`
  text-align: center;
  padding: 0.5em 0;
  font-size: 1.5em;
  background-color: #848484;
  width: 100%;
  margin-top: 0;
`

export const Content = styled.div`
  white-space: pre-line;
  width: 90%;
  text-align: left;
  padding-bottom: 2em;
`

export const GoList = styled.button`
  width: 7vw;
  height: 4vh;
  border-radius: 5%;
  font-size: 1em;
  background-color: #6A8EF3;
  cursor: pointer;
`