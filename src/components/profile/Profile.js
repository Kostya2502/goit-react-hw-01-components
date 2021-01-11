import style from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
    // const { name, tag, location, avatar, stats } = props;
    const { followers, views, likes } = stats;

    return (
        <div className={style.profile}>
            <div className="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={style.avatar}
                />
                <p className={style.name}>{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={style.stats}>
                <li className={style.item}>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li className={style.item}>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li className={style.item}>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div >
    );
}

export default Profile;

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}