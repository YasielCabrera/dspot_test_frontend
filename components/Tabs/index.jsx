import { useState } from 'react'
import PropTypes from 'prop-types'

import Card from '../../library/Card'
import styles from './Tabs.module.scss'

function Tabs({ elements }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className={styles.tabs}>
      <div className={styles.controls}>
        {elements?.map((element, index) => (
          <div
            key={index}
            className={`${styles.tabBtn} ${
              index == selected ? styles.selected : ''
            }`}
            onClick={() => setSelected(index)}>
            {element.title}
          </div>
        ))}
      </div>

      <Card>{elements[selected].content}</Card>
    </div>
  )
}

Tabs.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
}

export default Tabs
