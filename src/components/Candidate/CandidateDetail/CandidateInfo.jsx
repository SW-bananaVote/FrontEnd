import React, { useState, useEffect } from "react";
import Modal from "react-modal"; // react-modal 임포트
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
  GptButton,
} from "./CandidateInfoStyle";
import {
  ModalOverlay, // 공통 오버레이 스타일
  ModalContent, // 공통 모달 컨텐츠 스타일
  ModalTitle, // 첫 번째 Modal 타이틀
  ModalSubtitle, // 첫 번째 Modal 부제목
  ModalButton, // 공통 버튼 스타일
  ModalLoadingContainer, // 두 번째 Modal 로딩 컨테이너
  ModalExplanationContainer, // 두 번째 Modal 설명 컨테이너
  ModalParagraph, // 두 번째 Modal 텍스트 스타일
} from "./ModalStyle";
import { useParams, useNavigate } from "react-router-dom";

import minjuImg from "../../../assets/Candidate/PartyImg/더불어민주당.svg";
import gukhimImg from "../../../assets/Candidate/PartyImg/국민의힘.svg";
import noksakImg from "../../../assets/Candidate/PartyImg/녹색정의당.svg";
import saeroImg from "../../../assets/Candidate/PartyImg/새로운미래.png"; 
import gaehyukImg from "../../../assets/Candidate/PartyImg/개혁신당.png";
import defaultImg from "../../../assets/Candidate/PartyImg/무소속.svg";

import GptPending from "../../../assets/Pending/GPTpending.gif";

Modal.setAppElement("#root");

const CandidateInfo = () => {
  const { id } = useParams(); // URL에서 후보 ID를 가져옴
  const [candidate, setCandidate] = useState(null); // 후보 데이터
  const [sdName, setSdName] = useState(""); // 추가로 가져올 sdName 데이터
  const [promises, setPromises] = useState([]); // 공약 데이터
  const [isModalOpen, setIsModalOpen] = useState(false); // 공약 목록 모달 상태
  const [isExplanationModalOpen, setIsExplanationModalOpen] = useState(false); // 공약 설명 모달 상태
  const [selectedPromise, setSelectedPromise] = useState(""); // 클릭된 공약
  const [explanation, setExplanation] = useState(""); // AI로부터 받은 설명
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openExplanationModal = async (promise) => {
    setSelectedPromise(promise);
    setIsExplanationModalOpen(true);
    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `${candidate.name} 후보자의 ${promise} 공약에 대해 설명해줘. 3줄을 넘지 않아야하고, 아직 사회 경험이 없는 청소년 수준에서 알아들을 수 있도록 설명해줘 하지만 격식을 가지고 답변해줘`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch explanation from AI");
      }

      const data = await response.json();
      setExplanation(data.choices[0].message.content); // content 값을 설정
    } catch (error) {
      console.error("Error fetching explanation:", error);
      setExplanation("AI 설명을 가져오지 못했습니다.");
    } finally {
      setIsLoading(false); // 로딩 상태 종료
    }
  };

  const closeExplanationModal = () => {
    setIsExplanationModalOpen(false);
    setSelectedPromise("");
    setExplanation("");
    setIsLoading(false);
  };

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
                <ProfileSubTitle
                  key={index}
                  onClick={() => openExplanationModal(promise)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {promise}
                </ProfileSubTitle>
              ))
            ) : (
              <ProfileSubTitle>공약 데이터가 없습니다</ProfileSubTitle>
            )}
          </DetailContainer>
          <GptButton onClick={openModal}>AI 공약 설명</GptButton>
        </SecondBox>
      </SecondContainer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="AI 공약 설명"
        style={{
          overlay: ModalOverlay,
          content: {
            margin: "auto",
            width: "60%",
            height: "60%",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <ModalContent>
          <ModalTitle>용어가 어려운 공약을 AI에게 물어보세요</ModalTitle>
          <ModalSubtitle>공약을 클릭하면 AI가 해설해줍니다!</ModalSubtitle>
          <ModalButton onClick={closeModal}>닫기</ModalButton>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isExplanationModalOpen}
        onRequestClose={closeExplanationModal}
        contentLabel="공약 해설"
        style={{
          overlay: ModalOverlay,
          content: {
            margin: "auto",
            width: "60%",
            height: "60%",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <ModalContent>
          <ModalTitle>{selectedPromise}</ModalTitle>
          {isLoading ? (
            <ModalLoadingContainer>
              <img
                src={GptPending}
                alt="Loading..."
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              />
              <ModalParagraph>AI가 답변을 가져오고 있어요</ModalParagraph>
            </ModalLoadingContainer>
          ) : (
            <ModalExplanationContainer>
              <ModalParagraph>{explanation}</ModalParagraph>
            </ModalExplanationContainer>
          )}
          <ModalButton onClick={closeExplanationModal}>닫기</ModalButton>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CandidateInfo;
