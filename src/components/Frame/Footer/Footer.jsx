import React, { useState } from "react";
import bv_qr from "../../../assets/Donation/bv_qr.png";
import {
  FooterContainer,
  DeveloperInfo,
  ProfileImage,
  CopyrightText,
  SupportButton,
  ModalOverlay,
  ModalContent,
  CloseButton
} from "./FooterSytle";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <SupportButton onClick={openModal}>
        🤍 개발자에게 후원
      </SupportButton>

      {/* 모달 창 */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: "black" }}>개발자에게 커피 한 잔</h2>
            <p style={{ color: "black" }}>아래의 QR 코드를 이용해 후원이 가능합니다.</p>
            <div style={{ textAlign: "center" }}>
              {/* QR 코드 이미지 또는 후원 링크 */}
              <img
                src={bv_qr}
                alt="후원 QR 코드"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </FooterContainer>
  );
};

export default Footer;
