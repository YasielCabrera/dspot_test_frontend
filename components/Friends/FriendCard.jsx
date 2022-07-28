import Link from 'next/link'
import PropTypes from 'prop-types'
import Button from '../../library/Button'
import Card from '../../library/Card'
import Avatar from '../Avatar'
import ProfileStatus from '../ProfileStatus'

import styles from './FriendCard.module.scss'

function FriendCard({ id, image, name, status, available }) {
  return (
    <div className={styles.friendCard}>
      <Card>
        <div className={styles.content}>
          <div className={styles.flex}>
            <Avatar image={image} alt={name} available={available} size="sm" />
            <div className={styles.info}>
              <div className={styles.name}>{name}</div>
              <ProfileStatus text={status} />
            </div>
          </div>
          <div className={styles.action}>
            <Link href={`profile/${id}`}>
              <a>
                <Button>Details</Button>
              </a>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

FriendCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  available: PropTypes.bool,
}

export default FriendCard
