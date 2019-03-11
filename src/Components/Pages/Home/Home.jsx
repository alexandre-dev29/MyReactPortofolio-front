import React, { Component } from 'react'

import PageHeader from '../../PageHeader/PageHeader'
import AboutPage from '../About/AboutPage';


export default class Home extends Component {

  
  render() {
    return (
      <div>
        <PageHeader /> 
        <AboutPage />
      </div>
    )
  }
}
