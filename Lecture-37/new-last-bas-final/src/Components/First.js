import React from 'react'

let rn = Math.floor(Math.random() * 10)

let areBhaisahab = ["happy diwali" , "happy tikka" , "happy dusshera", "happy holi"];

let test;
if(rn == 5){
    test = <img src='https://plus.unsplash.com/premium_photo-1698524748767-02132ca18c68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
}else{
    test = "not matching"
}

const First = () => {
  return (
    <div>
        {/* <h1>hello from h1</h1>
        <span> { 1+2 } </span> */}
        <strong> { rn } </strong>

        {
            areBhaisahab.map((item , index)=>{ 
                return <li key={index} > {index}: {item} </li>
            })
        }

        {test}
        
        {/* {
            (rn == 5) ? <img src='https://plus.unsplash.com/premium_photo-1698524748767-02132ca18c68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> : "not matching"
        } */}


        {/* <p>hello from p</p> */}
       
    </div>
  )
}

export default First