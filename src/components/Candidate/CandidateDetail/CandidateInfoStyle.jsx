import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  display: flex;

  margin-bottom: 50px;
`;

export const ProfileImage = styled.div`
  width: 240px;
  height: 240px;
  background-size: contain; /* 이미지가 컨테이너에 맞게 축소/확대 */
  background-position: center; /* 중앙에 위치 */
  background-repeat: no-repeat; /* 반복 없음 */
  background-color: #eeeeee; /* 배경색 설정 */
  border-radius: 50%;

  margin-top: 50px;
  margin-left: 80px;
  margin-bottom: 50px;
`;

export const ProfileTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-left: 100px;
`;

export const ProfileTitle = styled.div`
  font-size: 56px;
  margin-bottom: 50px;
  font-weight: bold;
`;

export const ProfileSubTitle = styled.div`
  font-size: 27px;
  margin-bottom: 50px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 80%;

  margin-left: 100px;
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  background-color: #fff; /* 배경색 설정 */
`;
