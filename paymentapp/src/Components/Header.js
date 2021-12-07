import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
//const [transactionlist,setTransactionList]=useState([])
const Insufficientfunds=(props)=>{
 
    
 
  
 const error=<div><h3 style={{color:'red',textAlign:'center'}}>Transaction failed due to insufficient funds</h3>
                 <div style={{marginLeft:10,marginTop:60}}><button type="button" class="btn btn-danger" onClick={()=>{props.submitHandler(false,0,0,0)}}>Go Back</button></div>
              </div>
  
 
    return <div>{error}</div>
  
  }
export default Insufficientfunds;