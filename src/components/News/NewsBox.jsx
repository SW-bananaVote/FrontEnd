import styled from "styled-components";
import HotNews from "./AllNews/HotNews/HotNews";
import DayNews from "./AllNews/DayNews/DayNews";

const NewsBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NewsBox = () =>{
  return(
    <NewsBoxContainer>
      <HotNews/>
      <DayNews/>
    </NewsBoxContainer>
  );
}

export default NewsBox;