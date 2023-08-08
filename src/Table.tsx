import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useState, useEffect } from "react";
import { TableRows } from './TableRows';
import { USERS } from './UserModel';

export function Table() {
  // we setup our column header constants, text, and order here
  const colHeaderConsts: any = {
    ID: 'id',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    CITY: 'city',
    REGISTERED_DATE: 'registeredDate',
    FULL_NAME: 'fullName',
    DSR: 'dsr'
  };

  const [sortColumn, setSortColumn] = useState(colHeaderConsts.ID);
  const [userList, setUserList] = useState(USERS);
  const [draggedColumn, setDraggedColumn] = useState('');
  const [constants, setConstants] = useState(colHeaderConsts);

  useEffect(() => {
    /* Sorting functionality */
    if (sortColumn) {
      setUserList(
        prevUserList => [...prevUserList.sort((a:any,b:any) => {
          // if sorting numbers
          if (sortColumn === constants.DSR || sortColumn === constants.ID) {
            return a[sortColumn] - b[sortColumn];
          }
          // if sorting dates
          if (sortColumn === constants.REGISTERED_DATE) {
            return Number(new Date(a[sortColumn])) - Number(new Date(b[sortColumn]));
          }
          // if sorting strings
          return a[sortColumn].localeCompare(b[sortColumn]);
        })]
      );
    }
  },[sortColumn, constants])

  const onDrag = (event:any, column:any) => {
    setDraggedColumn(column);
  };

  const onDragOver = (event:any) => {
    event.preventDefault();
  };

  const onDrop = (event:any, column:any) => {
    event.preventDefault();
    // swapping positions of object
    const array = Object.keys(constants);
    
    const indexDragged = array.indexOf(draggedColumn);
    const indexDropped = array.indexOf(column);

    const temp = array[indexDragged];
    array[indexDragged] = array[indexDropped];
    array[indexDropped] = temp;

    const newColHeaders:any = {};
    array.forEach((el:any) => { 
      newColHeaders[el] = constants[el] 
    });

    setConstants(newColHeaders);
  };

  return (
    <div className="table">
      <div className="table__column-header">
        {
          Object.keys(constants).map((column) => {
            return (
              <span 
                tabIndex={0} 
                draggable 
                key={column} 
                className="table__column-text"
                onDrag={(event) => onDrag(event, column)}
                onDragOver={(event => onDragOver(event))}
                onDrop={(event => onDrop(event, column))}
                onClick={() => setSortColumn(constants[column])} 
              >
                {column}
                {sortColumn === constants[column] ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            )
          })
        }
      </div>

      <TableRows userList={userList} constants={constants} />

    </div>
  );
}