import styled from "styled-components";

export const FindContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FindForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FindInput = styled.input`
  padding: 8px;
  font-size: 16px;
`

export const FindButton = styled.button`
  padding: 10px;
  background-color: #6a8ef3;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #557ac7;
  }
`