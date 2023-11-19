import React, { useState } from 'react'

const Person = (props) => {
  // useState() -> hook


  let [naam , setNaam] = useState(props.name);

  // let badlahuanaam = props.name;
  function clickHandler(){
    // badlahuanaam = "bhootnath";
    // console.log(badlahuanaam);
    setNaam("harilaal") //to change the naam variable
  }

    // console.log(props)
  return (
    <div>
        <button onClick={clickHandler}>naam badal dunga</button>
        <h1>Name: { naam } </h1>
        <h4>Age: { props.age }</h4>
        <p>girlName: { props.girl }</p>
    </div>
  )
}

export default Person