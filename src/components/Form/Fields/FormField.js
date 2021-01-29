import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
  margin: 0.5rem;

  label {
    text-align: right;
  }
`;

function FormField({ label, children, ...rest }) {
  return (
    <Field>
      <label {...rest}>{label}</label>
      {children}
    </Field>
  );
}

FormField.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default FormField;
