import React from 'react'
const NameCheck=(props)=>{
    console.log(props.value) 
   const message=<p style={{color:'red',paddingTop:30}}>Name exist in SDN List. Do Not proceed Transaction!!</p>
    if (props.value && props.nstatus===1)
  return <div>{message}</div>
  if(props.value===false && props.nstatus===1)
  return <div style={{color: 'green',paddingTop:30}}>Name Verified!!</div>
  return <div></div>
}
export default NameCheck