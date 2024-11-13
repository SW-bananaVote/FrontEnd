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
    try {
      const response = await axios.post('localhost:8080/login', {
        id: id,
        password: password,
      });
      console.log('로그인 성공:', response.data);
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert("로그인 실패. 아이디 혹은 패스워드를 확인해주세요.");
      setId(''); 
      setPassword(''); 
    }
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
          <Link href="#">아이디 찾기</Link>
          <Link href="#">비밀번호 찾기</Link>
          <Link href="/signup">회원가입</Link>
        </Links>
      </LoginInput>
    </Container>
  );
};

export default LoginComponent;