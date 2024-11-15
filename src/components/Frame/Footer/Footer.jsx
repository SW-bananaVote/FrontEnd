import React from 'react';
import {
  FooterContainer,
  DeveloperInfo,
  ProfileImage,
  CopyrightText,
  SupportButton
} from "./FooterSytle"

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
