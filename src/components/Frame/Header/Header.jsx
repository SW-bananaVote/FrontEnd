import styled from 'styled-components';
// asset import
import bv_logo from '../../../assets/bv_logo.png';

const HeaderContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 15.76% 22.83% 22.83% 22.83% 15.76%;
`
// logo
const LogoArea = styled.div`
  // background-color: red;  // 임시값
  display: flex;
  justify-content: center;  // 가로 중앙
  align-items: center;      // 세로 중앙
  // border: 1px solid black;  // 임시값

`
const LogoButton = styled.img`
  width: 50%;
  cursor: pointer;
  border: none;
  border-radius: 15px;
`
// logo

// category
const CategoryArea = styled.div`
  // background-color: skyblue;  // 임시값
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid black;  // 임시값
`
const CategoryButton = styled.button`
  height: 60%;
  width: 80%;
  background-color: white; // 임시값
  cursor: pointer;
  border: none;
  border-bottom: 4px solid gray;
  font-size: 1.5rem;
  font-weight: bold;
`
// category

// login
const LoginButtonArea = styled.div`
  // background-color: yellow;  // 임시값
  // border: 1px solid black;  // 임시값
`
// login




function Header() {
  const handleLogoClick = () => {
    window.location.href = "/main";
  }

  return (
    <HeaderContainer>
      <LogoArea>
        <LogoButton src={bv_logo} alt="Banana Vote Logo" onClick={handleLogoClick} />
      </LogoArea>
      <CategoryArea>
        <CategoryButton>뉴스</CategoryButton>
      </CategoryArea>
      <CategoryArea>
        <CategoryButton>사용자 정보</CategoryButton>
      </CategoryArea>
      <CategoryArea>
        <CategoryButton>선거 정보</CategoryButton>
      </CategoryArea>
      <LoginButtonArea></LoginButtonArea>
    </HeaderContainer>
  );
}

export default Header;