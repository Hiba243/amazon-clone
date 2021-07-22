import './Login.css'
import { Link , useHistory} from "react-router-dom";
import  {useState, useContext} from 'react'
import AuthContext from './reducer';

function Register() {
   

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useContext(AuthContext);

    const submitHandlerForSignUp = (event) => {
      event.preventDefault();
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvSenJcIf-qkx863u0Ebb6rpzsD5E7NfI', {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                let errorMessage = 'Authentication failed!';
                // if (data && data.error && data.error.message) {
                //   errorMessage = data.error.message;
                // }
    
                throw new Error(errorMessage);
              });
            }
          })
          .then((data) => {
            const expirationTime = new Date(
              new Date().getTime() + +data.expiresIn * 1000
            );
            authCtx.login(data.idToken, expirationTime.toISOString());
            history.push('/login');
          })
          .catch((err) => {
            alert(err.message);
          });
  };

    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    alt="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className='login__container'>
                <h1>Register</h1>

                <form>
                <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                </form>

                <button onClick={submitHandlerForSignUp} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Register