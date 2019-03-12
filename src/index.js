import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import "./assets/css/blk-design-system-react.min.css";
// import "assets/css/blk-design-system-react.min.css";
// import "assets/css/blk-design-system-react.css.map";
import "./assets/css/nucleo-icons.css";

import { BrowserRouter } from "react-router-dom";
import AllRoutes from './Components/AllRoutes';
import PagesNav from './Components/NavBar/Navbar';

require('dotenv').config();
const alexandre  = process.env;

console.log(alexandre);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <PagesNav />
            <AllRoutes />
        </div>
    </BrowserRouter>
,
 document.getElementById('root')
 );


