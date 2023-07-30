
import React, { useState } from "react";
import './App.css';

import spinnerContext from "./components/spinner/spinnnerContext"
import RoutesModule from './pages/routes';


const App = () => {

  const [spinnerAtivo, setSpinnerAtivo] = useState(false);
  
  return (
    <spinnerContext.Provider value={{ spinnerAtivo, setSpinnerAtivo }}>
      <RoutesModule/>
    </spinnerContext.Provider>);

};

export default App;