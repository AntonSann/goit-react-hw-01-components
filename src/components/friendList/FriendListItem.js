import React from 'react';
import PropTypes from 'prop-types';
import FriendStyles from './FriendList.module.css';

const FriendItem = ({id, avatar, name, isOnline}) => ( 
    <li className={FriendStyles.text} key={id}>
          {isOnline === true ?
      (<span className={FriendStyles.status_on}>Online</span>) : 
      (<span className={FriendStyles.status_off}>Offline</span>)
    }
      <img className={FriendStyles.avatar} src={avatar} alt="" width="48" />
      <p className={FriendStyles.name}>{name}</p>
    </li>
    );


    FriendItem.propTypes = {
        avatar: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired, 
        isOnline: PropTypes.bool.isRequired
    };



    export default FriendItem;