import React from 'react';

import { useHistory } from 'react-router-dom';

import { useState, useEffect } from 'react';

import axios from "axios";

// use login component

const Login = () => {

    const history = useHistory();

   

    const submitAppUser = (event) => {

       console.log("ge")

        axios.post(`http://localhost:8080/login`, event.data)

            .then((response) => {

                console.log("print")

                console.log(response.data);

                localStorage.setItem(event.data); // important

                history.push('/tranactionform');

            }).catch((error) => {

                console.log(error.message)

            });

       

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

                            name="name"

                            id="user"

                            className="form-control mb-3"

                            placeholder="user"

                            

                           

                            required

                        />

                        <input

                            type="password"

                            className="form-control"

                            name="password"

                            id="password"

                            className="form-control mb-3"

                            placeholder="Password"

                            

                            />

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