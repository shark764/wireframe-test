import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from './utilities';
import Navigation from './navigation';
import PageHeader from './navigation/PageHeader';

const Main = styled.main`
  padding: 24px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageHeader />

      <Main>
        <Navigation />
      </Main>
    </ThemeProvider>
  );
}

export default App;
