import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = ({cart}) => {
  return (
    <div className='container text-center h5 m-6 sticky-top border border-dark' >
        <div className='row p-1 shadow-dark'>
             
            <div className='col-3 bg-secondary text-white p-1 g-6 '>
            <Link to='/'  className='navbar-brand'>
            home
            </Link>
            </div>
            <div className='col-3 bg-secondary text-white p-1 g-6 '>
            <Link className='navbar-brand' to='/'>all</Link>
              </div>
            <div className='col-3 bg-secondary text-white p-1 g-6  '>
              <Link to='/OrderedDetails' className='navbar-brand'> order</Link> 
              <span className='bg-white h6 rounded-4 text-dark p-1'>

                {cart.length===undefined? 0 :cart.length} 

                </span>
                </div>
            <div className='col-3 bg-secondary text-white p-1 g-6 '><Link className='navbar-brand' to='/account'>account</Link></div>
        </div>
    
    </div>
  )
}

export default MenuBar
