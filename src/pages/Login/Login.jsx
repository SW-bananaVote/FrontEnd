import styled from 'styled-components'
// page import
import Header from '../../components/Frame/Header/Header'
import Footer from '../../components/Frame/Footer/Footer'

const LoginContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 10% auto 10%;
`

const HeaderArea = styled.div`
  // background-color: red;  // 임시값
`
const ContentArea = styled.div`
  // background-color: blue; // 임시값
`
const FooterArea = styled.div`
  // background-color: purple; // 임시값
`

export default function Login() {
  return (
    <LoginContainer>
      <HeaderArea>
        <Header />
      </HeaderArea>
      <ContentArea>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
        <div>내용입니다.</div>
      </ContentArea>
      <FooterArea>

      </FooterArea>
    </LoginContainer>
  );
}