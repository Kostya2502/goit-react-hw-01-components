import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    // const { id, label, percentage } = stats
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>Upload stats</h2>}

            <ul className={style.list}>
                {stats.map(stat => (
                    <li className={style.item} key={stat.id}>
                        <span className={style.label}>{stat.label}</span>
                        <span className={style.percentage}>{stat.percentage}%</span>
                    </li>
                ))
                }
            </ul>
        </section>
    );
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
    )
}