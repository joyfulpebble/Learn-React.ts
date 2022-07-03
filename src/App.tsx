import React from 'react';
import UserList from './components/UserList';
import { IUser } from './types/Types';

function App() {
  const arr: IUser[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        }
      },
      {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
      }
    }
  ]

  return (
    <div>
        <UserList users={arr}/>
    </div>
  );
}

export default App;
