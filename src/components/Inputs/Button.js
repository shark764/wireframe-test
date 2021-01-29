import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 15px 35px;
  border-radius: 16px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    outline: 0;
  }

  ${({ primary, secondary, theme }) => (primary
      && css`
        color: ${theme.colors['accent-3']};
        background-color: ${theme.colors.primary};
      `)
    || (secondary
      && css`
        color: ${theme.colors['accent-3']};
        background-color: ${theme.colors.secondary};
      `)};
`;

function Button({ label, children, ...rest }) {
  return (
    <StyledButton {...rest}>
      {label}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
