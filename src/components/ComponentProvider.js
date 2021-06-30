import React from 'react';
import { AsList } from './HOC';

import {
  gql,
  useQuery,
} from "@apollo/client";

export const ComponentContext = React.createContext({
  asList: () => {},
  data: {},
})

export const ComponentProvider = ({ children }) => {
  const { loading, error, data } = useQuery(gql`
  query {
    continents {
      code
      name
      countries {
        code
        name
        languages {
          name
          code
        }
      }
    }
  }
`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const contextValue = {
    data,
    AsList,
  }

  return (
    <ComponentContext.Provider value={contextValue}>
      {children}
    </ComponentContext.Provider>
  )
}
