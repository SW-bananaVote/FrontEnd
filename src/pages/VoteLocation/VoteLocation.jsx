// import pages
import Header from "../../components/Frame/Header/Header";
import Footer from "../../components/Frame/Footer/Footer";
import VoteLocationBox from "../../components/VoteLocation/VoteLocationBox";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

export default function VoteLocation() {
  return (
    <Container>
      <Header></Header>
      <VoteLocationBox></VoteLocationBox>
      <Footer></Footer>
    </Container>
  );
}