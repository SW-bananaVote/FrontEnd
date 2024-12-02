import { useState, useEffect } from "react";
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
    // 로그인 여부 확인 (예: localStorage에 토큰 확인)
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token); // 토큰이 있으면 true
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    window.location.href = "/";
  };
  return (
    <HeaderContainer>
      <LogoArea>
        <LogoButton
          src={bv_logo}
          alt="Banana Vote Logo"
          onClick={() => window.location.href = "/"}
        />
      </LogoArea>

      <CategoryArea>
        <CategoryButton onClick={() => window.location.href = "/news"}>
          뉴스
        </CategoryButton>


      </CategoryArea>

      <CategoryArea>
        <CategoryButton onClick={() => window.location.href = "/candidate"}>
          후보자 정보
        </CategoryButton>
      </CategoryArea>

      <CategoryArea>
        <CategoryButton onClick={() => window.location.href = "/voteinfo"}>
          선거 정보

        </CategoryButton>

        <DropDown>
          <DropDownLink to="/voteinfo">선거 정책</DropDownLink><br />
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

        {/* 테스트용 버튼 */}
        {!isLoggedIn && (
          <button
            onClick={() => {
              localStorage.setItem("accessToken", "testAccessToken");
              setIsLoggedIn(true);
            }}
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              backgroundColor: "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            🔑 테스트 로그인
          </button>
        )}
      </LoginButtonArea>
    </HeaderContainer>
  );
}

export default Header;
