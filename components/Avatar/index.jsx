import Image from 'next/image'
import styles from './Avatar.module.scss'
import { PropTypes } from 'prop-types'

function Avatar({ image, alt, available = false, size = 'sm' }) {
  const imageSize = size == 'sm' ? 60 : 150

  return (
    <div className={styles.avatar}>
      <Image src={image} alt={alt} width={imageSize} height={imageSize} />
      <div
        className={`${styles.availabilityWrapper} ${
          size != 'sm' ? styles.x2 : ''
        }`}>
        <div
          className={`${styles.availability} ${
            size == 'sm' ? styles.sm : styles.lg
          } ${available ? styles.available : ''} `}></div>
      </div>
    </div>
  )
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  available: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
}

export default Avatar
