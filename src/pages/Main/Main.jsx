import Header from "../../components/Frame/Header/Header.jsx";
import Footer from "../../components/Frame/Footer/Footer.jsx";
import SubCard from "../../components/Main/SubCard/SubCard.jsx";
import { SubTitleText } from "../../components/Main/SubCard/SubCardStyle.jsx";
import TitleCard from "../../components/Main/TitleCard/TitleCard.jsx";

export default function Main() {
  return (
    <div>
      <Header></Header>
      <TitleCard></TitleCard>
      <SubCard></SubCard>
      <Footer></Footer>
    </div>
  );
}
