import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
`;
const Spinner = styled.div`
  --spinner-color: ${({
    primary, secondary, color, theme,
  }) => (primary && theme.colors.primary) || (secondary && theme.colors.secondary) || (color && color) || 'black'};
  --spinner-size: ${({ weight }) => weight}px;

  display: block;
  top: 50%;
  left: 50%;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  margin: 0 auto;
  border: var(--spinner-size) rgba(163, 172, 189, 0.25) solid;
  border-top: var(--spinner-size) var(--spinner-color) solid;
  border-bottom: var(--spinner-size) var(--spinner-color) solid;
  border-radius: 50%;

  ${({ type, speed }) => (type === 'default'
      && css`
        border-right: var(--spinner-size) var(--spinner-color) solid;
        animation: ${spinAnimation} ${speed}s infinite linear;
      `)
    || (type === 'simple'
      && css`
        border: var(--spinner-size) rgba(163, 172, 189, 0.25) solid;
        border-top: var(--spinner-size) var(--spinner-color) solid;
        animation: ${spinAnimation} ${speed}s infinite linear;
      `)
    || (type === 'half'
      && css`
        animation: ${spinAnimation} ${speed}s infinite linear;
      `)
    || (type === 'clock'
      && css`
        position: relative;
        border: var(--spinner-size) var(--spinner-color) solid;
        &:before {
          content: '';
          border-left: var(--spinner-size) var(--spinner-color) solid;
          position: absolute;
          top: 9%;
          left: 50%;
          width: 2px;
          height: calc(50% - 2px);
          transform: rotate(0deg);
          transform-origin: 0% 100%;
          animation: ${spinAnimation} ${speed}s infinite linear;
        }
      `)};
`;

function LoadSpinner({
  type = 'default',
  size = 25,
  weight = 4,
  speed = 1,
  primary = false,
  secondary = false,
  ...rest
}) {
  return (
    <Spinner type={type} size={size} weight={weight} speed={speed} primary={primary} secondary={secondary} {...rest} />
  );
}

LoadSpinner.propTypes = {
  type: PropTypes.oneOf(['default', 'simple', 'half', 'clock']),
  size: PropTypes.number,
  weight: PropTypes.number,
  speed: PropTypes.number,
  color: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

export default LoadSpinner;
