import React from 'react'
import 'semantic-ui-css/semantic'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// importing component
import 


function App() {
  return (
    <Router>
      <Route path={"/"} exact component={HomeComponent} />
      <Route path={"/login"} exact component={LoginComponent}/>
      <Route path={"/register"} exact component={RegisterComponent}/>
    </Router>
  );
}

export default App;
