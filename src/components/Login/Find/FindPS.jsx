import React, { useState } from "react";
import axios from "axios";
import {
  FindContainer,
  FindForm,
  FindInput,
  FindButton
} from "./FindStyle";


const FindPS = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    if (!id.trim() || !email.trim()) {
      alert("아이디와 이메일을 모두 입력해주세요.");
      return;
    }

    try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE; // API의 기본 URL
      const response = await axios.post(`${REACT_APP_BASE}/user/find-password`, {
        id,
        email,
      });

      // 성공적으로 요청이 처리되었을 때
      setMessage(response.data.message || "비밀번호 재설정 링크가 이메일로 전송되었습니다.");
      setError(null);
    } catch (err) {
      // 실패했을 때 에러 메시지 설정
      setMessage(null);
      setError(err.response?.data?.message || "비밀번호 찾기에 실패했습니다.");
    }
  };

  return (
    <FindContainer>
      <h1>비밀번호 찾기</h1>
      <FindForm onSubmit={handleSubmit}>
        <label htmlFor="id">아이디</label>
        <FindInput
          type="text"
          id="id"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label htmlFor="email">이메일</label>
        <FindInput
          type="email"
          id="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FindButton type="submit">비밀번호 찾기</FindButton>
      </FindForm>

      {/* 결과 메시지 표시 */}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </FindContainer>
  );
};

export default FindPS;
