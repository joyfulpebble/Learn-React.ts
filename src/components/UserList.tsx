import React, { FC } from 'react';
import { IUser } from '../types/Types';

interface UserListProps{
  users: IUser[];

}

const UserList: FC<UserListProps> = ({users}) => {
  return (
    <div>
      {users.map(user => 
        <div key={user.id} style={{padding: 15, border: '1px solid gray', marginTop: 10}}>
          
          {user.id}. {user.name} живет в городе: {user.address.city}, улица: {user.address.street} зип код: {user.address.zipcode}
           email: {user.email}

        </div>  
      )}
    </div>
  )
}

export default UserList;