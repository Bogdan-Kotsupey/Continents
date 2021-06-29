import { useContext } from 'react';
import { ComponentContext } from './ComponentProvider';
import { Languages } from './Languages';


export const Countries = (props) => {
  const { AsList } = useContext(ComponentContext);
  const CountriesList = AsList(props.countries, Languages);

  return (<CountriesList />);
}
