import axios from 'axios'
import React, {useEffect} from 'react'
import { useState } from 'react'
import GetBank from './GetBank'
import GetCustomer from './GetCustomer'
import Transaction from './Transaction'
import NameCheck from './NameCheck'

const Form = (props) =>{
    console.log('Form component called')
    const [customer,setCustomer]=useState({customerID: '', name: '', clearBalance: 0, overdraft: ''})
    const [status,setStatus]=useState(0)
    const [bank,setBank]=useState({bic: '', bankName: ''})// useState("")
    const [acntnostatus,setacntnostatus]=useState(0)
    const [nstatus,setNstatus]=useState(0)
    const[request,setRequest]=useState("false")
    const [cerror,setCerror]=useState(false)
    const [berror,setBerror]=useState(false)
    const [terror,setTerror]=useState(false)
    const [value,setValue]=useState(false)
    const [submit,setSubmit]=useState("false")
    const [dateError,setDateError]=useState(null)
    const [ciderror,setCiderror]=useState(null)
    const [biderror,setBiderror]=useState(null)
    const [nameerror,setNameerror]=useState(null)
    const [accerror,setAccerror]=useState(null)
    const [msgcerror,setMsgcerror]=useState(null)
    const [transterror,setTransterror]=useState(null)
    const [amterror,setAmterror]=useState(null)
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
      
     
      console.log(e.target.value.length)
      setacntnostatus(e.target.value.length)

      if (e.target.value.length===11){
        axios.get(`http://localhost:8080/bank/${e.target.value}`)
        .then((response) => {
        console.log(response.status)
        setBank(response.data)
        setBerror(false)
      
        
      
       })
       .catch(error=>{setBerror(true)})
       
        
      }
          
    }

    const nameHandler=()=>{
      // console.log(transaction.reciever_name)
       axios.get(`http://localhost:8080/customers/name-check/${transaction.receiveraccountholdername}`)
     .then((response) => {
       console.log(response.data)
       setNstatus(1)
       setValue(response.data)
    })
     .catch(error=>{
       console.log(error)})
     }

    useEffect(()=>{
      setTransaction({...transaction,bank})
    },[bank])
    useEffect(()=>{
      setTransaction({...transaction,customer})
    },[customer])
    

    useEffect(()=>{
      console.log("request sending")
      axios.post("http://localhost:8080/transactions/",transaction).
      then(response=>{console.log(response.data)
      setTerror(false)}).catch(error=>{console.log(error)
      setTerror(true)})
    }
    ,[request])

    const addTransaction=(e)=>{
      e.preventDefault()
     
     const valid= validateForm()
     if (!valid) return false;
      setRequest("true")
      if(valid===true)
      setSubmit("true")
    }
    const submitHandler=(submit,status,acntnostatus,nstatus)=>
    {
      setSubmit(submit)
      setStatus(status)
      setacntnostatus(acntnostatus)
      setNstatus(nstatus)
    }
    const validateForm=()=>{
      let valid=true;
    if( customer.customerid==='' || customer.customerid<14){
      setCiderror("enter valid customer id with 14 characters")
      valid=false;
    }
    console.log(cerror)
    if(cerror){
      setCiderror("invalid")
      valid=false;
    }
    console.log(berror)
    if(berror){
      setBiderror("invalid")
      valid=false;
    }
    
    if(bank.bic===''){
      setBiderror("Bank BIC is required")
      valid=false;
    }
    if(bank.bic<11){
      setBiderror("enter valid bic with 11 characters")
      valid=false;
    }
    if(transaction.receiveraccountholdername===''){
      setNameerror("Name is required")
      valid=false;
    }
    if (nstatus===0){
      setNameerror("Name Verification is required")
      valid=false;
    }
    if(value){
      setNameerror("Enter Valid Name")
      valid=false;
    }
    if(transaction.transferdate==='')
    {
      setDateError("Date is required")
      valid=false;
    }
    if(transaction.transfertype==='' || transaction.transfertype==='-select-')
    {
      setTransterror("Transaction Type is Required")
      valid=false;
    }
    if(transaction.message==='' || transaction.message==='-select-'){
      setMsgcerror("Message code is required")
      valid=false;
    }
    if(transaction.receiveraccountholdernumber==='')
    {
      setAccerror("A/c num is required")
      valid=false;
    }
    if(transaction.amount===0){
      setAmterror("please enter the amount")
      valid=false;
    }
    
     return valid;  
    
    }
        if (submit==="false")
    
        return <div className="row" style={{marginLeft:50, marginRight:50}} >
                   <div style={{borderWidth:2,borderColor:"#206466",borderStyle:"solid",padding:50}}>
                         
                    <div className="col-6" >
                    <form className="row g-3">
                                 <div className="mb-3">
                                             <label for="customerID" className="form-label">Date</label>
                                             <input type="date" required className="form-control" onChange={e=>setTransaction({...transaction,trans_date:e.target.value})} />
                                             <label style={{color:'red'}}>{dateError}</label>
                                 </div>
                                 <div className="mb-3">
                                             <h4 style={{marginBottom:20}}>Transfer from</h4>
                                             <label for="customerID" className="form-label">Customer ID</label>
                                             <input type="text" required className="form-control" id="customerID" placeholder="enter customer ID" onChange={customerIDHandler}/>
                                             <label style={{color:'red'}}>{ciderror}</label>
                                              <div><GetCustomer cerror={cerror} status={status} customer={customer}/></div>
                                 </div>
                                
                   
                                <div className="mb-3">
                                               <h4 style={{marginBottom:20}}>Transfer To</h4>
                                               <label for="BIC" className="form-label">BIC</label>
                                               <input type="text" className="form-control" id="BIC" placeholder="enter BIC" onChange={bankIDHandler}/>
                                               <label style={{color:'red'}}>{biderror}</label>
                                              <div><GetBank berror={berror} acntnostatus={acntnostatus} bank={bank}/></div>
                                </div>
                                <div className="mb-3">
                                               <label for="BIC" className="form-label">Name</label>
                                               <input type="text" className="form-control" id="name" placeholder="enter Name" onChange={e=>setTransaction({...transaction,receiveraccountholdername:e.target.value})}/>
                                               <label style={{color:'red'}}>{nameerror}</label>
                                           <br/>
                                           <br/>
                                           <button type="button" onClick={nameHandler} class="btn btn-outline-danger">Verify Name</button>
                                          
                                           <div><NameCheck value={value} nstatus={nstatus}/></div>
                                 </div>
                                 <div className="mb-3">
                                               <label for="BIC" className="form-label">A/c Number</label>
                                              <input type="text" className="form-control" id="accnum" placeholder="enter A/c Number" onChange={e=>setTransaction({...transaction,receiveraccountholdernumber:e.target.value})}/>
                                              <label style={{color:'red'}}>{accerror}</label>
                               
    
          </div>
         
                                             
        <div className="mb-3">  
          <label for="BIC" className="form-label">Transfer Type</label>
          <select class="form-select form-select-sm" id="transfertype" onChange={e=>setTransaction({...transaction,transfertypes:e.target.value})} aria-label=".form-select-lg example">
      <option selected>-select-</option>
      <option value="customertransfer">Customer Transfer</option>
      <option value="banktransfer">Bank Transfer</option>
      </select> <label style={{color:'red'}}>{transterror}</label>
    
                               
    
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
    <label style={{color:'red'}}>{msgcerror}</label>
                               
    
          </div>
          <div className="mb-3">
                                <label for="BIC" className="form-label">Amount</label>
                               <input type="number" className="form-control" id="num" placeholder="enter Amount" onChange={e=>setTransaction({...transaction,amount:e.target.value,transferfees:0.0025*e.target.value})}/>
                               <label style={{color:'red'}}>{amterror}</label>
    
          </div>
          <div className="mb-3">
          
          <button class="btn btn-danger"onClick={addTransaction} type="submit">Submit</button>                 
    
          </div>
          </form>
          </div>
          </div>
          </div>
           if(submit==="true") return <div><Transaction terror={terror} submitHandler={submitHandler}  transaction={transaction}/></div>
         
     
     
    }
    export default Form;