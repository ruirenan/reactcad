import React, { useState, useEffect } from "react";

import{ BrowserRouter} from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';

import "./components/Header/styles.css";

function App() {
 return (
   <BrowserRouter>

    <Header />
     <Routes />
      </BrowserRouter>
    );
}

export default App;