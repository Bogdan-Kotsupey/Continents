import React, { useContext } from 'react';

import { ComponentContext } from './components/ComponentProvider';

import './App.css';
import { ParentList } from './components/HOC'


function App() {
  const { data } = useContext(ComponentContext);

  return <div className="parent-group">
    {data.children.map(item => (
      <ParentList obj={item} />
    ))}
  </div>
}

export default App;
