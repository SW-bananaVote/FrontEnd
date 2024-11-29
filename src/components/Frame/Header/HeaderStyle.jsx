import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 150px;
  display: grid;
  grid-template-columns: 15.76% 22.83% 22.83% 22.83% 15.76%;
  border: none;
`;
// logo
export const LogoArea = styled.div`
  display: flex;
  justify-content: center; // 가로 중앙
  align-items: center; // 세로 중앙
`;
export const LogoButton = styled.img`
  margin: 20px;
  width: 30%;
  cursor: pointer;
  border: none;
  border-radius: 15px;
`;
// logo

// category
export const CategoryArea = styled.div`
position: relative;
  display: inline-block;
  margin: 0 13% 0 13%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover div {
    display: block; /* 하위 DropDown div 표시 */
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 80%;
  background-color: white;
  cursor: pointer;
  border: none;
  border-bottom: 0.15rem solid gray;
  font-size: clamp(1rem, 1.3vw, 1.6rem); // 반응형 글자 크기 설정
  font-weight: bold;
  // &:hover {
  //   background-color: #fafafa; // 호버 시 배경색
  //   border-bottom: 0.19rem solid #007bff;
  //   color: #007bff; // 호버 시 글자 색
  //   transform: scale(1.05); // 호버 시 살짝 크게
  // }
`;

export const DropDown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  width: 80%;
  z-index: 100;
  background-color: white;
  padding-bottom: 1em;
  border-radius: 5%;
  border: 1px solid black;
`

export const DropDownLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 1em;
  color: black;
  text-decoration: none;
  font-size: 1.2em;
  &:hover{
    font-weight: 500;
  }
`

// category

// login
export const LoginButtonArea = styled.div`
  display: flex;
  justify-content: center; // 가로 중앙
  align-items: center; // 세로 중앙
  padding-top: 1em;
`;

export const LoginButton = styled.button`
  width: clamp(3.5rem, 5.5vw, 5rem);
  height: clamp(1rem, 3.5vh, 2.5rem);
  background-color: #6A8EF3;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-size: clamp(0.1rem, 0.8vw, 0.8rem); // 반응형 글자 크기 설정
  font-weight: bold;

  &:hover {
    background-color: #007bff; // 호버 시 배경색 변경
    transform: scale(1.05); // 살짝 확대
    box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.4); // 그림자 추가
  }
`;
// login