import React from 'react';

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

export default InputField;
