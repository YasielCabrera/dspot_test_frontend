import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './Viewer.module.scss'

const MIN_WIDTH_PERCENTAGE = 10
const MAX_WIDTH_PERCENTAGE = 100
const ZOOM_STEP_PERCENTAGE = 3

function Viewer({ image, onClose }) {
  const [width, setWidth] = useState(40)

  const handleWheel = (event) => {
    if (event.deltaY < 0) {
      setWidth(Math.min(MAX_WIDTH_PERCENTAGE, width + ZOOM_STEP_PERCENTAGE))
    } else if (event.deltaY > 0) {
      setWidth(Math.max(MIN_WIDTH_PERCENTAGE, width - ZOOM_STEP_PERCENTAGE))
    }
  }

  return (
    <div className={styles.viewer}>
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          width={`${width}%`}
          height="auto"
          onWheel={handleWheel}
        />
      </div>
      <div className={styles.close} onClick={() => onClose()}>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="0.196777"
            y="9.19238"
            width="13"
            height="2"
            rx="1"
            transform="rotate(-45 0.196777 9.19238)"
            fill="white"
          />
          <rect
            x="0.196777"
            y="9.19238"
            width="13"
            height="2"
            rx="1"
            transform="rotate(-45 0.196777 9.19238)"
            fill="white"
          />
          <rect
            x="1.61108"
            width="13"
            height="2"
            rx="1"
            transform="rotate(45 1.61108 0)"
            fill="white"
          />
          <rect
            x="1.61108"
            width="13"
            height="2"
            rx="1"
            transform="rotate(45 1.61108 0)"
            fill="white"
          />
        </svg>
      </div>

      <div className={styles.mask} onClick={() => onClose()}></div>
    </div>
  )
}

Viewer.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Viewer
