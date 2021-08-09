import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react'
import { auth } from "../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/' className="login__logo">
                SUPER SKIN
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />


                    <button type='submit' onClick={signIn} className='button login__signInButton'>Sign In</button>
                </form>
                <Link to="/register"><button className='button login__registerButton'>Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Login
