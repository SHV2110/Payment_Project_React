import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
// use login component 
const Login = (props) => {
    const navigate = useNavigate();
    const [appUser, setAppUser] = useState({
        user: '',
        password: ''
    });
    const [loginError,setLoginError]=useState(false)
    useEffect(
        () => {
            setAppUser({
                user: '',
                password: ''
            }
            );
        }, []);
    const handleAppUser = (event) => {
        //  console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
         console.log(appUser.user)
        // console.log(appUser.password)
    };
    const submitAppUser = (event) => {
        // console.log(appUser.user);
        // console.log(event.target.user);
        event.preventDefault();
        if (appUser.user === "Admin" && appUser.password === "Root") {
            console.log(appUser.user);
                props.loginstatus(true)
                navigate('/transactionform')
           
         }
         else
         {
             setLoginError(true)
         }
        
    }
    const errormessage=<p style={{paddingTop:15, color:'red',marginLeft:270}}>invalid username or password</p>
const loginform=
        <div className="container" style={{marginTop:40}}>
            <div className="row col-6" style={{margin:'auto'}}>
                <form className="form form-group form-dark row mt-3" >
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="user"
                            id="user"
                            className="form-control mb-3"
                            placeholder="Username"
                            value={appUser.user}
                            
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={appUser.password}
                        
                            
                            onChange={handleAppUser} />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-teal mb-3"
                            value="Login"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
            </div>
        </div >
    if (!loginError)
    return <div>{loginform}</div>
    else if (loginError)
    return <div><div>{loginform}</div>
                <div >{errormessage}</div></div>
}
export default Login;