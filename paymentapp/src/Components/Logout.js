import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout=(props)=>{
    const logins=props.loginstatus
    const navigate=useNavigate()
    const logoutHandler=()=>{
       logins(false);
       navigate("/")
    }
    return <div><button type="button" onClick={logoutHandler} class="btn btn-teal">Logout</button></div>
}
export default Logout