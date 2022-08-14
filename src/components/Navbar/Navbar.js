import React from 'react'
import { Menu, Grid } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const { useBreakpoint } = Grid

const Navbar = () => {
  const { lg } = useBreakpoint()
  return (
    <Menu mode={lg ? 'horizontal' : 'inline'} className='navbar'>
      <Menu.Item>Home</Menu.Item>
      <Menu.SubMenu
        key='menu'
        title={
          <span>
            Menu <DownOutlined />
          </span>
        }
      >
        <Menu.Item key='two'>Burger</Menu.Item>
        <Menu.Item key='three'>Pizza</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>About</Menu.Item>
      <Menu.SubMenu
        key='shop'
        title={
          <span>
            Shop <DownOutlined />
          </span>
        }
      >
        <Menu.Item key='four'>Sauce</Menu.Item>
        <Menu.Item key='five'>Parmezan</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>Blog</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Menu>
  )
}

export default Navbar
