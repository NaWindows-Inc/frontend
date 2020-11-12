import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

import styles from './style.module.scss'

const DeviceSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Typography variant="h5">
        <Skeleton />
      </Typography>
      <Skeleton width="80%" />
      <Skeleton width="35%" />
    </div>
  )
}

export default DeviceSkeleton
