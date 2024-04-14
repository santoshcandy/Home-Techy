import React from 'react'

const Services = ({ser,cart,setCart}) => {
  function handleclick(e){
    console.log(ser.list)

    if(ser.list!==setCart([...cart])){
      setCart([...cart,ser])
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
    <div>
       <div className='row mb-0 m-1 bg-white h6 border-bottom border-dark p-2' key={ser.id}>
                <div className='col '>
                         {ser.name}
                    </div>
                            <button className='col-1 btn btn-warning p-0 px-2 addbtn' onClick={handleclick}>{ser.btn}</button>
                </div> 
    </div>
  )
}

export default Services
