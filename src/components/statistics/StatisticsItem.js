import React from 'react';
import PropTypes from 'prop-types';
import StatisticsStyle from './Statistics.module.css';

const StatisticsItem = ({label, percentage}) => (
  <div className={StatisticsStyle.block}>
      <span className={StatisticsStyle.label}>{label}</span>
      <span className={StatisticsStyle.percentage}>{percentage} %</span>
  </div>);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired, 
  percentage: PropTypes.number.isRequired
};

export default StatisticsItem;