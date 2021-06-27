import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user.actions'
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-sign-up/sign-in.sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'; 
import CheckOutPage from './pages/checkout/checkout.component'



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser } = this.props;
    
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if(userAuth){
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot(snapShot =>{
  //           setCurrentUser({
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           })
  //         })

  //     }setCurrentUser(userAuth);
  //   })
}

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckOutPage} />
      <Route exact path='/signup' render= {()=> this.props.currentUser ? (<Redirect to= '/' />) : <SignInAndSignUpPage/>}/>
          </Switch> 
   </div>
  );
 }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 })

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);