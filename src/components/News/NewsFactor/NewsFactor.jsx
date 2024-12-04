import styled from "styled-components";

const FactorAnchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`

const FactorImg = styled.img`
  width: 20em;
  height: 13em;
  border: 2px solid gray;
  border-radius: 5%;
`

const FactorTitle = styled.p`
  font-size: 1.1em;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 18em;
`

const NewsFactor = ({ item }) => {
  return (
    <FactorAnchor href={item.url} target="_blank" rel="noopener noreferrer">
      <FactorImg
        src={item.imgUrl}
        alt="다음 뉴스 이미지"
      />
      <FactorTitle>
        {item.title}
      </FactorTitle>
    </FactorAnchor>
  );
}

export default NewsFactor;