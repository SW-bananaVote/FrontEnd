import Header from "../../components/Frame/Header/Header.jsx";
import Footer from "../../components/Frame/Footer/Footer.jsx";
import CandidateList from "../../components/Candidate/CandidateList/CandidateList.jsx";

export default function Candidate() {
  return (
    <div>
      <Header></Header>
      <CandidateList></CandidateList>
      <Footer></Footer>
    </div>
  );
}
