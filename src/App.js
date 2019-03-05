import React, { Component } from 'react';

import PageHeader from './Components/PageHeader/PageHeader'
import PagesNavbar from './Components/NavBar/Navbar'
import AllRoutes from './Components/AllRoutes'

import { BrowserRouter } from "react-router-dom";

class App extends Component {


  render() {
    return (
        <>
            <PagesNavbar />
            <BrowserRouter>
              <AllRoutes />
            <PageHeader />
            </BrowserRouter>
           
        </>
    );
  }
}

export default App;
