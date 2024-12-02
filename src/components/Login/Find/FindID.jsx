import React, { useState } from "react";
import axios from "axios";
import {
  FindContainer,
  FindForm,
  FindInput,
  FindButton
} from "./FindStyle";

const FindID = () => {
  const [email, setEmail] = useState("");
  const [foundID, setFoundID] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }

    try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE; // API의 기본 URL
      const response = await axios.post(`${REACT_APP_BASE}/user/find-id`, {
        email,
      });

      // 성공적으로 아이디를 찾았을 때
      setFoundID(response.data.id); // 서버에서 반환된 아이디
      setError(null);
    } catch (err) {
      // 실패했을 때 에러 메시지 설정
      setFoundID(null);
      setError(err.response?.data?.message || "아이디 찾기에 실패했습니다.");
    }
  };

  // 테스트용 버튼의 동작
  const handleTestFind = () => {
    setEmail("test@example.com"); // 테스트 이메일
    setFoundID("testUser123"); // 테스트 아이디
    setError(null); // 에러 초기화
  };

  return (
    <FindContainer>
      <h1>아이디 찾기</h1>
      <FindForm onSubmit={handleSubmit}>
        <label htmlFor="email">등록된 이메일</label>
        <FindInput
          type="email"
          id="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FindButton type="submit">아이디 찾기</FindButton>
      </FindForm>

      {/* 테스트용 버튼 */}
      <FindButton
        type="button"
        style={{ marginTop: "10px", backgroundColor: "gray" }}
        onClick={handleTestFind}
      >
        테스트 아이디 찾기
      </FindButton>

      {/* 결과 표시 */}
      {foundID && <p>회원님의 아이디는 <strong>{foundID}</strong>입니다.</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </FindContainer>
  );
};

export default FindID;
