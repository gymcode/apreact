import React from 'react'
import 'semantic-ui-css/semantic'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// importing component
const LoginComponent = React.lazy(()=> import('./pages/Authentication/Login'))
const RegisterComponent = React.lazy(()=> import('./pages/Authentication/Registration'))


function App() {
  return (
    <Router>
      {/* <Route path={"/"} exact component={HomeComponent} /> */}
      <Route path={"/login"} exact component={LoginComponent}/>
      <Route path={"/register"} exact component={RegisterComponent}/>
    </Router>
  );
}

export default App;
