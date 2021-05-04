import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic'

// importing component
const LoginComponent = React.lazy(()=> import('./pages/Authentication/Login'))
const RegisterComponent = React.lazy(()=> import('./pages/Authentication/Registration'))
const HomeComponent = React.lazy(()=> import('./pages/Home'))

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
