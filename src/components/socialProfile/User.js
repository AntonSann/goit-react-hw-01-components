import React from 'react';
import PropTypes from 'prop-types';
import UserStyles from './User.module.css';

const UserProfile = ({avatar, name, tag, location, stats}) => (
    <div className={UserStyles.card}>
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={UserStyles.image}
        />
        <p className={UserStyles.title}>{name}</p>
        <p className={UserStyles.tag}>{tag}</p>
        <p className={UserStyles.location}>{location}</p>
      </div>
    
      <ul className={UserStyles.stats}>
        <li>
          <span className={UserStyles.label}>Followers</span>
          <span className={UserStyles.quantity}> {stats.followers}</span>
        </li>
        <li>
          <span className={UserStyles.label}>Views</span>
          <span className={UserStyles.quantity}> {stats.views}</span>
        </li>
        <li>
          <span className={UserStyles.label}>Likes</span>
          <span className={UserStyles.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
    );

    UserProfile.propTypes = {
        avatar: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired, 
        tag: PropTypes.string.isRequired,
        stats: PropTypes.arrayOf(PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        }).isRequired)

    };

    export default UserProfile;