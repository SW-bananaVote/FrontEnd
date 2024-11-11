import React, { useState } from 'react';
import KeyWord from "../Keyword/Keyword"
import {
  VoteBoxContainer,
  KeywordContainer,
  PageButtonContainer,
  PageMoveButton,
  PageNumberButton
} from './VoteBoxStyle'

const ITEMS_PER_PAGE = 16;  // 4행 * 4열

const VoteBox = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  // 현재 페이지에 보여줄 아이템 계산
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  // 총 페이지 수 계산
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

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

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  }

  return (
    <VoteBoxContainer>
      {/* 아이템을 4행, 4열로 렌더링 */}
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <KeywordContainer key={rowIndex}>
          {currentItems.slice(rowIndex * 4, rowIndex * 4 + 4).map((item, index) => (
            <KeyWord key={index} word={item.word} link={item.link}></KeyWord>
          ))}
        </KeywordContainer>
      ))}

      {/* 페이지 네비게이션 */}
      <PageButtonContainer>
        <PageMoveButton onClick={goToPreviousPage} disabled={currentPage === 0}>
          {'<<'}
        </PageMoveButton>

        {/* 페이지 번호 표시 */}
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <PageNumberButton
            key={pageIndex}
            onClick={() => goToPage(pageIndex)}
            isActive={currentPage === pageIndex}
          >
            {pageIndex + 1}
          </PageNumberButton>
        ))}

        {/* 페이지 네비게이션 */}
        <PageMoveButton onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
          {'>>'}
        </PageMoveButton>
      </PageButtonContainer>
    </VoteBoxContainer>
  );
}

export default VoteBox;