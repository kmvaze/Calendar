import React, { Component } from 'react';
import logo from '../images/KendraLogo.png';
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

import { Route, Link } from 'react-router-dom';

import AppNavBar from './AppNavBar';
import PravachanResults from './PravachanResults';
import SearchInput from './SearchInput';
import Pravachans from '../containers/Pravachan.Container';
import filterPravachans from '../util/filterPravachans';

function HomePage(props){
  return(
    <div><AppNavBar/>
    <Section>
      <Route
        exact
        path="/"
        component={function() {
          return (
            <container class="has-text-centered">
              <div class="columns">
                <div class="column is-one-third is-offset-one-third">
                  <div class="content is-large"><h1>Sadhak Samwad</h1></div>
                  <figure class="image">
                    <img alt="Kendra Logo" src={logo} />
                  </figure>
                </div>
              </div>
            </container>
          );
        }}
      />
      <Route exact path="/pravachans/" component={Pravachans} />
    </Section>
    </div>
  );
}

export default HomePage;
