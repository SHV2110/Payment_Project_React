import React from 'react'

const GetCustomer=(props)=>{
    console.log(props.customer)
    console.log("GetCustomer component called")
   
   
    console.log(`${props.customer.customerid}...${props.customer.accountholdername}....${props.customer.clearbalance}.....${props.customer.overdraftflag}`)
   const message= <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Customer Details</th>  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sender Name</th>
      <td>{props.customer.accountholdername}</td>
    </tr>
    <tr>
      <th scope="row">ID</th>
      <td>{props.customer.customerid}</td>
    </tr>
    <tr>
      <th scope="row">Account Balance</th>
      <td colspan="2"> {props.customer.clearbalance}</td>
    </tr>

    <tr>
      <th scope="row">Overdraft Status</th>
      <td colspan="2"> {props.customer.overdraftflag}</td>
    </tr>

  </tbody>
</table>
    </div>
   
    console.log(props.status)
    if(props.status===14)
    return <div>{message}</div>
    else return <div></div>
}
export default GetCustomer;