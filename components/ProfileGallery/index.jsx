import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './ProfileGallery.module.scss'
import Viewer from './Viewer'

function ProfileGallery({ photos = [] }) {
  const [selectedImage, setSelectedImage] = useState('')

  if (photos.length == 0) {
    return <div className={styles.empty}>There are not photos yet</div>
  }

  return (
    <div className={styles.gallery}>
      {photos.map((item, index) => (
        <div
          className={styles.img}
          key={index}
          onClick={() => setSelectedImage(item)}
          style={{ backgroundImage: `url("${item}")` }}></div>
      ))}
      {selectedImage && (
        <Viewer image={selectedImage} onClose={() => setSelectedImage('')} />
      )}
    </div>
  )
}

ProfileGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
}

export default ProfileGallery
