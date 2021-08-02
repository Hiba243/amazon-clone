import './Login.css'
import { Link , useHistory} from "react-router-dom";
import  {useState} from 'react'
import { auth } from "../firebase";

function Register() {
  
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);


  const register = e => {
      e.preventDefault();

      auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
              // it successfully created a new user with email and password
              if (auth) {
                  setIsRegistered(true);
                  history.push("/login");
              }
          })
          .catch(error => alert(error.message))
  }

    return (
        <div className="login">
            <Link to='/' className="login__logo">
            SUPER SKIN
            </Link>

            <div className='login__container'>
                <h1>Sign-up</h1>
                {isRegistered ? <p className="info-msg">Registered Successfully, proceed for sign in</p> : <p></p>}
                <form>
                <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </form>
                <button onClick={register} className='button login__registerButton'>Create your new account</button>
            </div>
        </div>
    )
}

export default Register
