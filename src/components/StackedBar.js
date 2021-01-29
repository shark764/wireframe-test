import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Meter = styled.div`
  border: 2px solid ${({ theme }) => theme.colors['accent-3']};
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({ gridColValues }) => gridColValues};
`;
const Column = styled.div.attrs((props) => ({
  bgColor: props.bgColor || props.theme.colors.primary,
}))`
  background: ${(props) => props.bgColor};
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function StackedBar({ columns }) {
  return (
    <Meter gridColValues={columns.map((column) => `${column.value}fr`).join(' ')}>
      {columns.map((column) => (
        <Column bgColor={column.bgColor} title={column.name} key={column.name}>
          {column.value}
        </Column>
      ))}
    </Meter>
  );
}

StackedBar.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      bgColor: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
    }),
  ),
};

export default StackedBar;
