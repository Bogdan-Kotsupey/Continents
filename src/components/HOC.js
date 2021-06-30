import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import './HOCstyle.css';

export const AsList = (items, SomeComponent = null, name) => {

  const onClick = (id, i, arr) => {

    if (i === arr.length - 1 && arr[i].name !== name ) {
      const button = document.getElementById(id);
      const upDiv = button.parentNode.parentNode.parentNode;
      upDiv.style.display = 'none';
      const liElements = upDiv.firstChild.children;

      [].forEach.call(liElements, function (li) {
        li.lastChild.style.display = 'none';
      });

    } else {
      const nextDiv = document.getElementById(id).nextElementSibling;
      nextDiv.style.display = 'block';
    }
  };

  return () => (
    <ul className='list-group'>
      {items.map((item, i, arr) => {
        const uniqueKey = uuidv4();

        return (
          <li key={item.code} className='list-item'>
            <button
              className='node'
              id={uniqueKey}
              onClick={(event) => onClick(event.target.id, i, arr)}
            >
              {item.name}
            </button>
            <div className='component-container'><SomeComponent  {...item} /></div>
          </li>
        )
      })}
    </ul>
  )
}
