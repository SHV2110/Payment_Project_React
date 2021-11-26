import React, {useEffect,useState} from 'react'
//const [transactionlist,setTransactionList]=useState([])
const Transaction=(props)=>{
   const message = <div className="col-6 " style={{margin:"auto"}}>
       <table className="table table-primary table-borderless">
  <thead>
    <tr>
      <th scope="col">TRANSACTION SUCCESSFULL!!!</th>
      <th scope="col"></th>
     
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>Ishika</td>
     
    </tr>
    <tr>
      <th scope="row">Transefred Amount</th>
      <td>50000</td>
   
    </tr>
    <tr>
      <th scope="row">Clear balance</th>
      <td colspan="2">3000</td>
   
    </tr>
  </tbody>
</table>
       
   </div>
    return <div>{message}</div>
}
export default Transaction;