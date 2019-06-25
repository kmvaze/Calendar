import React from 'react';
import logo from '../images/KendraLogo.png';
import { Container } from 'react-bulma-components/full';

const HomePage = props =>  (
  <Container className="has-text-centered">
    <div className="columns">
      <div className="column is-one-third is-offset-one-third">
        <div className="content is-large">
          <h1>Sadhak Samwad</h1>
        </div>
        <figure className="image">
          <img alt="Kendra Logo" src={logo} />
        </figure>
      </div>
    </div>
  </Container>
);

export default HomePage;
