import React from 'react';
import {  Route,  Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/AlllSkills';
import Works from './Pages/Works/AllWorks';
import Resume from './Pages/Resumes/Resume';
import Contacts from './Pages/Contacts/ContactsPage';

const RouteContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const AllRoutes = () => (
    <Route
        render={({ location }) => (
        <div>
            <div>
            <PoseGroup>
                <RouteContainer key={location.pathname}>
                <Switch location={location}>
                    <Route exact path="/" component={Home} key="Home" />
                    <Route path="/Skills" component={Skills} key="Skills" />
                    <Route path="/Works" component={Works} key="Works" />
                    <Route path="/Resume" component={Resume} key="Resume" />
                    <Route path="/Contacts" component={Contacts} key="Contacts" />
                </Switch>
                </RouteContainer>
            </PoseGroup>
            </div>
        </div>
        )}
    />
);
export default withRouter(AllRoutes);