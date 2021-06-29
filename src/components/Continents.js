import { useContext } from 'react';
import { ComponentContext } from './ComponentProvider'
import { Countries } from './Countries';

// export const Continents = ({ array }) => {
//   const { ComponentSchema } = useContext(ComponentContext)
//   return <ComponentSchema array={array} />
// }

export const Continents = ({ array }) => {
  const { HOC, ComponentSchema} = useContext(ComponentContext);
  // const lol = `countries (filter: { continent: { eq: ${el.name}}})`;

  return <>
    {/* {HOC(ComponentSchema, 'continents', `countries (filter: { continent: { eq: ${`continents`.name.name}}}) { name, code }`)} */}
    <ul>
      {array.map(el => (
        <li key={el.code}>
          {el.name}
          {HOC(Countries, 'countries', `(filter: { continent: { eq: "${el.code}"}})`, `languages { name }`)}
          {/* {el.isArray && } */}
        </li>
      ))}
    </ul>
  </>
}

//   return (
//     <>
//       {/* {HOC(ComponentSchema, 'countries', `countries( filter: { currency: { eq: "EUR" } } )`)} */}
//       <ComponentSchema array={array} />
//     </>
//   )
// }

// import {
//   useQuery,
//   gql,
// } from "@apollo/client";

// export const Continents = () => {
//   const { loading, error, data } = useQuery(gql`
//   query {
//     continents {
//       code
//       name
//       countries {
//         code
//         name
//         languages {
//           code
//           name
//         }
//       }
//     }
//   }
//   `);
//   console.log(data);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return (
//     <>
//       <ul>
//         {data.continents.map(continent => (
//           <li key={continent.code}>
//             <div>
//               {continent.name}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }
