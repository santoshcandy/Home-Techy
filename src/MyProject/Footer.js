import React from 'react'
 const Footer = () => {
  return (
    <div className='m-5 p-5 ' style={{backgroundColor:"rgb(0,0,0,0.3)"}}>
 
        <div className='h1 col-5 mt-5 text-light'>
            your most welcome
        </div>

    <div className='container border border-3 shadow p-5'  >
        <div  className='row'>
            <div className='col-sm-6 col border-end'>
                <div className='h3 border-bottom'> company</div>
                <ul className='list-group '>
                    <li className='list-group-item border-0' >home</li>
                    <li className='list-group-item border-0'>about</li>
                    <li className='list-group-item border-0'>privecy</li>
                    <li className='list-group-item border-0'>policy</li>
                    <li className='list-group-item border-0'>toll free</li>
                    <li className='list-group-item border-0'>help</li>

                </ul>
            </div>

            <div className='col col-sm-6'>
            <div className='h3 border-bottom'> welcome partner</div>
                <ul className='list-group' >
                    <li className='list-group-item border-0'>partner</li>
                    <li className='list-group-item border-0'>offers</li>
                    <li className='list-group-item border-0'>benifit</li>
                    <li className='list-group-item border-0 '>bonus</li>
                 </ul>
            </div>

            </div>
             
        </div>
      
    </div>
    
  )
}

export default Footer
