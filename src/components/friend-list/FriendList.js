import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import FriendStyles from './FriendList.module.css';

const FriendList = ({friends}) =>(
    <ul className={FriendStyles.list}>
    {friends.map(({avatar, name, isOnline, id}) => (
    <li className={FriendStyles.item} key = {id}>
        <FriendListItem 
        avatar={avatar} 
        name={name} 
        isOnline={isOnline} />
    </li>
        ))}
    </ul>);

    FriendList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired
        })).isRequired
    };

    export default FriendList;