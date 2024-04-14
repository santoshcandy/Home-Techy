import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <Link to="/OrderedDetails">
    <div className='container bg-primary text-light p-1 mb-5 h4 sticky-bottom' style={{letterSpacing:"4px",textShadow:"0 0 2px white , 0 0 5px white ,0 0 10px black"}}>
       book    now
    </div>
    </Link>
  )
}

export default Order
