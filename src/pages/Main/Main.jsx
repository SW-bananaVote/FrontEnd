import Header from "../../components/Frame/Header/Header.jsx";
import SubCard from "../../components/Main/SubCard/SubCard.jsx";
import { SubTitleText } from "../../components/Main/SubCard/SubCardStyle.jsx";
import TitleCard from "../../components/Main/TitleCard/TitleCard.jsx";

export default function Main() {
  return (
    <div>
      <Header></Header>
      <TitleCard></TitleCard>
      <SubCard></SubCard>
    </div>
  );
}
