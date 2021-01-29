import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Button from '../../components/Inputs/Button';
import Play from '../../components/Icons/Play';
import { addDays } from '../../utilities/date';
import events from '../../tests/events';

import DatePicker from '../../components/DateTime/DatePicker';
import BigCalendar from '../../components/DateTime/BigCalendar';
import Divider from '../../components/Divider';
import Calendar from '../../components/Icons/Calendar';

const Container = styled.div`
  width: 60%;
`;
const Toolbar = styled.div`
  margin: 25px auto;
  width: max-content;
  padding: 10px;
  display: grid;
  gap: 8px;
  grid-template-columns: min-content min-content max-content;
`;

const DatePickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .react-datepicker__input-container .custom-datepicker__input {
    border: 0;
    padding: 2px 10px;
    line-height: 28px;
  }
`;

function Schedule() {
  const [calDate, setCalDate] = useState(new Date());
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

  useEffect(() => {
    // effect
    console.log('useEffect', { calDate });

    return () => {
      // cleanup
    };
  }, [calDate]);

  const handleMyScheduleOnClick = () => {
    console.log('Clicked on my schedule', 'Still not sure what this button does...');
  };

  const handleManuallyAddDays = (days) => {
    setCalDate((currentDate) => addDays(currentDate, days));
  };

  return (
    <Container>
      <Button type="button" primary onClick={handleMyScheduleOnClick} label="MY SCHEDULE" />

      <Toolbar>
        <Play secondary direction="left" onClick={() => handleManuallyAddDays(-7)} title="Previous week" />
        <Play secondary onClick={() => handleManuallyAddDays(7)} title="Next week" />

        <DatePickerContainer>
          <DatePicker
            selected={calDate}
            onChange={setCalDate}
            // locale="en-US"
            open={datePickerIsOpen}
            onFocus={() => setDatePickerIsOpen(true)}
            onClickOutside={() => setDatePickerIsOpen(false)}
            // isClearable
            className="custom-datepicker__input"
          />

          <Divider direction="vertical" secondary size={30} />

          <Calendar secondary onClick={() => setDatePickerIsOpen(true)} title="Open calendar" />
        </DatePickerContainer>
      </Toolbar>

      <BigCalendar
        events={events}
        defaultView="week"
        date={calDate}
        onNavigate={setCalDate}
        views={{
          // month: true,
          week: true,
        }}
        toolbar={false}
        min={new Date(0, 0, 0, 7, 0, 0)}
        max={new Date(0, 0, 0, 23, 30, 0)}
        height="auto"
      />
    </Container>
  );
}

export default Schedule;
