import styled from "styled-components";

// 공통 Modal 스타일
export const ModalOverlay = {
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};

export const ModalContent = styled.div`
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 첫 번째 Modal 스타일
export const ModalTitle = styled.h1`
  font-size: 1.8em;
  margin-bottom: 45px;
  text-align: center;
`;

export const ModalSubtitle = styled.h3`
  font-size: 1.2em;
  text-align: center;
`;

// 버튼 스타일
export const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background-color: #6a8ef3;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: #5674d8;
  }
`;

// 두 번째 Modal 스타일
export const ModalLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ModalExplanationContainer = styled.div`
  width: 70%; /* 중앙에 70% 폭만 차지 */
  text-align: center; /* 텍스트 가운데 정렬 */
  margin: auto; /* 부모 컨테이너 내 수평 중앙 정렬 */
`;

export const ModalParagraph = styled.p`
  margin: 20px;
`;
