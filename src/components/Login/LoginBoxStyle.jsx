import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  font-family: Arial, sans-serif;
`;

export const Title = styled.a`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;  /* 밑줄 제거 */
  color: black;
`;

export const LoginInput = styled.div`
  width: 300px;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 93%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &::placeholder {
    color: #bbb;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6A8EF3;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #4974f5;
  }
`;

export const Links = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const Link = styled.a`
  color: #666;
  text-decoration: none;
  position: relative;
  padding: 0 8px;
  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: "|";
    position: absolute;
    right: -10px;
    color: #ccc;
  }

  &:last-child::after {
    content: "";
  }
`;
