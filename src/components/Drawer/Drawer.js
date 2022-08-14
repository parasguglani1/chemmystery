import React from 'react'
import { Drawer } from 'antd'
import Navbar from '../Navbar/Navbar'

const AppDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      placement='left'
      size='default'
      contentWrapperStyle={{ width: '100%', color: '#ffffff' }}
      onClose={onClose}
      visible={visible}
    >
      <Navbar />
    </Drawer>
  )
}

export default AppDrawer
