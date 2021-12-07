import React from 'react'
import { Link } from 'react-router-dom'
const Navbar=(props)=>{
 
  const loginnavbar=<nav className="navbar navbar-expand-lg navbar-dark bg-teal" style={{height:70,marginTop:20}}>
  <div className="container-fluid">
    <a className="navbar-brand"  ><h3>PAYAPP</h3></a>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Login</Link>
       </li>
       
      </ul>
    </div>
  </div>
  </nav>
  const logoutnavbar=<nav className="navbar navbar-expand-lg navbar-dark bg-teal" style={{height:70,marginTop:20}}>
  <div className="container-fluid">
    <a className="navbar-brand"  ><h3>PAYAPP</h3></a>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/transactionform">New Transaction</Link>
       </li>
        <li className="nav-item">
          <Link className="nav-link" to="/showtransactions">Show Transactions</Link>
        </li><li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/logout">Logout</Link>
       </li>
       
      </ul>
    </div>
  </div>
  </nav>
   
   if (!props.loginf)
      return <div>{loginnavbar}</div>
   if (props.loginf)
   return <div>{logoutnavbar}</div>
   return <div></div>
     
  }
  export default Navbar
