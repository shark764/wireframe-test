import React from 'react';
import styled from 'styled-components';
import ArmyProvider from './context';
import Form from './Form';
import List from './List';

const Container = styled.div`
  display: grid;
  grid-template-areas: 'list form';
  padding-left: 20px;
  padding-right: 20px;
`;

function FormExample2() {
  return (
    <ArmyProvider>
      <Container>
        <List />
        <Form />
      </Container>
    </ArmyProvider>
  );
}

export default FormExample2;
