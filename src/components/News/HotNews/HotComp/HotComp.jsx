import { Link } from "react-router-dom";
import styled from "styled-components";

const HotCompContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  text-decoration: none;
  font-size: 0.7em;
  gap: 5vw;
`

const HotCompLink = styled(Link)`
  display: flex;
  flex-direction: column;
`

const HotCompImg = styled.img`
  width: 250px;
  height: 180px;
`

const HotComp = ({ imgUrl, imgSrc, imgTitle }) => {
  return (
    <HotCompContainer>
      <HotCompLink to={imgUrl}>
        <HotCompImg src={imgSrc} alt="다음 뉴스 이미지"></HotCompImg>
        <h3>{imgTitle}</h3>
      </HotCompLink>

      <HotCompLink to={imgUrl}>
        <HotCompImg src={imgSrc} alt="다음 뉴스 이미지"></HotCompImg>
        <h3>{imgTitle}</h3>
      </HotCompLink>

      <HotCompLink to={imgUrl}>
        <HotCompImg src={imgSrc} alt="다음 뉴스 이미지"></HotCompImg>
        <h3>{imgTitle}</h3>
      </HotCompLink>
    </HotCompContainer>

  );
}

HotComp.defaultProps = {
  imgUrl: "https://v.daum.net/v/0sb2eXDxzJ",
  imgSrc: "https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202411/16/yonhap/20241116135827186ekot.jpg",
  imgTitle: "프랑스 프로축구 명문 리옹, '빚더미'에 2부 강등 위기",
};

export default HotComp;