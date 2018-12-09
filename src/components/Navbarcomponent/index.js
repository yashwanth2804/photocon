import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


export default class Navbarcomponent extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          
        </Menu.Item>

        <Menu.Item
          name='Photocon'
          >
          Photocon 
        </Menu.Item>
 
      </Menu>
    )
  }
}