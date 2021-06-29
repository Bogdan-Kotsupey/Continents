import { useContext } from 'react';
import { ComponentContext } from './ComponentProvider';

import {
  useQuery,
  gql,
} from "@apollo/client";

// export const Countries = () => {
//   const { ComponentSchema, HOC } = useContext(ComponentContext);

//   return HOC(ComponentSchema, 'countries');
// }

import React from 'react';
import { Languages } from './Languages';

export const Countries = ({ array }) => {
  const { HOC, simpleHOC } = useContext(ComponentContext);

  return (
    <ul>
      {array.map(countrie => (
        <li key={countrie.code}>
          {countrie.name}
          <ul>
            {countrie.languages.map(el => (
              <li>
                {el.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
