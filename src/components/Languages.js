import { useContext } from 'react';
import { ComponentContext } from './ComponentProvider';
import { Finish } from './HOC';

export const Languages = (props) => {
  const { AsList } = useContext(ComponentContext);
  const LanguagesList = AsList(props.languages, Finish);

  return (<LanguagesList />)
}
