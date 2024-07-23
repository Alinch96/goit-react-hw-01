import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
