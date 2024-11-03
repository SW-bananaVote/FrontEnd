import React from "react";
import {
  SubBox,
  SubBoxIcon,
  SubBoxText,
  SubContainer,
  SubText,
} from "./SubCardStyle";
import news_image from "../../../assets/Main/news.png";
import goal_image from "../../../assets/Main/goal.png";
import check_image from "../../../assets/Main/check.png";

const SubCard = () => {
  return (
    <div>
      <SubText>
        바나나보트에서는<br></br> 이런 서비스를 <br></br> 이용하실 수 있어요!
      </SubText>
      <SubContainer>
        <SubBox>
          <SubBoxText>
            지역별 후보자 <br></br> 공약 확인
          </SubBoxText>
          <SubBoxIcon src={goal_image}></SubBoxIcon>
        </SubBox>
        <SubBox>
          <SubBoxText>
            진행 중인 <br></br> 선거 정보 확인
          </SubBoxText>
          <SubBoxIcon src={check_image}></SubBoxIcon>
        </SubBox>
        <SubBox>
          <SubBoxText>
            지역별 후보자 <br></br> 공약 확인
          </SubBoxText>
          <SubBoxIcon src={news_image}></SubBoxIcon>
        </SubBox>
      </SubContainer>
    </div>
  );
};

export default SubCard;
