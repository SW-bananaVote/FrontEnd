import React, { useState } from 'react';
import styled from 'styled-components';
import KeyWord from "./Keyword"

const ITEMS_PER_PAGE = 12;  // 3행 * 4열

export const VoteContainer = styled.div`
  display: flex;
`

export const PageMoveButton = styled.button`
  background-color: skyblue;
`

const VoteBox = ({ props }) => {
  const [currentPage, setCurrentPage] = useState(0);
  // 현재 페이지에 보여줄 아이템 계산
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentItems = props.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  // 총 페이지 수 계산
  const totalPages = Math.ceil(props.length / ITEMS_PER_PAGE);

  // 페이지 이동 핸들러
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }
  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }


  return (
    <div>
      {/* 아이템을 3행, 4열로 렌더링 */}
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <VoteContainer key={rowIndex}>
          {currentItems.slice(rowIndex * 4, rowIndex * 4 + 4).map((item, index) => (
            <KeyWord key={index} word={item.word} link={item.link}></KeyWord>
          ))}
        </VoteContainer>
      ))}

      {/* 페이지 네비게이션 */}
      <div>
        <PageMoveButton onClick={goToPreviousPage} disabled={currentPage === 0}>
          {'<<'}
        </PageMoveButton>
        <PageMoveButton onClick={goToNextPage} disbaled = {currentPage === totalPages - 1}>
          {'>>'}
        </PageMoveButton>
      </div>
    </div>
  );
}

export default VoteBox;