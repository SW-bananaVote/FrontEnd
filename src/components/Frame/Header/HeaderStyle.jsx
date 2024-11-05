import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 150px;
  display: grid;
  grid-template-columns: 15.76% 22.83% 22.83% 22.83% 15.76%;
  border: none;
  // border-bottom: 2px solid gray;
`;
// logo
export const LogoArea = styled.div`
  // background-color: red;  // 임시값
  display: flex;
  justify-content: center; // 가로 중앙
  align-items: center; // 세로 중앙
  // border: 1px solid black;  // 임시값
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
  // background-color: skyblue;  // 임시값
  margin: 0 13% 0 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid black;  // 임시값
`;
export const CategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 80%;
  background-color: white; // 임시값
  cursor: pointer;
  border: none;
  border-bottom: 0.15rem solid gray;
  // font-size: 1.5rem;
  font-size: clamp(1rem, 1.3vw, 1.6rem); // 반응형 글자 크기 설정
  font-weight: bold;
  &:hover {
    background-color: #fafafa; // 호버 시 배경색
    border-bottom: 0.19rem solid #007bff;
    color: #007bff; // 호버 시 글자 색
    transform: scale(1.05); // 호버 시 살짝 크게
  }
`;
// category

// login
export const LoginButtonArea = styled.div`
  display: flex;
  // background-color: yellow;  // 임시값
  // border: 1px solid black;  // 임시값
  justify-content: center; // 가로 중앙
  align-items: center; // 세로 중앙
  padding-top: 1em;
`;

export const LoginButton = styled.button`
  width: clamp(3.5rem, 5.5vw, 5rem);
  height: clamp(1rem, 3.5vh, 2.5rem);
  background-color: #58acfa;
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