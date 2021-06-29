import React, { useContext } from 'react';

import { Continents } from './components/Continents';
// import { Countries } from './components/Countries';
// import { Languages } from './components/Languages';

import { ComponentProvider, ComponentContext } from './components/ComponentProvider';

import './App.css';

import {
  useQuery,
  gql,
} from "@apollo/client";


function App() {
  // const { data, simpleHOC } = useContext(ComponentContext);
  // const WrapedContinents = simpleHOC(Continents, data, 'сontinents')
  // const WrapedCountries = simpleHOC(Continents, data, 'countries')
  // const WrapedLanguages = simpleHOC(Continents, data, 'languages')
  const { loading, error, data } = useQuery(gql`
  query {
    continents {
      code
      name
      countries {
        continent {
          code
        }
      }
    }
  }
`);
console.log(data);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

const array = data.continents;

  return (
    <ComponentProvider>
      <Continents array={array}/>
      {/* <WrapedContinents /> */}
      {/* <Countries /> */}
      {/* <Languages /> */}
    </ComponentProvider>
  );
}

export default App;
