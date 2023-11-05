import React from 'react'

const Person = (props) => {
    // console.log(props)
  return (
    <div>
        <h1>Name: { props.name } </h1>
        <h4>Age: { props.age }</h4>
        <p>girlName: { props.girl }</p>
    </div>
  )
}

export default Person