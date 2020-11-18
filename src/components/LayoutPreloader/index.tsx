import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './style.module.scss'

const LayoutPreloader = () => {
  return (
    <div className={styles.root}>
      <CircularProgress size={50}/>
    </div>
  )
}

export default LayoutPreloader
