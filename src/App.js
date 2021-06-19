import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-sign-up/sign-in.sign-up';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signup' component={SignInAndSignUpPage}/>
          </Switch> 
   </div>
  );
}

export default App;
