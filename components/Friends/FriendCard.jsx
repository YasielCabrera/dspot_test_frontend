import Link from 'next/link'
import PropTypes from 'prop-types'
import Button from '../../library/Button'
import Card from '../../library/Card'
import Avatar from '../Avatar'

import styles from './FriendCard.module.scss'

function FriendCard({ id, image, name, status }) {
  return (
    <Card>
      <div className={styles.content}>
        <div className={styles.flex}>
          <Avatar image={image} alt={name} available={true} size="sm" />
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.status}>{status}</div>
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
  )
}

FriendCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
}

export default FriendCard
