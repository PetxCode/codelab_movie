import React from 'react';
// import "antd/dist/antd.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './component/Details';
import Header from './component/Header';
import Home from './component/Home';
import RegistrationPage from './component/RegistrationPage';
import { SingUpPage } from './component/SignUpPage';



function App() {
  return (
    <div>
      <div>     
        <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/signUp" component={SingUpPage} />
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Details} />
            <Route exact path="/login" component={RegistrationPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
