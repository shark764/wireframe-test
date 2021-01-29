import React from 'react';
import PropTypes from 'prop-types';

function InputField({
  label, type = 'text', name, register, ...rest
}) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} ref={register} {...rest} />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  register: PropTypes.func,
};

export default InputField;
