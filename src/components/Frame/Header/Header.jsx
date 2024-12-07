import { useState, useEffect } from "react";
import axios from "axios";
// asset import
import bv_logo from "../../../assets/Header/bv_logo.png";
// styled-component import
import {
  HeaderContainer,
  LogoArea,
  LogoButton,
  CategoryArea,
  CategoryButton,
  LoginButtonArea,
  LoginButton,
  DropDown,
  DropDownLink
} from "./HeaderStyle"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // localStorage에서 토큰 확인
    const myToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!myToken); // 토큰이 존재하면 true
  }, []); // 빈 배열로 의존성을 설정, 컴포넌트 마운트 시 한 번만 실행

  const handleLogout = async () => {
    // 로그아웃 처리
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      console.error("Access token is missing.");
      return;
    }

    const REACT_APP_BASE = process.env.REACT_APP_BASE;
    const url = `${REACT_APP_BASE}/user/logout`;

    try {
      const response = await axios.post(url, { token: accessToken });

      if (response.status === 200) {
        alert("로그아웃 성공");
      } else {
        alert("비정상적 로그아웃");
      }

      localStorage.removeItem("accessToken");
      setIsLoggedIn(false);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
      alert("로그아웃 중 오류 발생");
    }
  };

  return (
    <HeaderContainer>
      <LogoArea>
        <LogoButton
          src={bv_logo}
          alt="Banana Vote Logo"
          onClick={() => (window.location.href = "/")}
        />
      </LogoArea>

      <CategoryArea>
        <CategoryButton onClick={() => (window.location.href = "/news")}>
          뉴스
        </CategoryButton>
      </CategoryArea>

      <CategoryArea>
        <CategoryButton onClick={() => (window.location.href = "/candidate")}>
          후보자 정보
        </CategoryButton>
      </CategoryArea>

      <CategoryArea>
        <CategoryButton onClick={() => (window.location.href = "/voteinfo")}>
          선거 정보
        </CategoryButton>

        <DropDown>
          <DropDownLink to="/voteinfo">선거 정책</DropDownLink>
          <br />
          <DropDownLink to="/votelocation">투표소 위치</DropDownLink>
        </DropDown>
      </CategoryArea>

      <LoginButtonArea>
        {isLoggedIn ? (
          <LoginButton onClick={handleLogout}>🔓 로그아웃</LoginButton>
        ) : (
          <LoginButton onClick={() => (window.location.href = "/login")}>
            🔑 로그인
          </LoginButton>
        )}
      </LoginButtonArea>
    </HeaderContainer>
  );
};

export default Header;
