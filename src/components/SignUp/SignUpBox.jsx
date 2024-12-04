import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
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
  CancelButton,
  RowContainer,
  CheckButton,
  CheckBox,
  CheckP
} from "./SignUpBoxStyle";

const SignUpBox = () => {
  const [IDCheck, setIDCheck] = useState("*");
  const [PSCheck, setPSCheck] = useState("*");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nickname: '',
    email: '',
    id: '',
    password: '',
    confirmPassword: '',
  });
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const keywords = ['안보', '경제', '교육', '보건', '교통', '복지', '주거', '고용', '환경', '예술', '문화', '가족'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    // 아이디 입력값이 변경되면 check 상태 초기화
    if (name === "id") {
      setIDCheck("*");
    }

    // 비밀번호와 비밀번호 확인 값 비교
    if (name === "password" || name === "confirmPassword") {
      const password = name === "password" ? value : form.password;
      const confirmPassword = name === "confirmPassword" ? value : form.confirmPassword;

      if (password && confirmPassword) {
        setPSCheck(password === confirmPassword ? "일치" : "불일치");
      } else {
        setPSCheck("*");
      }
    }
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
    if (IDCheck !== "사용 가능") {
      alert("아이디 중복을 확인해주세요.");
      return;
    }

    if (PSCheck !== "일치") {
      alert("비밀번호를 확인해주세요.");
      return;
    }

    try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE;
      // {
      //   "nickname": "yshan",
      //   "email": "aszx4949@naver.com"
      //   "id": "yunsu0407",
      //   "password": "dbstn123",
      //   "keywords": ["교육", "교통", "교육"]
      // }
      const hashedPassword = await bcrypt.hash(form.password, 10);

      const requestData = {
        userId: form.id,
        hashedPassword: hashedPassword,
        nickname: form.nickname,
        email: form.email,
        interests: selectedKeywords.map((keyword) => ({
          userId: form.id,
          keyword: keyword,
        })),
      };

      const response = await axios.post(`${REACT_APP_BASE}/user/register`, requestData);

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

  const loginCheck = async () => {
    if (!form.id.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }

    try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE;
      const response = await fetch(`${REACT_APP_BASE}/user/${form.id}`);

      if (response.ok) {
        alert("사용 가능");
        setIDCheck("사용 가능");
        console.log(response);
      } else {
        setIDCheck("아이디 중복");
        alert("사용 불가능")
      }

    } catch (error) {
      alert("통신 오류");
      console.log("통신 오류");
      setIDCheck("통신 오류");
    }
  }

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
            <Label>이메일</Label>
            <Input
              type="text"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <RowContainer>
              <Label>아이디</Label>
              <CheckBox>
                <CheckP>{IDCheck}</CheckP>
                <CheckButton onClick={loginCheck}>중복 확인</CheckButton>
              </CheckBox>
            </RowContainer>
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
            <RowContainer>
              <Label>패스워드 확인</Label>
              <CheckBox>
                <CheckP>비밀번호 확인: {PSCheck}</CheckP>
              </CheckBox>
            </RowContainer>
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
