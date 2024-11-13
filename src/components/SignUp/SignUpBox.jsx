import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  SignUpInput,
  InputField,
  Label,
  InputWrapper,
  Input,
  KeywordText,
  KeywordsContainer,
  KeywordButton,
  ActionButtonsContainer,
  ConfirmButton,
  CancelButton
} from "./SignUpBoxStyle";


const SignUpBox = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nickname: '',
    id: '',
    password: '',
    confirmPassword: '',
  });
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const keywords = ['안보', '경제', '교육', '보건', '교통', '복지', '주거', '고용'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleKeyword = (keyword) => {
    setSelectedKeywords((prevSelected) => {
      if (prevSelected.includes(keyword)) {
        return prevSelected.filter((k) => k !== keyword);
      } else if (prevSelected.length >= 3) {
        alert("최대 3개의 키워드만 선택할 수 있습니다.");
        return prevSelected;
      } else {
        return [...prevSelected, keyword];
      }
    });
  };


  const handleSubmit = async () => {
    try {
      const response = await axios.post('localhost:8080/signup', {
        nickname: form.nickname,
        id: form.id,
        password: form.password,
      });
      console.log('회원가입 성공:', response.data);
      navigate('/');
      // 로그인 성공 후 추가 로직 (예: 토큰 저장, 리다이렉션 등)
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert("회원가입 실패. 다른 아이디를 사용해주세요.")
      setForm({
        nickname: '',
        id: '',
        password: '',
        confirmPassword: '',
      });    
      setSelectedKeywords([]);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Container>
      <Title href="/">Banana Vote</Title>
      <SignUpInput>
        <InputField>
          <InputWrapper>
            <Label>닉네임</Label>
            <Input
              type="text"
              name="nickname"
              value={form.nickname}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>아이디</Label>
            <Input
              type="text"
              name="id"
              value={form.id}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>패스워드</Label>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>패스워드 확인</Label>
            <Input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleInputChange}
            />
          </InputWrapper>
        </InputField>
        <KeywordText>관심있는 키워드를 3가지 골라주세요</KeywordText>
        <KeywordsContainer>
          {keywords.map((keyword) => (
            <KeywordButton
              key={keyword}
              selected={selectedKeywords.includes(keyword)}
              onClick={() => toggleKeyword(keyword)}
            >
              {keyword}
            </KeywordButton>
          ))}
        </KeywordsContainer>
        <ActionButtonsContainer>
          <ConfirmButton onClick={handleSubmit}>확인</ConfirmButton>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
        </ActionButtonsContainer>
      </SignUpInput>
    </Container>
  );
};

export default SignUpBox;
