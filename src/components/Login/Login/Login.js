import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, signInUserWithEmailAndPassword, registerUserWithEmailAndPassword } = useAuth();
    const [loginData, setLoginData] = useState({});
    const [error, setError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_uri);
            });
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegistration = e => {
        if(isRegistered){
            registerUserWithEmailAndPassword(loginData.email, loginData.password, loginData.name)
            .then(() => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });
        }else{
            signInUserWithEmailAndPassword(loginData.email, loginData.password)
            .then(() => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });
        }
        e.preventDefault();
    }
    const signIn = () =>{
        !isRegistered ? setIsRegistered(true) : setIsRegistered(false);
    }
    return (
        <div className="login-container">
            <div className="m-auto login-form rounded">
                <div className="p-md-5 m-sm-2 m-md-5">
                    <form onSubmit={handleRegistration}>
                        <h3>Please {!isRegistered ? 'Login' : 'Register'}</h3>

                        {isRegistered &&
                            <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" onBlur={handleOnBlur} name ="name" className="form-control" placeholder="Enter Your Name" required />
                        </div>
                        }
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" onBlur={handleOnBlur} name ="email" className="form-control" placeholder="Enter email" required />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onBlur={handleOnBlur} name="password" className="form-control" placeholder="Enter password" required />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <div className="mb-3 text-danger">{error}</div>
                        <button type="submit" className="btn btn-primary btn-block">{!isRegistered ? 'Login' : 'Register'}</button>
                        
                    </form>
                    <span>{!isRegistered ? 'Not' : 'Already'} Registered?</span>
                    <button onClick={signIn} className="btn btn-warning m-2">{!isRegistered ? 'Register' : 'Login'}</button> or
                    <button onClick={handleGoogleLogin} className="btn btn-warning m-2">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;