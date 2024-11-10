import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card'; // Card 컴포넌트를 import
import Pagination from './Pagination'; // 페이지네이션 컴포넌트를 import

const CardGrid = ({ items = [] }) => {  // items가 undefined일 때 빈 배열로 설정
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Container>
      <GridContainer>
        {currentItems.map((item, index) => (
          <Card key={index} title={item.title} />
        ))}
      </GridContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};


export default CardGrid;

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4열로 구성 */
  gap: 20px;
  margin-top: 20px;
`;
