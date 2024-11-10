// import pages
import Header from "../../components/Frame/Header/Header";
import Footer from "../../components/Frame/Footer/Footer";
import VoteInfoBox from "../../components/VoteInfo/VoteInfoBox"
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
      <VoteInfoBox></VoteInfoBox>
      <Footer></Footer>
    </Container>
  );
}