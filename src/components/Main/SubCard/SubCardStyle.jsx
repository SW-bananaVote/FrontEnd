import styled from "styled-components";

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SubText = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-left: 250px;
  margin-top: 20px;
`;

export const SubBox = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  height: 300px;
  border: 5px solid #e9ebf8;
  border-radius: 20px;
  background-color: #e9ebf8;
  margin: 100px;

  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
  &:not(:hover) {
    transform: scale(1);
    transition-duration: 0.3s;
  }
`;

export const SubBoxText = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const SubBoxIcon = styled.img`
  position: absolute;
  top: 150px;
  left: 150px;
`;
