import PropTypes from 'prop-types'
import FriendCard from './FriendCard'

function FriendList({ friends = [] }) {
  return (
    <div>
      {friends?.map((friend) => (
        <FriendCard
          key={friend.id}
          id={friend.id}
          image={friend.img}
          name={`${friend.first_name} ${friend.last_name}`}
          available={friend.available}
          status={friend.statuses.length > 0 ? friend.statuses[0] : ''}
        />
      ))}
    </div>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
      statuses: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
}

export default FriendList
