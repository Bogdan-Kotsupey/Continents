import React, { useContext, useEffect, useState } from 'react';

import { ComponentContext } from './ComponentProvider';

export const ListMaker = ({ obj, str, indicator }) => {
  const { treeClose } = useContext(ComponentContext);
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    if(!obj.hasOwnProperty("children") && indicator) {
      treeClose(setOpen, obj.children)
      console.log(6);
    } else {
      setOpen(true);
    }
  }

  useEffect(() => {
    if (!obj.hasOwnProperty("name")) {
      setOpen(true);
    }
  }, [])

  return (
    <div className={`group ${str}`}>
      {obj.hasOwnProperty('name') &&
        <>
          {<button onClick={() => onClick(obj.children)} className={`node`}>
            {obj.name}
          </button>}
        </>
      }
      {obj.hasOwnProperty('children') &&
        obj.children.length > 0 &&
        obj.children.map((el, i, arr) => {
          return <>
            {isOpen &&
            <ListMaker
              obj={el}
              key={i}
              indicator={i === arr.length - 1}
            />}
          </>
        })
      }
    </div>

//     <div className="group">
//   {obj.hasOwnProperty("children") &&
//     obj.children.length > 0 &&
//     obj.children.map((el, i, arr) => {
//       return <div className="item">
//         {el.hasOwnProperty("name") &&
//           <>
//             <button onClick={onClick} className="node">
//               {el.name}
//             </button>
//             {isGlobalOpen && <ListMaker obj={el} key={i} />}
//           </>
//         }
//       </div>
//     })}
// </div>
  )
}
