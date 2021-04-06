import React from 'react';
import Transaction from './Transaction';
import PropTypes from 'prop-types';
import TransactionsStyle from './Transactions.module.css';

const TransactionHistory = ({items}) => (
<table className={TransactionsStyle.transaction_history}>
  <thead className={TransactionsStyle.table_header}>
    <tr>
      <th>Amount</th>
      <th>Type</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency})=>(    
    <tr className={TransactionsStyle.table_row} key={id}>
      <Transaction 
      type={type}
      amount={amount}
      currency={currency}
      />
    </tr>))}
  </tbody>
</table>);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
  })).isRequired
};

export default TransactionHistory;