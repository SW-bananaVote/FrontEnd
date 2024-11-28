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

export const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
  margin: 50px;
`;

// 드롭다운 버튼
export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  text-align: left;
  background-color: white;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  &:hover {
    border-color: #5a82f1;
  }

  img {
    width: 12px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.3s;
  }
`;

// 옵션 목록
export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  font-weight: bold;
`;

// 옵션 항목
export const DropdownItem = styled.li`
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    text-align: left;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #5a82f1;
      color: #fff;
    }

    ${({ isSelected }) =>
      isSelected &&
      `
      background-color: #f0e9ff; /* 선택된 항목 배경색 */
    `}
  }
`;

export const DropdownSection = styled.div`
  display: flex;
  margin-left: 280px;
  margin-top: 60px;
`;

export const SearchText = styled.div`
  font-size: 44px;
  color: #000;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 320px;
`;

export const SearchBar = styled.input`
  width: 200px;
  margin: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  text-align: center;
  background-color: white;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  &:hover {
    border-color: #5a82f1;
  }
`;
