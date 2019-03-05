import React, { Component } from 'react';

import PageHeader from './Components/PageHeader/PageHeader'
import PagesNavbar from './Components/NavBar/Navbar'

import {  } from "reactstrap";

class App extends Component {


  render() {
    return (
        <>
            <PagesNavbar />
            <PageHeader />
        </>
    );
  }
}

export default App;
