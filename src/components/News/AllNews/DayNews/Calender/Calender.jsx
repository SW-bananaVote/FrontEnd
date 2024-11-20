import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

export const CalenderBox = styled.div`
  position: relative;
  display: inline-block;
`

const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <CalenderBox>
      <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    </CalenderBox>
  );
}

export default Calender;