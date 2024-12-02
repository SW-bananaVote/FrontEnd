import React, { useState } from "react";
import axios from "axios";
import { FindContainer, FindForm, FindInput, FindButton } from "./FindStyle";

const FindPS = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // 새 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false); // ID와 이메일이 확인되었는지 상태

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!id.trim() || !email.trim()) {
      alert("아이디와 이메일을 모두 입력해주세요.");
      return;
    }

    try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE;
      const response = await axios.post(`${REACT_APP_BASE}/user/verify`, {
        id,
        email,
      });

      setMessage(response.data.message || "사용자 확인이 완료되었습니다.");
      setIsVerified(true); // 확인 성공
      setError(null);
    } catch (err) {
      setMessage(null);
      setError(err.response?.data?.message || "사용자 확인에 실패했습니다.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("먼저 아이디와 이메일을 확인해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (password.length < 8) {
      alert("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE;
      const response = await axios.post(`${REACT_APP_BASE}/user/reset-password`, {
        id,
        email,
        password,
      });

      setMessage(response.data.message || "비밀번호가 성공적으로 변경되었습니다.");
      setError(null);
    } catch (err) {
      setMessage(null);
      setError(err.response?.data?.message || "비밀번호 변경에 실패했습니다.");
    }
  };

  return (
    <FindContainer>
      <h1>비밀번호 찾기</h1>

      {!isVerified ? (
        <FindForm onSubmit={handleVerify}>
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

          <FindButton type="submit">사용자 확인</FindButton>
          {/* 테스트용 버튼 */}
          <button
            type="button"
            onClick={() => setIsVerified(true)}
            style={{ marginTop: "10px", backgroundColor: "gray", color: "white" }}
          >
            테스트용: 인증 완료 상태로 전환
          </button>
        </FindForm>
      ) : (
        <FindForm onSubmit={handleSubmit}>
          <label htmlFor="password">새 비밀번호</label>
          <FindInput
            type="password"
            id="password"
            placeholder="새 비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <FindInput
            type="password"
            id="confirmPassword"
            placeholder="비밀번호를 다시 입력하세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <FindButton type="submit">비밀번호 변경</FindButton>
        </FindForm>
      )}

      {/* 결과 메시지 표시 */}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </FindContainer>
  );
};

export default FindPS;
