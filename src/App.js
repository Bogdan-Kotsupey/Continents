import React, { useContext } from 'react';
import { Countries } from './components/Countries';

import { ComponentContext } from './components/ComponentProvider';

import './App.css';

function App() {
  const { data, AsList } = useContext(ComponentContext);
  const ContinentsList = AsList(data.continents, Countries);

  return (
    <ContinentsList />
  );
}

export default App;
