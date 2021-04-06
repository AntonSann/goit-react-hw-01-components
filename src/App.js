import React from 'react';
import Profile from './components/socialProfile/User'
import FriendList from './components/friendList/FriendList';
import Statistics from './components/statistics/Statistics.js';
import TransactionHistory from './components/transactionHistory/Transaction-history';
import friends from './data/friends.json';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import transactions from './data/transactions.json';

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

        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>);
};

export default App;