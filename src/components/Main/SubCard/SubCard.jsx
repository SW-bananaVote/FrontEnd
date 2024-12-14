import React from "react";
import {
  SubBox,
  SubBoxIcon,
  SubBoxStat,
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
            날짜별 <br></br>뉴스 확인
          </SubBoxText>
          <SubBoxIcon src={news_image}></SubBoxIcon>
        </SubBox>
      </SubContainer>
      <SubText>
        26.5%의 사용자가 <br></br>경제를 관심 있는 <br></br>키워드로 설정했어요!
      </SubText>
      <SubContainer>
        <SubBox>
          경제 26.5%
          <SubBoxText>1위</SubBoxText>
        </SubBox>
        <SubBox>
          안보 21.5%
          <SubBoxText>2위</SubBoxText>
        </SubBox>
        <SubBox>
          주거 17.2%
          <SubBoxText>3위</SubBoxText>
        </SubBox>
      </SubContainer>
    </div>
  );
};

export default SubCard;
