import PropTypes from 'prop-types'

import styles from './InfoContent.module.scss'

function Title({ children }) {
  return <div className={styles.title}>{children}</div>
}

function InfoContent({ profile }) {
  return (
    <div className={styles.infoContent}>
      <Title>Bio:</Title>
      <div className={styles.bio}>{profile.bio}</div>
      <hr />

      <div className={styles.table}>
        <Title>Phone:</Title>
        <div>{profile.phone}</div>
      </div>
      <hr />

      <address className={`${styles.table} ${styles.address}`}>
        <Title>Address:</Title>
        <div>{profile.address_1}</div>

        <Title>City:</Title>
        <div>{profile.city}</div>

        <Title>State:</Title>
        <div>{profile.state}</div>

        <Title>Zipcode:</Title>
        <div>{profile.zipcode}</div>

        <Title>State:</Title>
        <div>{profile.state}</div>
      </address>
    </div>
  )
}

InfoContent.propTypes = {}

export default InfoContent
