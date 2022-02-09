import React from 'react';
import { List, ListItem, ListItemAvatar } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import cl from './UserCard.module.css'

type propsType = {
  user: any
  selectUser?: (user: any) => void
  removeUser?: (user: any) => void
}
const UserCard = ({ user, selectUser, removeUser }: propsType) => {

  return (
      <ListItem key={user.id}>
        <ListItemAvatar>
          <Avatar>
            <img src={user.imgUrl} alt='' />
          </Avatar>
        </ListItemAvatar>
        <div>
          {user.companyName &&<p>{user.companyName}</p>}
          <p>{user.firstName}{user.lastName}</p>
          <p>{user.phone}</p>
          <p>{user.adres}</p>
        </div>
        {selectUser && <button onClick={() => selectUser(user)}>select</button>}
        {removeUser && <button onClick={() => removeUser(user)}>delete</button>}
      </ListItem>
  )
};

export default UserCard;
