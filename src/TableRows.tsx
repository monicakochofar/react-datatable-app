import { User } from './UserModel';

type tableProps = {
  userList: User[],
  constants: any
}

export function TableRows({userList, constants}: tableProps) {

  const listUserDataElements = (user: any) => {
    return Object.keys(constants).map((column) => {
      return (
        <span key={column}>{user[constants[column]]}</span>
      )
    })
  };

  return (
    <>
      {
        userList.map(user => {
          return (
            <div className="table__rows" key={user.id}>
              { listUserDataElements(user) }
            </div>
          );
        })
      }
    </>
  );

}