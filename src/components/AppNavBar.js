import React, { Component } from 'react';
import {
  Button,
  Box,
  Container,
  Section,
  Media,
  Image,
  Content,
  Level,
  Heading,
  Form,
  Icon,
  Navbar
} from 'react-bulma-components/full';

function AppNavBar(props) {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <img
            src="http://shree-dnyaneshwari-prasarak-mandal.org/images/SDPMLogo.jpg"
            alt="SDPM"
            // width="112"
            // height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item href="#">Calendar</Navbar.Item>
          <Navbar.Item href="#">Photo Gallery</Navbar.Item>
          <Navbar.Item href="/pravachans">Pravachans</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default AppNavBar;
