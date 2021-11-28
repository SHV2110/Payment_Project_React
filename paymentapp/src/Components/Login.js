import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
// use login component 
const Login = () => {
    const navigate = useNavigate();
    const [appUser, setAppUser] = useState({
        user: '',
        password: ''
    });
    useEffect(
        () => {
            setAppUser({
                user: '',
                password: ''
            }
            );
        }, []);
    const handleAppUser = (event) => {
        // console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };
    const submitAppUser = (event) => {
        console.log(appUser.user);
        console.log(event.target.user);
        if (appUser.user === "Admin" && appUser.password === "Root") {
        
                localStorage.setItem(appUser); // important 
                navigate('/transactionform')
           
         }
        event.preventDefault();
    }
    return (
        <div className="container">
            <h1 className="display-4 text-primary">Login</h1>
            <div>
                <form className="form form-group form-dark row mt-3" onSubmit={submitAppUser}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="user"
                            id="user"
                            className="form-control mb-3"
                            placeholder="user"
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
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Login;