import React, { useEffect, useState, Fragment } from 'react';

export const ListMaker = ({ obj, isTreeOpen, setTreeOpen, indicator = 0 }) => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    if (!obj.hasOwnProperty("children") && indicator) {
      setTreeOpen(true);
    } else {
      setOpen(true);
      setTreeOpen(false);
    }
  }

  useEffect(() => {
    if (isTreeOpen) {
      setOpen(false)
    }
  }, [isTreeOpen]);

  return (
    <div className="group">
      <button onClick={onClick} className="node">
        {obj.name}
      </button>
      {obj.hasOwnProperty("children") &&
        obj.children.map((el, i, arr) =>
          <Fragment key={i}>
            {isOpen &&
              <ListMaker
                obj={el}
                isTreeOpen={isTreeOpen}
                setTreeOpen={setTreeOpen}
                indicator={i === arr.length - 1}
              />}
          </Fragment>
        )
      }
    </div>
  )
}

export const ParentList = ({ obj }) => {
  const [isOpen, setOpen] = useState(false);
  const [isTreeOpen, setTreeOpen] = useState(false);

  useEffect(() => {
    if (isTreeOpen) {
      setOpen(false)
    }
  }, [isTreeOpen]);

  const onClick = () => {
    setOpen(true);
  }

  return (
    <div className="parent-item">
      <button onClick={onClick} className="parent-node">
        {obj.name}
      </button>
      {obj.children && obj.children.map(item => (
        <Fragment key={item.name}>
          {isOpen &&
            <ListMaker
              obj={item}
              isTreeOpen={isTreeOpen}
              setTreeOpen={setTreeOpen}
            />
          }
        </Fragment>
      ))}
    </div>
  )
}
