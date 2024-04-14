import {  useContext, useState } from "react"
import { Pro } from "../LinksCheack"
 
 
const AmountCounter = ({added}) => {
  const {cart } = useContext(Pro)
  const [counter,setCounter] = useState(1)
    function  inCrease(){
      
    console.log(added.list)
    setCounter(counter+1)
  }
  function decrease(){
    setCounter(counter>1?counter-1:1)
  }
  return (
    <>
   {   added.list===true  ?    <tr className=' col-md-12 add text-start' key={added.id}>
    <td>
     </td>
    <td>
      <ul>
        
    <li className='h5 mx-3 my-1'> {added.name}  </li>
      </ul>

    </td>
        </tr>
       :  cart.list!==true
            ?
    
    <tr className='col-md-12 add text-start' key={added.id}>
    <td>
      <img  src={added.src} alt="lists" style={{width:"80px",  height:"80px",margin:"auto"}}/>
    </td>
    <td>
    <span className='h5 mx-3'> {added.name}  :</span>
    </td>
    <td>
    <span className='h6 mx-3'> rs.{added.price*counter}/-</span> 
    </td>
    <td>
     <span> <button className=' btn btn-warning px-2 py-0 debtn' onClick={decrease}> - </button></span>
    <span className='h5 mx-1'> {counter} </span>
    <span><button className='btn btn-success px-2 py-0 inbtn' onClick={inCrease}> + </button></span>
    </td>
    </tr>
    : <h3> some thing wroung</h3>
  } 
  </>
  )
}

export default AmountCounter

















