import React from 'react'
import { Container } from '@material-ui/core'

import Header from '../../components/Header'

import styles from './style.module.scss'

interface IProps {
  children?: React.ReactNode
  maxWidth?: 'md' | 'xs' | 'sm' | 'lg' | 'xl'
  className?: string
}

const Layout = ({ children, maxWidth, className }: IProps) => {
  return (
    <div className={className}>
      <Header />
      <Container
        maxWidth={maxWidth ? maxWidth : 'md'}
        className={styles.paddings}
      >
        <>{children}</>
      </Container>
    </div>
  )
}

export default Layout
