import React from 'react';
import FormInput from '../../components/form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'
import {googleSignInStart, emailSignInStart} from '../../redux/user.actions'
import {connect} from 'react-redux'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { emailSignInStart } = this.props
        const {email, password} = this.state;
        emailSignInStart(email,password)
    }

    handleChange = event =>{
        const {value , name } = event.target;
        this.setState({[name]: value})
    }

        render(){
            const {googleSignInStart} = this.props
            return(
                <div className="sign-in">   
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name = 'email' type="email" label='email' value={this.state.email} onChange={this.handleChange} required />
                    <FormInput name = 'password' type="password"  label="password" value={this.state.password } onChange={this.handleChange} required />
                    
                    <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google </CustomButton>
                    </div>
                </form>

                </div>
            )
        }
    }

    const mapDispatchToProps = dispatch => ({
        googleSignInStart : () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))  
    })



export default connect(null, mapDispatchToProps)(SignIn)
