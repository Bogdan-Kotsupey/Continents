// export const Languages = () => {
//   const { ComponentSchema, HOC } = useContext(ComponentContext);

import { useContext } from "react";
import { ComponentContext } from "./ComponentProvider";

//   return HOC(ComponentSchema, 'languages');
// }

// import React from 'react';

// import { dataFromServer } from '../index';

// import {
//   useQuery,
// } from "@apollo/client";

export const Languages = ({ array }) => {
  const { ComponentSchema} = useContext(ComponentContext);


  return (
    <ComponentSchema array={array} />
    // <ul>
    //   {array.map(lang => (
    //     <li key={lang.code}>
    //       {lang.name}
    //     </li>
    //   ))}
    // </ul>
  )
}
