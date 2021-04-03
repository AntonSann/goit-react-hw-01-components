import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import StatisticsStyle from './Statistics.module.css';

const Statistics = ({stats}) =>(
    <section className={StatisticsStyle.statistics}>
    <h2 className={StatisticsStyle.title}>Upload stats</h2>

    <ul className={StatisticsStyle.list}>
    {stats.map(({id, label, percentage}) => (
    <li key = {id}>
        <StatisticsItem 
        label={label} 
        percentage={percentage}/>
    </li>
        ))}
    </ul>
    </section>
    );

Statistics.propTypes = {
    stat: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired
        })).isRequired
    };

    export default Statistics;