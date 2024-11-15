// import pages
import Header from "../../components/Frame/Header/Header";
import Footer from "../../components/Frame/Footer/Footer";
import VoteDetailBox from "../../components/VoteDetail/VoteDetailBox"
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

export default function VoteInfoDetail() {
  return (
    <Container>
      <Header></Header>
      <VoteDetailBox></VoteDetailBox>
      <Footer></Footer>
    </Container>
  );
}