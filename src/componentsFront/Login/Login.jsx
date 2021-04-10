import React, { useContext, useState } from 'react'
import './Login.scss';
import { loginContext } from '../../App'
import { Redirect } from 'react-router-dom';


const Login = () => {
    const { token, logIn } = useContext(loginContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    return (
        <>
            <div className="Login">
                {token ? <Redirect to="/backEnd"></Redirect> :
                    <form>
                        <div>
                            <label for="uname"><b>Username:</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <label for="psw"><b>Password:</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" value={pass} onChange={(e) => setPass(e.target.value)} required />

                            <button type='button' onClick={() => logIn(email, pass)}>Login</button>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}


export default Login;