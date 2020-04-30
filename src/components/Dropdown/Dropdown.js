import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  HamburgerButton,
  DropdownContainer,
  List,
  ListItem,
} from './Dropdown.styled';

export default class Dropdown extends Component {
  static defaultProps = {
    isOpen: false,
  };

  state = {
    isOpen: this.props.isOpen,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Container>
        <HamburgerButton type="button" onClick={this.handleToggle}>
          &#9776;
        </HamburgerButton>
        {isOpen && (
          <DropdownContainer>
            <List>
              <ListItem>Option 1</ListItem>
              <ListItem>Option 2</ListItem>
              <ListItem>Option 3</ListItem>
              <ListItem>Option 4</ListItem>
            </List>
          </DropdownContainer>
        )}
      </Container>
    );
  }
}
