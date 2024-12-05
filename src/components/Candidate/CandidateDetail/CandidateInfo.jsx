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
  PromiseContainer,
  GptButton,
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
  const [promises, setPromises] = useState([]); // 공약 데이터
  const navigate = useNavigate(); // 목록으로 돌아가기 위해 사용
  const REACT_APP_BASE = process.env.REACT_APP_BASE;

  useEffect(() => {
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
      })
      .catch((error) => console.error("Error fetching candidate data:", error));
  }, [id]);

  useEffect(() => {
    const fetchPromises = async () => {
      try {
        const response = await fetch("/DummyData/Candidate/Promise.json");
        const data = await response.json();

        // ID에 해당하는 공약만 필터링
        const candidatePromises = data.find(
          (item) => item.id === parseInt(id, 10)
        );
        if (candidatePromises) {
          setPromises(candidatePromises.promise);
        } else {
          setPromises([]);
        }
      } catch (error) {
        alert("공약 데이터를 불러오지 못했습니다.");
        console.error("Error fetching promises:", error);
      }
    };

    fetchPromises();
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
            {promises.length > 0 ? (
              promises.map((promise, index) => (
                <ProfileSubTitle key={index}>{promise}</ProfileSubTitle>
              ))
            ) : (
              <ProfileSubTitle>공약 데이터가 없습니다</ProfileSubTitle>
            )}
          </DetailContainer>
          <GptButton>AI 공약 설명</GptButton>
        </SecondBox>
      </SecondContainer>
    </div>
  );
};

export default CandidateInfo;
