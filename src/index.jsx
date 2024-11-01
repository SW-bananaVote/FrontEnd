import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';// page import
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const RootContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
`

const CoreArea = styled.div`
  min-height: 100vh;
  // background-color: #F2F2F2;  // 임시값
`;

const BlankArea = styled.div`
  min-height: 100vh;
  // background-color: green;  // 임시값
`;

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <RootContainer>
        <BlankArea />
        <CoreArea>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />{/* 임시 사용중 */}
            {/* <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} /> */}
          </Routes>
        </CoreArea>
        <BlankArea />
      </RootContainer>
    </BrowserRouter>
  </React.StrictMode>
);