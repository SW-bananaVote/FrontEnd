import { useLocation, useNavigate } from "react-router-dom";
import {
  VoteDetailContainer,
  DetailBox,
  Title,
  Content,
  GoList
} from "./VoteDetailBoxStyle"


const VoteDetailBox = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, content } = location.state || {};

  const handleGoList = () => {
    navigate("/voteinfo"); // /voteinfo로 이동
  };

  return (
    <VoteDetailContainer>
      <h1>공직선거제도</h1>
      <DetailBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </DetailBox>
      <GoList onClick={handleGoList}>목록</GoList>
    </VoteDetailContainer>
  );
}

export default VoteDetailBox;
