import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'react-big-calendar';
import { DateTime } from 'luxon';
import styled, { css } from 'styled-components';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import LuxonLocalizer from '../../intl/LuxonLocalizer';

const CalendarContainer = styled.div`
  margin: 25px auto;
  padding: 10px;
  height: ${({ height }) => height || '500px'};
  ${({ width }) => width
    && css`
      width: ${width};
    `};

  .rbc-time-view .rbc-row.rbc-time-header-cell {
    min-height: 40px;
  }

  .rbc-today {
    background-color: ${({ theme }) => theme.colors['accent-2']};
  }
  .rbc-event {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const WeekHeader = styled.div`
  span {
    display: block;
  }
`;

const luxonLocalizer = LuxonLocalizer(DateTime, { firstDayOfWeek: 1 });

function BigCalendar({
  height, width, className, ...props
}) {
  const components = {
    week: {
      header: ({ date, localizer }) => (
        <WeekHeader>
          <span>{localizer.format(date, 'cccc')}</span>
          <span>{localizer.format(date, 'dd-MMM')}</span>
        </WeekHeader>
      ),
    },
  };
  components.week.header.propTypes = {
    date: PropTypes.shape({}),
    localizer: PropTypes.shape({
      format: PropTypes.func,
    }),
  };

  return (
    <CalendarContainer className={className} height={height} width={width}>
      <Calendar
        localizer={luxonLocalizer}
        formats={{
          weekdayFormat: 'cccc',
        }}
        components={components}
        {...props}
      />
    </CalendarContainer>
  );
}

BigCalendar.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default BigCalendar;
