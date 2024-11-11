import CardGrid from "./CardGrid";
import VoteBox from "./test/VoteBox";

const VoteInfoBox = () => {

  // const items = [
  //   { title: '후보자 기호 결정' },
  //   { title: '예비후보자' },
  //   { title: '선거권' },
  //   { title: '피선거권' },
  //   { title: '[올바른 선거정보] 우편투표함 비치 관련' },
  //   { title: '[올바른 선거정보] 임시사무소 설치·운영' },
  //   { title: '[올바른 선거정보] 관외사전투표 회송용봉투 관리' },
  //   { title: '[올바른 선거정보] 개표일반' },
  //   { title: '[올바른 선거정보] 선거일 투표진행' },
  //   { title: '[올바른 선거정보] 선거일 투표용지' },
  //   { title: '[올바른 선거정보] 관내사전투표함 보관 등' },
  //   { title: '[올바른 선거정보] 사전투표 진행' },
  //   { title: '[올바른 선거정보] 투표지 보관 및 폐기' },
  //   { title: '거소투표' },
  //   { title: '[올바른 선거정보] 사전투표 및 개표 통신망보안' },
  // ];

  const props = [
    { word: '선거권', link: '/선거권' },
    { word: '피선거권', link: '/피선거권' },
    { word: '예비후보자', link: '/예비후보자'},
    { word: '거소투표', link: '/거소투표'},
    { word: '사전투표', link: './사전투표'}
  ];

  return (
    <VoteBox props={ props }></VoteBox>
    // <CardGrid items={items}></CardGrid>
  )
}

export default VoteInfoBox;