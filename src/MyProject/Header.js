import React from 'react'
 const Header = () => {
  return (
    <div>
      <header className='contaiiner p-2 m-3 text-center ' style={{color:"", backgroundColor:"rosybrown"}}> 
         <div className='row p-2'>
            <div className='col-10 h2 rounded-5' style={{ fontWeight:"bolder",textShadow:"0 0 3px white,0 0 3px blue,0 0 5px ,0 0 15px white",letterSpacing:"10px"}}>Home tech</div>
            <div className='col-2 bg-white text-dark rounded-4 text-center ' style={{height:"25px"}}> as a partner</div>
         </div> 
         <div className='row'>
            <div className='col-10 h5' style={{ textShadow:"0 0 15px white,0 0 3px blue,0 0 5px ,0 0 15px white",letterSpacing:"2px"}}>official</div>
            <div className='col-2 bg-white text-dark rounded-4 text-center' style={{height:"30px"}}>sign up</div>
          </div> 
 
      </header>
    </div>
  )
}

export default Header
