import React from 'react';
import styled from 'styled-components';

// Footer 전체 컨테이너
const FooterContainer = styled.footer`
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
const ProfileImage = styled.div`
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
const DeveloperInfo = styled.div`
  display: flex;
  align-items: center;
`;

// 저작권 텍스트
const CopyrightText = styled.div`
  font-size: 12px;
  color: #e0e0e0;
  margin-top: 5px;
`;

// 후원 버튼 스타일
const SupportButton = styled.button`
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

const Footer = () => {
  return (
    <FooterContainer>
      <DeveloperInfo>
        <ProfileImage>🐤</ProfileImage>
        <div>
          <div>개발: 김준수, 이혜준, 한윤수, 한현규</div>
          <CopyrightText>
            이 콘텐츠의 제작권은 제작자 또는 제공자에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.
          </CopyrightText>
        </div>
      </DeveloperInfo>
      <SupportButton>
        🤍 개발자에게 후원
      </SupportButton>
    </FooterContainer>
  );
};

export default Footer;
