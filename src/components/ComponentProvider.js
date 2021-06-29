import React from 'react';

import {
  gql,
  useQuery,
} from "@apollo/client";

export const ComponentContext = React.createContext({
  HOC: () => { },
  ComponentSchema: () => { },
  simpleHOC: () => {},
  data: {},
})

export const ComponentProvider = ({ children }) => {
  const ComponentSchema = ({ array }) => (
    <ul>
      {array.map(el => (
        <li key={el.code}>
          {el.name}
        </li>
      ))}
    </ul>
  )

  const simpleHOC = (Component, obj, string) => {
    return <Component array={obj[`${string}`]} />
  }

  const HOC = (Component, searchString, filter, nextSearch) => {
    const { loading, error, data } = useQuery(gql`
      query {
        ${searchString}${filter} {
          code
          name
          ${nextSearch}
        }
      }
    `);
    console.log(data);

    // const { loading, error, data } = useQuery(gql`
    //   query {
    //     continents {
    //       code
    //       name
    //       countries {
    //         code
    //         name
    //         languages {
    //           name
    //         }
    //       }
    //     }
    //   }
    // `);
    // console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    localStorage.setItem('data', data)

    const array = data[`${searchString}`];

    return <Component array={array} />
  }

//   const { loading, error, data } = useQuery(gql`
//   query {
//     continents {
//       code
//       name
//       countries {
//         code
//         name
//         languages {
//           name
//         }
//       }
//     }
//   }
// `);
// console.log(data);

  const contextValue = {
    HOC,
    ComponentSchema,
    simpleHOC,
    data: localStorage.data,
  }

  return (
    <ComponentContext.Provider value={contextValue}>
      {children}
    </ComponentContext.Provider>
  )
}
