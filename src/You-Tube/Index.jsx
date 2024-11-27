import React, { Component } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Content from './content';
import { Container } from '../styled';

export default class Index extends Component {
  render() {
    return (
      <Container>
        <Navbar></Navbar>
        <Container flex>
            <Sidebar></Sidebar>
            <Content></Content>
        </Container>
      </Container>
    )
  }
}
