import React from 'react';
import { useForm } from 'react-hook-form';
import FormField from '../../../components/Form/Fields/FormField';
import { calibres, types } from './utilities';

function FormLayout({ onSubmit, initialValues = {} }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      ...initialValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Name">
        <input type="text" name="name" ref={register({ required: true, minLength: 1 })} />
      </FormField>

      <FormField label="Type">
        <select name="type" ref={register({ required: true })}>
          <option value="" />
          {types.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Calibre">
        <select name="calibre" ref={register({ required: true })}>
          <option value="" />
          {calibres.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Description">
        <textarea name="description" rows="6" ref={register({ minLength: 1 })} />
      </FormField>

      <FormField label="Features">
        <textarea name="features" rows="6" ref={register({ minLength: 1 })} />
      </FormField>

      <FormField label="Distribution">
        <textarea name="distribution" rows="6" ref={register({ minLength: 1 })} />
      </FormField>

      <FormField label="Image URL">
        <textarea name="imageUrl" rows="6" ref={register({ minLength: 1 })} />
      </FormField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
        <input type="submit" />
        <input type="button" onClick={() => reset()} value="Reset" />
      </div>
    </form>
  );
}
export default FormLayout;
