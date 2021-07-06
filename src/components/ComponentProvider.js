import React from 'react';

import {
  gql,
  useQuery,
} from "@apollo/client";

export const ComponentContext = React.createContext({
  data: {},
})

export const ComponentProvider = ({ children }) => {
  const { loading, error, data } = useQuery(gql`
    query {
      children: continents {
        name
        code
        children: countries {
          name
          code
          children: languages {
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
  }

  return (
    <ComponentContext.Provider value={contextValue}>
      {children}
    </ComponentContext.Provider>
  )
}
