import styled from 'styled-components';

// Footer 전체 컨테이너
export const FooterContainer = styled.footer`
  background-color: #6A8EF3; // 배경색
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

// 개발자 프로필 이미지 (예제용)
export const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white; // 예제 프로필 이미지 색상
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 50px;
`;

// 개발자 정보 텍스트 컨테이너
export const DeveloperInfo = styled.div`
  display: flex;
  align-items: center;
`;

// 저작권 텍스트
export const CopyrightText = styled.div`
  font-size: 12px;
  color: #e0e0e0;
  margin-top: 5px;
`;

// 후원 버튼 스타일
export const SupportButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #b3c1f2;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  
  &:hover {
    background-color: #a0b2e6;
  }
`;

// 추가
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 17px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;