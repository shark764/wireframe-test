import React from 'react';
import { useForm } from 'react-hook-form';

function FormExample() {
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      example: 'test',
      exampleRequired: '',
    },
    // reValidateMode: 'onBlur',
  });
  const onSubmit = (data) => {
    console.log('submit', data);
  };

  console.log(watch('example'));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Example</label>
        <input name="example" defaultValue="test" ref={register} />
        <label>ExampleRequired</label>
        <input
          name="exampleRequired"
          ref={register({
            required: true,
            maxLength: 10,
          })}
        />
        {errors.exampleRequired && (
          <p>
            {errors.exampleRequired.type}: {errors.exampleRequired.message}
          </p>
        )}
        <input name="firstName" ref={register} />
        <select name="gender" ref={register}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormExample;
