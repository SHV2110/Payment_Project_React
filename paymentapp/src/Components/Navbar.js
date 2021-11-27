import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=>{
const navbar=
<nav className="navbar navbar-expand-lg navbar-dark bg-success text-white" style={{height:70,marginTop:20}}>
<div className="container-fluid">
  <a className="navbar-brand"  ><h3>Payment App</h3></a>
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">New Transaction</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/showtransactions">Show Transactions</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">Logout</Link>
      </li>
      
    </ul>
  </div>
</div>
</nav>
    return <div>
{navbar}
    </div>
}
export default Navbar