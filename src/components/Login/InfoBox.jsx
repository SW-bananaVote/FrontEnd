import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Title,
  LoginBox,
  Input,
  Button,
  Links,
  Link
} from "./InfoBoxStyle";

const LoginComponent = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('localhost:8080/login', {
        id: id,
        password: password,
      });
      console.log('로그인 성공:', response.data);
      // 로그인 성공 후 추가 로직 (예: 토큰 저장, 리다이렉션 등)
    } catch (error) {
      console.error('로그인 실패:', error);
      // 에러 처리 로직 추가 (예: 알림 표시)
    }
  };

  return (
    <Container>
      <Title href="/">Banana Vote</Title>
      <LoginBox>
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
          <Link href="#">아이디 찾기</Link>
          <Link href="#">비밀번호 찾기</Link>
          <Link href="#">회원가입</Link>
        </Links>
      </LoginBox>
    </Container>
  );
};

export default LoginComponent;