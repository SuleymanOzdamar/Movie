import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { fixedMenuStyle, menuStyle } from "../../helpers/styleHelpers"
import { Container, Visibility, Menu, Image } from 'semantic-ui-react'

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
      }
      
    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: null })


  render() {
    const { menuFixed} = this.state
    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item as={Link} to="/"> 
                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
              </Menu.Item>
              <Menu.Item header as={Link} to="/">Movies App</Menu.Item>
              <Menu.Item as={NavLink} to="/movies">Movies</Menu.Item>
              <Menu.Item as={NavLink} to="/addnewmovie">Add New Movies</Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    )
  }
}

export default Header
