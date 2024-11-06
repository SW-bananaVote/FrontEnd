// import pages
import Header from "../../components/Frame/Header/Header";
import Footer from "../../components/Frame/Footer/Footer";
import SignUpBox from "../../components/SignUp/SignUpBox";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

export default function SignUp() {
  return (
    <Container>
      <Header></Header>
      <SignUpBox></SignUpBox>
      <Footer></Footer>
    </Container>
  );
}