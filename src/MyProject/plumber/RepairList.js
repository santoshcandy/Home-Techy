import React from 'react'

const RepairList = ({fault,cart,setCart}) => {
  
    const addActionBtn = (e)=>{
         if(fault.id!==setCart([...cart])){
          setCart([...cart,fault])
        }else{
          alert(cart.name + "already add")

        }
        let element = e.target.parentElement;
        let btnname = element.querySelector(".addbtn");
        btnname.innerHTML ="selected"
        btnname.classList.remove("btn-warning")
        btnname.classList.add("btn-success")

    }

  return (

    <div className='col-md-3 col-sm-4 ms-0 mb-4  ' key={fault.id} style={{margin:"auto"}}>
            <img src={fault.src} className='img' alt='plumber' style={{width:'120px',height:"120px",margin:"20px"}}/>
            <div className='h6 col px-5'> {fault.name}</div>
            <div className='h6 px-5 '>RS.<span className='price'>{fault.price}</span>/-</div>
            {
            fault.id===cart.id? <button className='btn btn-danger addbtn ' style={{margin:"0 40px"}} onClick={addActionBtn}  >remove</button>: <button className='btn btn-warning addbtn ' style={{margin:"0 40px"}} onClick={addActionBtn}  >{fault.btn}</button>
            }

      </div>)
  
}

export default RepairList
