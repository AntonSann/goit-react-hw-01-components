import React from 'react';
import Profile from './components/social-profile/User'
import FriendList from './components/friend-list/FriendList';
import Statistics from './components/statistics/Statistics.js';
import TransactionHistory from './components/transaction-history/Transaction-history';
import friends from './components/friend-list/friends.json';
import user from './components/social-profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import transactions from './components/transaction-history/transactions.json';

const App = () => {
    return (
    <div>
        <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />

        <Statistics stats={statisticalData} />
        

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
    </div>);
};

export default App;