import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../sign-up/sign-up.components'
import './sign-in.sign-up.scss'

const SignInAndSignUpPage = () => {
return(<div className="sign-in-and-sign-up"> <SignIn /><SignUp /> </div>)
}

export default SignInAndSignUpPage;