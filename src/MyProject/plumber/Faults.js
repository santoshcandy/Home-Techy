import React, {  useState } from 'react'
import image from "../imagenumber1.jpg"
import Selected from '../orders/Selected'

 
let selecteditemsdetails = []
const Faults = () => {


    const faults = [
        {
            id:1,
            name:"nozzle",
            src:image,
            price:149,
            btn:"select"
        },
        {
            id:2,
            name:"tap fitting",
            src:image,
            price:219,
            btn:"select"
        },
        {
            id:3,
            name:" tap leakage",
            src:image,
            price:199,
            btn:"select"
        },
        {
            id:4,
            name:"shower",
            src:image,
            price:199,
            btn:"select"
        },
        {
            id:5,
            name:"conation hoce",
            src:image,
            price:179,
            btn:"select"
        },
        {
            id:6,
            name:"wall-mounted wc",
            src:image,
            price:1399,
            btn:"select"
        },
        {
            id:7,
            name:" indian-closet",
            src:image,
            price:1399,
            btn:"select"
        },
        {
            id:8,
            name:"wash-basin",
            src:image,
            price:349,
            btn:"select"
        },
        {
            id:9,
            name:" wc-seat-cover",
            src:image,
            price:299,
            btn:"select"
        },
        {
            id:10,
            name:" wc-tank-repair",
            src:image,
            price:349,
            btn:"select"
        },{
            id:11,
            name:"wc-rank-replace",
            src:image,
            price:449,
            btn:"select"
        },
        {
            id:12,
            name:" diverter",
            src:image,
            price:1199,
            btn:"select"
        },
        {
            id:13,
            name:" flush-valve",
            src:image,
            price:1099,
            btn:"select"
        },
        {
            id:14,
            name:" over-head-tank",
            src:image,
            price:999,
            btn:"select"
        },
        

    ]
const [item,setItem]=useState({name:"selected services is"})

function Action(e){
    e.preventDefault()
    let element = e.target.parentElement;
    let btnname = element.querySelector(".btn");
    btnname.innerHTML ="selected"
    btnname.classList.remove("btn-warning")
    btnname.classList.add("btn-success")
    let itemname = element.querySelector(".name").innerHTML;
    let itemprice = element.querySelector(".price").innerHTML;
    itemprice=Number(itemprice)
    let itemimg = element.querySelector(".img").src;
    
     
    setItem((ps)=>{
        return{...ps,  
            name:itemname,
            price:itemprice,
            image: itemimg
        }
    })
    
    
}

alt()

function alt(){
    if(selecteditemsdetails.find((n)=>n.name ===item.name)){
        alert("already selected why")
    }else{

        selecteditemsdetails.push(item)
    }  
 
console.log(selecteditemsdetails)
}

  return (
    <div className='container'>
    <div className='col-12 border border-3 border-dark mt-5 p-2 bg-white text-danger h1' style={{letterSpacing:"4px",textShadow:"0 0 3px rgb(0,0,0,0.4)"}}>
     by separate faults
    </div>
    <div className='row '>
      {faults.map(e=><div className=' col col-md-3 col-sm-4  mb-4' key={e.id}>
            <img src={e.src} className='img' alt='plumber'/>
            <div className='h5 name'>{e.name}.</div>
            <div className='h6'>RS.<span className='price'>{e.price}</span>/-</div>

                <button className='btn btn-warning' onClick={Action}>{e.btn}</button>

      </div>)}

    </div>
    <Addeditems.Provider  selecteditemsdetails={selecteditemsdetails}>
<Selected/>
    </Addeditems.Provider>
 </div>
  )
}

export default Faults
