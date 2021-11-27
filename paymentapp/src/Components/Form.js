import axios from 'axios'
import React, {useEffect} from 'react'
import { useState } from 'react'
import GetBank from './GetBank'
import GetCustomer from './GetCustomer'
import Transaction from './Transaction'

const Form = (props) =>{
    console.log('Form component called')
    const [customer,setCustomer]=useState({customerID: '', name: '', clearBalance: 0, overdraft: ''})
    const [status,setStatus]=useState(0)
    const [bank,setBank]=useState({bic: '', bankName: ''})// useState("")
    const [acntnostatus,setacntnostatus]=useState(0)
    const [transaction,setTransaction]=useState({
      amount:0,
      receiveraccountholdername:"",
      receiveraccountholdernumber:"",
      transferdate:undefined,
      transferfees:0.0,
      message:"",
      transfertypes:""})
     
    
     
      
    
      
    //const [errormessage,setErrorMessage]=useState("")
    //const [val,setVal]=useState("")
    const customerIDHandler=(e)=>{
      console.log(e.target.value)
     // setVal(e.target.value)
    console.log(e.target.value.length)
    setStatus(e.target.value.length)
    if (e.target.value.length===14){
     
      axios.get(`http://localhost:8080/customers/${e.target.value}`)
      .then((response) => {console.log(response.status)
      setCustomer(response.data)
     
     })
      .catch(error=>console.log(error))
     
      console.log(`length--${e.target.value.length}`)
    }
      console.log(status)
      
      
        
      }
      const bankIDHandler=(e)=>{
        console.log(e.target.value)
      
       //   setVal(e.target.value)
      console.log(e.target.value.length)
      setacntnostatus(e.target.value.length)
      if (e.target.value.length===11){
        axios.get(`http://localhost:8080/bank/${e.target.value}`)
        .then((response) => {
        console.log(response.status)
        setBank(response.data)
      
        
      
       })
        .catch(error=>console.log(error))
       
        console.log(`length--${e.target.value.length}`)
      }
        console.log(acntnostatus)
        
        
          
        }
    useEffect(()=>{
      setTransaction({...transaction,bank})
    },[bank])
    useEffect(()=>{
      setTransaction({...transaction,customer})
    },[customer])
    const [submit,setSubmit]=useState("false")

    const addTransaction=(e)=>{
      
      e.preventDefault()
      console.log("CHECKING ERROR")
      console.log(transaction)
      axios.post("http://localhost:8080/transactions/",transaction).
      then(response=>console.log(response.data)).catch(error=>console.log(error))
      
       
      setSubmit("true")
    }
    const submitHandler=(submit,status,acntnostatus)=>
    {
      setSubmit(submit)
      setStatus(status)
      setacntnostatus(acntnostatus)
    }
    
        if (submit==="false")
    
        return <div className="row" style={{marginLeft:50, marginRight:50}} >
                   <div style={{borderWidth:2,borderColor:"#206466",borderStyle:"solid",padding:50}}>
                         
                    <div className="col-6" >
                    <form className="row g-3">
                                 <div className="mb-3">
                                             <label for="customerID" className="form-label">Date</label>
                                             <input type="date" required className="form-control" id="customerID" placeholder="enter customer ID" onChange={e=>setTransaction({...transaction,trans_date:e.target.value})} />
                                             <div id="customerDetails"></div>
                                 </div>
                                 <div className="mb-3">
                                             <h4 style={{marginBottom:20}}>Transfer from</h4>
                                             <label for="customerID" className="form-label">Customer ID</label>
                                             <input required type="text" className="form-control" id="customerID" placeholder="enter customer ID" onChange={customerIDHandler}/>
                                             <div><GetCustomer status={status} customer={customer}/></div>
                                 </div>
                                
                   
                                <div className="mb-3">
                                               <h4 style={{marginBottom:20}}>Transfer To</h4>
                                               <label for="BIC" className="form-label">BIC</label>
                                               <input type="text" className="form-control" id="BIC" placeholder="enter BIC" onChange={bankIDHandler}/>
                                               <div><GetBank acntnostatus={acntnostatus} bank={bank}/></div>
                                </div>
                                <div className="mb-3">
                                               <label for="BIC" className="form-label">Name</label>
                                               <input type="text" className="form-control" id="name" placeholder="enter Name" onChange={e=>setTransaction({...transaction,receiveraccountholdername:e.target.value})}/>
                                 </div>
                                 <div className="mb-3">
                                               <label for="BIC" className="form-label">A/c Number</label>
                                              <input type="text" className="form-control" id="accnum" placeholder="enter A/c Number" onChange={e=>setTransaction({...transaction,receiveraccountholdernumber:e.target.value})}/>
                               
    
          </div>
         
                                             
        <div className="mb-3">  
          <label for="BIC" className="form-label">Trasfer Type</label>
          <select class="form-select form-select-sm" id="transfertype" onChange={e=>setTransaction({...transaction,transfertypes:e.target.value})} aria-label=".form-select-lg example">
      <option selected>-select-</option>
      <option value="customertransfer">Customer Transfer</option>
      <option value="banktransfer">Bank Transfer</option>
    </select>
                               
    
          </div>
        
          <div className="mb-3">  
          <label for="BIC" className="form-label">Message Code</label>
          <select class="form-select form-select-sm" id="messagecode" aria-label=".form-select-lg example" onChange={e=>setTransaction({...transaction,message:e.target.value})}>
      <option selected>-select-</option>
      <option value="beneficiary customer must be">CHQB</option>
      <option value="Paymnent is made in settlement">CORT</option>
      <option value="Payment Between Two">INTC</option>
      <option value="beneficiary customer or">HOLD</option>
      <option value="Paymnent advice the intermediary">PHOB</option>
      <option value="please advice the account with">PHOI</option>
      <option value="Paymnents has a related e-">REPA</option>
      <option value="payment must be executed with">SDVA</option>
    </select>
                               
    
          </div>
          <div className="mb-3">
                                <label for="BIC" className="form-label">Amount</label>
                               <input type="number" className="form-control" id="num" placeholder="enter Amount" onChange={e=>setTransaction({...transaction,amount:e.target.value,transferfees:0.0025*e.target.value})}/>
                               
    
          </div>
          <div className="mb-3">
          
          <button class="btn btn-danger"onClick={addTransaction} type="submit">Submit</button>                 
    
          </div>
          </form>
          </div>
          </div>
          </div>
           if(submit==="true") return <div><Transaction submitHandler={submitHandler}  transaction={transaction}/></div>
         
     
     
    }
    export default Form;