import React from 'react';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerContainer = styled.div`
  .react-datepicker-popper {
    z-index: 5;
  }

  .react-datepicker__input-container .custom-datepicker__input:focus {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.brand};
    border: 1px solid ${({ theme }) => theme.colors.brand};
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__month--selected,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--in-range,
  .react-datepicker__quarter--selected,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--in-range {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__month-text.react-datepicker__month--selected:hover,
  .react-datepicker__month-text.react-datepicker__month--in-range:hover,
  .react-datepicker__month-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__month--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__close-icon::after {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: ${({ theme }) => theme.colors['accent-1']};
  }

  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.colors['accent-2']};
  }
`;

function DatePicker(props) {
  return (
    <DatePickerContainer>
      <ReactDatePicker
        dateFormat="MMM dd, yyyy"
        placeholderText="MMM dd, yyyy"
        todayButton="Today"
        shouldCloseOnSelect={false}
        open={false}
        closeOnScroll
        {...props}
      />
    </DatePickerContainer>
  );
}

export default DatePicker;
