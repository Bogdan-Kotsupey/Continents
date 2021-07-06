import React, { useContext } from 'react';

import { ComponentContext } from './components/ComponentProvider';

import './App.css';
import { ListMaker } from './components/HOC'


function App() {
  const { data } = useContext(ComponentContext);

  return <ListMaker obj={data} str={'continents'} />
}

export default App;
