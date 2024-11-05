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
  LoginButton
} from "./HeaderStyle"

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleNewsClick = () => {
    window.location.href = "/news";
  };

  const handleCandidateClick = () => {
    window.location.href = "/candidate";
  };

  const handleVoteClick = () => {
    window.location.href = "/vote";
  };

  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  // 버튼 마다 링크를 해줘야함 href 같은거
  return (
    <HeaderContainer>
      <LogoArea>
        <LogoButton
          src={bv_logo}
          alt="Banana Vote Logo"
          onClick={handleLogoClick}
        />
      </LogoArea>
      <CategoryArea>
        <CategoryButton onClick={handleNewsClick}>
          뉴스
        </CategoryButton>
      </CategoryArea>
      <CategoryArea>
        <CategoryButton onClick={handleCandidateClick}>
          후보자 정보
        </CategoryButton>
      </CategoryArea>
      <CategoryArea>
        <CategoryButton onClick={handleVoteClick}>
          선거 정보
        </CategoryButton>
      </CategoryArea>
      <LoginButtonArea>
        <LoginButton onClick={handleLoginClick}>🔑 로그인</LoginButton>
      </LoginButtonArea>
    </HeaderContainer>
  );
}

export default Header;
