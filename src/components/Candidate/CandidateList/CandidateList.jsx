import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  CandidateListContainer,
  CandidateCard,
  ProfileImage,
  PartyText,
  NameText,
  ViewButton,
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  SearchText,
  SearchBar,
} from "./CandidateListStyle";
import minjuImg from "../../../assets/Candidate/PartyImg/더불어민주당.svg";
import gukhimImg from "../../../assets/Candidate/PartyImg/국민의힘.svg";
import noksakImg from "../../../assets/Candidate/PartyImg/녹색정의당.svg";
import defaultImg from "../../../assets/Candidate/PartyImg/무소속.svg";
import traingleImg from "../../../assets/Candidate/triangle.svg";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]); // 전체 데이터
  const [visibleCandidates, setVisibleCandidates] = useState([]); // 화면에 표시되는 데이터
  const [page, setPage] = useState(1); // 현재 페이지
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지 여부
  const [party, setParty] = useState(""); // 정당 필터 상태
  const [wiwName, setWiwName] = useState(""); // 지역 필터 상태
  const [nameFilter, setNameFilter] = useState(""); // 이름 필터 상태
  const [isPartyOpen, setIsPartyOpen] = useState(false);
  const [isWiwNameOpen, setIsWiwNameOpen] = useState(false);
  const [uniqueParties, setUniqueParties] = useState([]); // 유니크한 정당 목록
  const [uniqueRegions, setUniqueRegions] = useState([]); // 유니크한 지역 목록

  const partyRef = useRef(null);
  const wiwNameRef = useRef(null);
  const loaderRef = useRef(null); // Intersection Observer 트리거
  const navigate = useNavigate();

  useEffect(() => {
    // API 호출
    const REACT_APP_BASE = process.env.REACT_APP_BASE;
    fetch(`${REACT_APP_BASE}/candidate/all`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setCandidates(data);

        // 정당 목록 생성 (유니크한 값만)
        const parties = [...new Set(data.map((candidate) => candidate.jdName))];
        setUniqueParties(parties);

        // 지역 목록 생성 (유니크한 값만)
        const regions = [
          ...new Set(data.map((candidate) => candidate.wiwName)),
        ];
        setUniqueRegions(regions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        partyRef.current &&
        !partyRef.current.contains(event.target) &&
        wiwNameRef.current &&
        !wiwNameRef.current.contains(event.target)
      ) {
        setIsPartyOpen(false);
        setIsWiwNameOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 필터 변경 시 데이터를 초기화하고 처음 24개 표시
  useEffect(() => {
    const filteredCandidates = candidates.filter((candidate) => {
      const matchesParty = party ? candidate.jdName === party : true;
      const matchesWiwName = wiwName ? candidate.wiwName === wiwName : true;
      const matchesName = nameFilter
        ? candidate.name.includes(nameFilter)
        : true;
      return matchesParty && matchesWiwName && matchesName;
    });

    setVisibleCandidates(filteredCandidates.slice(0, 24));
    setPage(1);
    setHasMore(filteredCandidates.length > 24);
  }, [party, wiwName, nameFilter, candidates]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore) {
          loadMoreCandidates();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loaderRef.current, page]);

  const loadMoreCandidates = () => {
    const startIndex = page * 24;
    const endIndex = startIndex + 24;
    const filteredCandidates = candidates.filter((candidate) => {
      const matchesParty = party ? candidate.jdName === party : true;
      const matchesWiwName = wiwName ? candidate.wiwName === wiwName : true;
      const matchesName = nameFilter
        ? candidate.name.includes(nameFilter)
        : true;
      return matchesParty && matchesWiwName && matchesName;
    });

    const newCandidates = filteredCandidates.slice(startIndex, endIndex);

    if (newCandidates.length > 0) {
      setVisibleCandidates((prev) => [...prev, ...newCandidates]);
      setPage((prev) => prev + 1);

      // 데이터가 더 이상 없으면 hasMore를 false로 설정
      if (endIndex >= filteredCandidates.length) {
        setHasMore(false);
      }
    }
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <div>
      <DropdownSection>
        {/* Party Dropdown */}
        <DropdownContainer ref={partyRef}>
          <DropdownButton
            isOpen={isPartyOpen}
            onClick={() => setIsPartyOpen(!isPartyOpen)}
          >
            {party || "정당"}
            <img src={traingleImg} alt="Toggle dropdown" />
          </DropdownButton>
          {isPartyOpen && (
            <DropdownMenu>
              <DropdownItem>
                <button onClick={() => setParty("")}>정당</button>
              </DropdownItem>
              {uniqueParties.map((partyName, index) => (
                <DropdownItem key={index}>
                  <button onClick={() => setParty(partyName)}>
                    {partyName}
                  </button>
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>

        {/* Region Dropdown */}
        <DropdownContainer ref={wiwNameRef}>
          <DropdownButton
            isOpen={isWiwNameOpen}
            onClick={() => setIsWiwNameOpen(!isWiwNameOpen)}
          >
            {wiwName || "지역"}
            <img src={traingleImg} alt="Toggle dropdown" />
          </DropdownButton>
          {isWiwNameOpen && (
            <DropdownMenu>
              <DropdownItem>
                <button onClick={() => setWiwName("")}>지역</button>
              </DropdownItem>
              {uniqueRegions.map((regionName, index) => (
                <DropdownItem key={index}>
                  <button onClick={() => setWiwName(regionName)}>
                    {regionName}
                  </button>
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
        <SearchBar
          type="text"
          placeholder="후보자 이름 검색"
          value={nameFilter}
          onChange={handleNameFilterChange} // 입력값 변경 시 상태 업데이트
        />
      </DropdownSection>
      <SearchText>
        {wiwName} {party} 후보자를 확인해보세요
      </SearchText>

      <CandidateListContainer>
        {visibleCandidates.map((candidate, index) => (
          <CandidateCard key={index}>
            <ProfileImage
              style={{
                backgroundImage: `url(${
                  candidate.jdName === "더불어민주당"
                    ? minjuImg
                    : candidate.jdName === "국민의힘"
                    ? gukhimImg
                    : candidate.jdName === "녹색정의당"
                    ? noksakImg
                    : defaultImg
                })`,
              }}
            />
            <PartyText>{candidate.jdName}</PartyText>
            <PartyText>{candidate.wiwName}</PartyText>
            <NameText>{candidate.name}</NameText>
            <ViewButton
              onClick={() => navigate(`/candidate/detail/${candidate.id}`)} // 상세 페이지로 이동
            >
              보러가기
            </ViewButton>
          </CandidateCard>
        ))}
      </CandidateListContainer>
      {hasMore && <div ref={loaderRef}>Loading more...</div>}
    </div>
  );
};

export default CandidateList;
