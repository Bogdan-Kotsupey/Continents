import React, { useContext } from 'react';
import { Countries } from './components/Countries';

import { ComponentContext } from './components/ComponentProvider';

import './App.css';


function App() {
  const { data, AsList } = useContext(ComponentContext);
  const name = data.continents[data.continents.length - 1].name;
  const ContinentsList = AsList(data.continents, Countries, name);

  return (<ContinentsList />);
}

export default App;
