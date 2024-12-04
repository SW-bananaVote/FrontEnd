import React, { useState, useEffect } from "react";
import {
  ProfileContainer,
  ProfileImage,
  ProfileTitle,
  ProfileSubTitle,
  ProfileTitleContainer,
  SecondContainer,
  DetailContainer,
  SecondBox,
  CategoryText,
} from "./CandidateInfoStyle";
import { useParams, useNavigate } from "react-router-dom";

import minjuImg from "../../../assets/Candidate/PartyImg/더불어민주당.svg";
import gukhimImg from "../../../assets/Candidate/PartyImg/국민의힘.svg";
import noksakImg from "../../../assets/Candidate/PartyImg/녹색정의당.svg";
import saeroImg from "../../../assets/Candidate/PartyImg/새로운미래.png";
import gaehyukImg from "../../../assets/Candidate/PartyImg/개혁신당.png";
import defaultImg from "../../../assets/Candidate/PartyImg/무소속.svg";

const CandidateInfo = () => {
  const { id } = useParams(); // URL에서 후보 ID를 가져옴
  const [candidate, setCandidate] = useState(null); // 후보 데이터
  const [sdName, setSdName] = useState(""); // 추가로 가져올 sdName 데이터
  const [message, setMessage] = useState(""); // ChatGPT API에서 가져온 메시지
  const navigate = useNavigate(); // 목록으로 돌아가기 위해 사용

  useEffect(() => {
    const REACT_APP_BASE = process.env.REACT_APP_BASE;

    // 후보 정보 가져오기
    fetch(`${REACT_APP_BASE}/candidate/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched candidate data:", data);
        setCandidate(data);

        // wiwName으로 추가 요청 보내기
        if (data.wiwName) {
          fetch(`${REACT_APP_BASE}/district/wiwName/${data.wiwName}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((districtData) => {
              console.log("Fetched district data:", districtData);
              setSdName(districtData[0].sdName || "Unknown"); // sdName 저장
            })
            .catch((error) =>
              console.error("Error fetching district data:", error)
            );
        }

        // ChatGPT API로 공약 메시지 가져오기
        fetch(`/api/chat`, {
          //일단 임시로 꺼둠
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `This GPT provides the campaign promises of candidates running in the 22nd general election in South Korea. Users input a candidate's name, political party, and constituency, and the GPT searches for the information from reliable web sources. The response only lists campaign promises as a numbered array, e.g., ["1. Promise", "2. Promise"]. No additional information or explanations are provided. If no promises are found, the response will state: "No campaign promises found." The GPT will never fabricate data and ensures all information is accurate. ${data.name}`,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch message from ChatGPT API");
            }
            return response.json();
          })
          .then((chatResponse) => {
            console.log("ChatGPT response:", chatResponse);
            setMessage(chatResponse.message); // ChatGPT API의 응답 메시지 저장
          })
          .catch((error) =>
            console.error("Error fetching message from ChatGPT API:", error)
          );
      })
      .catch((error) => console.error("Error fetching candidate data:", error));
  }, [id]);

  if (!candidate) {
    return <p>Loading...</p>; // 데이터 로딩 중 표시
  }

  return (
    <div>
      <ProfileContainer>
        <ProfileImage
          style={{
            backgroundImage: `url(${
              candidate.jdName === "더불어민주당"
                ? minjuImg
                : candidate.jdName === "국민의힘"
                ? gukhimImg
                : candidate.jdName === "녹색정의당"
                ? noksakImg
                : candidate.jdName === "새로운미래"
                ? saeroImg
                : candidate.jdName === "개혁신당"
                ? gaehyukImg
                : defaultImg
            })`,
          }}
        />
        <ProfileTitleContainer>
          <ProfileTitle>{candidate.name}</ProfileTitle>
          <ProfileSubTitle>
            {candidate.jdName} {sdName} {candidate.wiwName}
          </ProfileSubTitle>
        </ProfileTitleContainer>
      </ProfileContainer>
      <SecondContainer>
        <SecondBox>
          <CategoryText>약력</CategoryText>
          <DetailContainer>
            <ProfileSubTitle>{candidate.career1}</ProfileSubTitle>
            <ProfileSubTitle>{candidate.career2}</ProfileSubTitle>
          </DetailContainer>
        </SecondBox>
        <SecondBox>
          <CategoryText>공약</CategoryText>
          <DetailContainer>
            <ProfileSubTitle>
              {message || "ChatGPT가 탐색하는 중..."}
            </ProfileSubTitle>
          </DetailContainer>
        </SecondBox>
      </SecondContainer>
    </div>
  );
};

export default CandidateInfo;
