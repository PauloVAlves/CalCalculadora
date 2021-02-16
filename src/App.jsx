import React from 'react';
import DataProvider from './data/DataContext';
import Main from './components/Main';

function App() {
  return (
    <DataProvider>
      <Main />
    </DataProvider>
  );
}

export default App;
