import React from 'react';
import { Section } from 'react-bulma-components/full';
import { Route } from 'react-router-dom';
import AppNavBar from './AppNavBar';
import Pravachans from '../containers/Pravachans';
import HomePage from './HomePage';

const Layout = () => { 
    return (
        <div>
            <AppNavBar/>
            <Section>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/pravachans/" component={Pravachans} />
            </Section>
        </div>
    )
}

export default Layout;
