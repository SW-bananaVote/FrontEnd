import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 40px 0;
  font-family: Arial, sans-serif;
`;

export const Title = styled.a`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
  cursor: pointer;
  text-decoration: none;  /* 밑줄 제거 */
  color: black;
`;


export const SignUpInput = styled.div`
  width: 500px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #f0f2fa;
  color: #333;
`;

// 키워드 선택 설명 텍스트 스타일
export const KeywordText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// 키워드 버튼 컨테이너
export const KeywordsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* 4개씩 2줄로 나눔 */
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const KeywordButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#a2b6f9' : '#e0e4f5')};
  color: #333;
  &:hover {
    background-color: #a2b6f9;
    color: white;
  }
`;

// 확인 및 취소 버튼 컨테이너
export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ConfirmButton = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #6A8EF3;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #4974f5;
  }
`;

export const CancelButton = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #c4c4c4;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #a1a1a1;
  }
`;