import React from 'react'
const TransactionCard=(props)=>{
    const space="   -    "
    const amount = props.transaction.amount + props.transaction.transferfees
    console.log(props.transaction)
    return (
<div><table class="table table-dark table-striped table-hover">
<tbody>
  <tr>
    <th scope="row" class="col-4 col-lg-2" >{`${props.transaction.transactionid} ${space}  ${props.transaction.transferdate} `}  </th>
    <td class="col-4 col-lg-2" >{amount}</td>
    <td class="col-4 col-lg-2" >{props.transaction.customer.customerid}</td>
    <td class="col-4 col-lg-2"  >{props.transaction.bank.bic}</td>
    <td class="col-4 col-lg-2">  {props.transaction.receiveraccountholdername}</td>
    <td class="col-4 col-lg-2"  >{props.transaction.transfertypes}</td>
  </tr>
  
</tbody>
</table>
</div>
    )
}
export default TransactionCard
