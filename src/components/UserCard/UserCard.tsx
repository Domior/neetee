import React from 'react';
import { List, ListItem, ListItemAvatar } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import cl from './UserCard.module.css';
import avatarDefault from './../../assets/avatar.png';

type propsType = {
  user: any
  selectUser?: (user: any) => void
  removeUser?: (user: any) => void
}
const UserCard = ({ user, selectUser, removeUser }: propsType) => {

  return (
    <ListItem key={user.id} className={cl.userWrap}>
      <ListItemAvatar className={cl.desctopAvatar}>
        <Avatar>
          {user.imgUrl ?
            <img src={user.imgUrl} alt='' />
            : <img src={avatarDefault} alt='avatarDefault' />
          }
        </Avatar>
      </ListItemAvatar>
      <div>
        <div className={cl.size}>
          <ListItemAvatar className={cl.mobileAvatar}>
            <Avatar>
              {user.imgUrl ?
                <img src={user.imgUrl} alt='avatar' />
                : <img src={avatarDefault} alt='avatarDefault' />
              }
            </Avatar>
          </ListItemAvatar>
          <div>
            {user.companyName && <p>{user.companyName}</p>}
            <p className={cl.UserName}>{user.firstName} {user.lastName}</p>
            <p className={cl.phone}>{user.phone}</p>
          </div>
        </div>
        <p className={cl.adres}>{user.adres}</p>
      </div>
      <div className={cl.btnWrap}>
        {selectUser && <button onClick={() => selectUser(user)} className={`${cl.btn} ${cl.select}`}>select</button>}
        {removeUser && <button onClick={() => removeUser(user)} className={`${cl.btn} ${cl.delete}`}>delete</button>}
      </div>
    </ListItem>
  );
};

export default UserCard;
