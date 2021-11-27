import React,{useEffect, useState} from 'react'
import Form from './Components/Form.js'
import Header from './Components/Header'
import GetCustomer from './Components/GetCustomer'
import GetTransaction from './Components/Transaction'
import Navbar from './Components/Navbar.js'
import TransactionHistory from './Components/TransactionHistory.js'
import {Routes,Route,Link} from 'react-router-dom'
import Logout from './Components/Logout'

function App() {

  return (<div className="container">
  <Navbar  />
  <br/>
<Routes>
    <Route path="/" element={<Form />} />
    <Route path="showtransactions" element={<TransactionHistory></TransactionHistory>}/> 
    <Route path="logout" element={<Logout />} />


    </Routes>
  
    </div>)

  
}

export default App;