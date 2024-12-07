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
  const [isIDFound, setIsIDFound] = useState(false); // 아이디 찾기 성공 여부

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }

    try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE;
      const url = `${REACT_APP_BASE}/user/findId`;
      const response = await axios.post(url, {
        email: email,
      });

      // 성공적으로 아이디를 찾았을 때
      setFoundID(response.data); // 서버에서 반환된 아이디
      setError(null);
      setIsIDFound(true); // 아이디 찾기 성공 상태 업데이트
    } catch (err) {
      // 실패했을 때 에러 메시지 설정
      setFoundID(null);
      setError(err.response?.data?.message || "아이디 찾기에 실패했습니다.");
    }
  };

  return (
    <FindContainer>
      <h1>아이디 찾기</h1>
      {!isIDFound ? (
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
      ) : (
        <div>
          {foundID && <p>회원님의 아이디는 <strong>{foundID}</strong>입니다.</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

    </FindContainer>
  );
};

export default FindID;
