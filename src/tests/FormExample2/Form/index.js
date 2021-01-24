import axios from 'axios';
import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { log } from '../../../utilities';
import { ArmyContext } from '../context';
import FormLayout from './FormLayout';

import styled from 'styled-components';

const FormContainer = styled.div`
  grid-area: form;
  padding: 15px;
`;
const FormHeader = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 10px;
    top: 0;
  }
`;

const defaultValues = {
  name: '',
  type: '',
  calibre: '',
  description: '',
  features: '',
  distribution: '',
  imageUrl: '',
};

function Form() {
  const {
    selectedEntity: [selected, setSelected],
    open: [open],
    setFormState,
  } = useContext(ArmyContext);

  const isAddMode = !selected.id;

  const queryClient = useQueryClient();

  const mutation = useMutation(
    function ({ data, id }) {
      if (!id) {
        return axios.post(`https://army-server.herokuapp.com/api/v1/weapons`, data, {
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
        });
      } else {
        return axios.put(`https://army-server.herokuapp.com/api/v1/weapons/${id}`, data, {
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
        });
      }
    },
    {
      onSuccess: function ({ data }) {
        log('success', data.message, data.data);
        queryClient.invalidateQueries('fetchWeapons');
        setSelected(data.data);
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const onSubmit = (values) => {
    console.log('values submitted', values);

    const payload = {
      ...values,
    };
    delete payload.createdAt;
    delete payload.updatedAt;
    delete payload.id;

    if (isAddMode) {
      mutation.mutate({ data: payload });
    } else {
      mutation.mutate({ data: payload, id: selected.id });
    }
  };

  if (!open) {
    return null;
  }

  const initialValues = { ...defaultValues, ...selected };

  return (
    <FormContainer>
      <FormHeader>
        <h3>{isAddMode ? 'Register new army' : `Edit ${selected.name}`}</h3>
        <button type="button" onClick={() => setFormState({}, undefined)}>
          X
        </button>
      </FormHeader>

      <FormLayout onSubmit={onSubmit} initialValues={initialValues} key={initialValues.id || 'register-army'} />
    </FormContainer>
  );
}

export default Form;
