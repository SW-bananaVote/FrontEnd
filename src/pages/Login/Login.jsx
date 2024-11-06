// page import
import Header from '../../components/Frame/Header/Header';
import Footer from '../../components/Frame/Footer/Footer';
import LoginBox from '../../components/Login/LoginBox';

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

export default function Login() {
  return (
    <Container>
      <Header></Header>
      <LoginBox></LoginBox>
      <Footer></Footer>
    </Container>


    // <div>
    //   <Header></Header>
    //   <LoginBox></LoginBox>
    //   <Footer></Footer>
    // </div>
  );
}