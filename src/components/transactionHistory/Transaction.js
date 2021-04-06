import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({type, amount, currency}) => (
        <>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
        </>);


Transaction.propTypes = {
    type: PropTypes.string.isRequired, 
    amount: PropTypes.number.isRequired, 
    currency: PropTypes.string.isRequired
};


    export default Transaction;