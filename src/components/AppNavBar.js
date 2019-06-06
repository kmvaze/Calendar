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

function showHideMenu(props) {
  var isActive = document.getElementById('MenuButton').className;
  if(isActive == 'navbar-burger burger'){
    document.getElementById('MainMenu').setAttribute('class','navbar-menu is-active');
    document.getElementById('MenuButton').setAttribute('class','navbar-burger burger is-active');
  } else {
    document.getElementById('MainMenu').setAttribute('class','navbar-menu');
    document.getElementById('MenuButton').setAttribute('class','navbar-burger burger');
  }
}

function AppNavBar(props) {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="navbar-item"><b>Menu</b></p>
        <a id="MenuButton" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
          data-target="MainMenu" onClick={showHideMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="MainMenu" class="navbar-menu">
          <Navbar.Container>
            <Navbar.Item href="#">Calendar</Navbar.Item>
            <Navbar.Item href="#">Photo Gallery</Navbar.Item>
            <Navbar.Item href="/pravachans">Pravachans</Navbar.Item>
          </Navbar.Container>
      </div>
    </nav>
  );
}

export default AppNavBar;
