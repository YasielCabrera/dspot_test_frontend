import PropTypes from 'prop-types'

import styles from './ProfileStatus.module.scss'

function ProfileStatus({ text }) {
  return <div className={styles.status}>{text}</div>
}

ProfileStatus.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ProfileStatus
