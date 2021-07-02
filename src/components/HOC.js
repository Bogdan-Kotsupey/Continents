import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import './HOCstyle.css';

export const AsList = (items, SomeComponent, bool) => {

  const onClick = (childrensId, i, arr, bool, groupKey) => {

    if (!bool && i === arr.length - 1) {
      const someComponent = document.getElementById(groupKey).parentNode;
      const upperSomeComponent = document.getElementById(someComponent.className).parentNode;
      const nodes = document.getElementById(someComponent.className).children;
      upperSomeComponent.style.display = 'none';
      console.log(nodes);

      [].forEach.call(nodes, function (noda) {
        noda.lastChild.style.display = 'none';
      });

    } else {
      if (bool) {
        const childrensDiv = document.getElementById(childrensId);
        childrensDiv.style.display = 'block';
      }
    }
  };

  const gruopKey = uuidv4();


  return () => (
    <div id={gruopKey} className='group' vlaue={1}>
      {items.map((item, i, arr) => {
        const itemKey = uuidv4();
        const buttonKey = uuidv4();
        const childrensKey = uuidv4();

        return (
          <div key={itemKey} id={itemKey} className='item' value={2}>
            <button
              className='node'
              id={buttonKey}
              value={3}
              onClick={() => onClick(childrensKey, i, arr, bool, gruopKey)}
            >
              {item.name}
            </button>
            {bool && <div value={4} id={childrensKey} style={{display: 'none'}} className={gruopKey}><SomeComponent {...item}/></div>}
          </div>
        )}
      )}
     </div>
  )
}
