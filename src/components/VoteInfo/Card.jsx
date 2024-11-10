import React from 'react';
import styled from 'styled-components';

const Card = ({ title }) => (
  <CardContainer>
    <Title>{title}</Title>
  </CardContainer>
);

export default Card;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;
