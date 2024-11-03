import React from "react";
import {
  TitleContainer,
  TitleImage,
  TitleSubText,
  TitleText,
} from "./TitleCardStyle";
import title_image from "../../../assets/Main/TitleImage.svg";

const TitleCard = () => {
  return (
    <div>
      <TitleContainer>
        <TitleImage alt="title" src={title_image}></TitleImage>
        <TitleText>쉽고 재밌는 선거, 바나나보트(VOTE)와 함께 </TitleText>
        <TitleSubText>
          바나나보트는 선거와 관련한 모든 정보를 한 눈에 찾아볼 수 있는 선거
          정보 올인원 서비스입니다 <br></br> 바나나보트에서 후보자 공약, 진행
          중인 선거 정보, 투표소 위치 등 다양한 정보를 확인하세요!
        </TitleSubText>
      </TitleContainer>
    </div>
  );
};

export default TitleCard;
