import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

// importing component
import MenuBar from './components/MenuBar'
import LoginComponent from './pages/Authentication/Login'
import RegisterComponent from './pages/Authentication/Registration'
import HomeComponent from './pages/Home'

function App() {
  return (
    <div style={{paddingLeft: "15%", paddingRight: "15%", paddingTop: 20}}>
      <Router>
        <MenuBar />
        <Route path={"/"} exact component={HomeComponent} />
        <Route path={"/login"} exact component={LoginComponent}/>
        <Route path={"/register"} exact component={RegisterComponent}/>
      </Router>
    </div>
  );
}

export default App;
