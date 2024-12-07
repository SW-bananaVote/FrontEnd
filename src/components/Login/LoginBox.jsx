import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  LoginInput,
  Input,
  Button,
  Links,
  Link
} from "./LoginBoxStyle";

const LoginComponent = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!id.trim() || !password.trim()) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    const REACT_APP_BASE = process.env.REACT_APP_BASE;
    const url = `${REACT_APP_BASE}/user/login`;


    try {
      // 수정된 부분: 전송 데이터 확인을 위해 console.log 추가
      console.log('전송 데이터:', {
        userId: id,
        password: password,
      });

      const response = await axios.post(url, {
        userId: id,
        password: password,
      }, {
        headers: {
          // 수정된 부분: Content-Type 명시적으로 추가
          'Content-Type': 'application/json',
        },
      });

      console.log('로그인 성공:', response.data);
      console.log(response);
      const token = response.data;
      localStorage.setItem("accessToken", token); // 또는 쿠키에 저장
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.error("서버 응답 오류:", error.response.data);
      } else {
        console.error("네트워크 또는 기타 오류:", error.message);
      }
      alert("로그인 실패. 아이디 혹은 패스워드를 확인해주세요.");
      setId('');
      setPassword('');
    }
  };

  const openSmallTab = (kind) => {
    const url = kind; // 열려는 URL
    const windowName = "smallTab"; // 창 이름 (옵션)
    const width = 400, height = 400;
    // 브라우저의 뷰포트 크기 가져오기
    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;
    // 중앙 위치 계산
    const left = window.screenX + (browserWidth - width) / 2;
    const top = window.screenY + (browserHeight - height) / 2;
    const features = `width=${width},height=${height},top=${top},left=${left}`; // 창 크기와 위치 설정

    window.open(url, windowName, features);
  };


  return (
    <Container>
      <Title href="/">Banana Vote</Title>
      <LoginInput>
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit}>로그인</Button>
        <Links>
          <Link onClick={() => openSmallTab("/findID")}>아이디 찾기</Link>
          <Link onClick={() => openSmallTab("/findPS")}>비밀번호 찾기</Link>
          <Link href="/signup">회원가입</Link>
        </Links>

      </LoginInput>
    </Container>
  );
};

export default LoginComponent;