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
        <LoginButton onClick={() => window.location.href = "/login"}>🔑 로그인</LoginButton>
      </LoginButtonArea>
    </HeaderContainer>
  );
}

export default Header;
