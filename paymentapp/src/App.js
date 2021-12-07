import React,{useEffect, useState} from 'react'
import Form from './Components/Form.js'
import Header from './Components/Header'
import GetCustomer from './Components/GetCustomer'
import GetTransaction from './Components/Transaction'
import Navbar from './Components/NavBar'
import TransactionHistory from './Components/TransactionHistory.js'
import {Routes,Route,Link} from 'react-router-dom'
import Logout from './Components/Logout'
import './index.css'
import Login from './Components/Login.js'
import FormCss from './Components/form.css'
import Insufficientfunds  from './Components/Insufficientfunds'
import Transaction from './Components/Transaction';
function App() {
  const [loginf,setLoginf]=useState(false)
  const loginstatus=(loginflag)=>{
    setLoginf(loginflag)
  }
 
  return (<div className="container">
  <Navbar  loginf={loginf}/>
  <br/>
<Routes>
    <Route path="/" element={<Login loginstatus={loginstatus} />}/>
    // <Route path="/login" element={<Login />} />
    <Route path="/transactionform" element={<Form loginstatus={loginstatus} />} />
    <Route path="showtransactions" element={<TransactionHistory loginstatus={loginstatus} ></TransactionHistory>}/> 
    <Route path="/logout" element={<Logout loginstatus={loginstatus}/>}/>
    <Route path="/transactionerror" element={<Insufficientfunds/>}/>
    

    </Routes>
  
    </div>)
  
}
export default App;