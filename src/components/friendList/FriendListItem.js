import style from "./FriendList.module.css";
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
        <>
            <span className={isOnline ? style.on : style.off}>{isOnline}</span>
            <img className={style.avatar} src={avatar} alt="" width="48" />
            <p className={style.name}>{name}</p>
        </>
    );
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}