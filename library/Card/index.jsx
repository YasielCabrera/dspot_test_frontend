import PropTypes from 'prop-types'

import styles from './Card.module.scss'

// TODO: finish styling cards...
function Card({ children }) {
  return <div className={styles.card}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
