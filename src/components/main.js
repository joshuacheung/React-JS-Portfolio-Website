import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Employment from './employment';
import Resume from './resume'
import Landing from './landingpage';


const Main = () => (
  <Switch>
    <Route exact path="/React-JS-Portfolio-Website" component={LandingPage} />
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/employment" component={Employment} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;