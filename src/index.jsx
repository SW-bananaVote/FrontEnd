import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // page import
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp"
import VoteInfo from "./pages/VoteInfo/VoteInfo"
import VoteDetail from "./pages/VoteDetail/VoteDetail"
import News from "./pages/News/News"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/voteinfo" element={<VoteInfo />} />
        <Route path="/votedetail" element={<VoteDetail />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
