import styled from "styled-components";

export const CandidateListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  justify-items: center;
  padding: 20px;
  margin-left: 260px;
  margin-right: 260px;
  margin-bottom: 100px;
`;

export const CandidateCard = styled.div`
  width: 220px;
  padding: 16px;
  margin-top: 20px;
  background-color: #e0e0e0;
  border-radius: 8px;
  text-align: center;
  justify-items: center;
`;

export const ProfileImage = styled.div`
  width: 110px;
  height: 110px;
  background-size: contain; /* 이미지가 컨테이너에 맞게 축소/확대 */
  background-position: center; /* 중앙에 위치 */
  background-repeat: no-repeat; /* 반복 없음 */
  background-color: #eeeeee; /* 배경색 설정 */
  border-radius: 50%;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PartyText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

export const NameText = styled.h3`
  font-size: 24px;
  color: #333;
  margin: 8px 0;
`;

export const ViewButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 20px;

  &:hover {
    background-color: #444;
  }
`;
