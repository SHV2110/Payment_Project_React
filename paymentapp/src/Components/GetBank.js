import React from 'react'
const GetBank=(props)=>
{
    console.log("GetBank Component called")
    console.log('${props.bank.bic} ...... ${props.bank.bankname}')
    const message= <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Bank Details</th>  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>{props.bank.bankname}</td>
    </tr>
    <tr>
      <th scope="row">BIC</th>
      <td>{(props.bank.bic).toUpperCase()}</td>
    </tr>
    
  </tbody>
</table>
    </div>
    console.log(props.acntnostatus)
   
    if(props.acntnostatus>=10 && props.berror===false)
    return <div>{message}</div>
    if(props.acntnostatus>=10 && props.berror===true)
    return <div style={{color:'red',paddingTop:30}}>Bank BIC do not exist</div>
    return <div></div>
}
export default GetBank