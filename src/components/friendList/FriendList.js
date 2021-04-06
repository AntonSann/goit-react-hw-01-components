import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import FriendStyles from './FriendList.module.css';

const FriendList = ({friends}) =>(
    <ul className={FriendStyles.list}>
    {friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem 
        key = {id}
        avatar={avatar} 
        name={name} 
        isOnline={isOnline} />
        ))}
    </ul>);

    FriendList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired
        })).isRequired
    };

    export default FriendList;