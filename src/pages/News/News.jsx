// import pages
import Header from "../../components/Frame/Header/Header";
import Footer from "../../components/Frame/Footer/Footer";
import NewsBox from "../../components/News/NewsBox"
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

export default function VoteInfo() {
  return (
    <Container>
      <Header></Header>
      <NewsBox></NewsBox>
      <Footer></Footer>
    </Container>
  );
}