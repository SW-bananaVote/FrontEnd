import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

export const CalenderBox = styled.div`
  position: relative;
  display: inline-block;
`

const Calender = ({ selectedDate, onDateChange }) => {
  const maxDate = new Date(); // 날짜 선택을 오늘까지로 제한
  const nDate = 30; // 오늘부터 30일 이전까지만 조회
  const minDate = new Date(); // 이전 날짜 제한
  minDate.setDate(maxDate.getDate() - nDate); // 오늘로부터 n일전까지로 제한

  return (
    <CalenderBox>
      <DatePicker
      showIcon
      selected={selectedDate} // 부모 컴포넌트의 상태를 반영
      onChange={onDateChange} // 날짜 변경 시 부모 상태를 업데이트
      maxDate={maxDate}
      minDate={minDate}
    />
    </CalenderBox>
  );
}

export default Calender;