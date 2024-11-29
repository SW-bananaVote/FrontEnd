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

    try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE;
      const response = await axios.post(`${REACT_APP_BASE}/user/login`, {
        id: id,
        password: password,
      });

      console.log('로그인 성공:', response.data);
      const { token } = response.data;
      localStorage.setItem("accessToken", token); // 또는 쿠키에 저장
      navigate('/');

    } catch (error) {
      console.error('로그인 실패:', error);
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