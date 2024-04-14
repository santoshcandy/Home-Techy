import React, { createContext, useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import HomeTechOfficial from './HomeTechOfficial'
 import Plumber from './plumber/Plumber'
import OrderedDetails from './orders/OrderedDetails'
import Summary from './Summary'
import SignUp from './SignUp'
import Elepage from './bypages/Elepage'
import Acpage from './bypages/Acpage'
import CarpenderPage from './bypages/CarpenderPage'
import PestControl from './bypages/PestControl'
import Painterpage from './bypages/Painterpage'
import Mason from './bypages/Mason'
import Engneers from './bypages/Engneers'
import Contractors from './bypages/Contractors'
import Banner from './bypages/Banner'

 export const Pro = createContext();
const LinksCheack = () => {
  const [name,setName] = useState("")
    const [number,setNumber]= useState("")
  const [cart , setCart] = useState([])
 const [counter,setCounter]= useState(1)
  const[total,setTotal]=useState()

  return (
    <div>
      
      <br/>


        <Pro.Provider value={{counter,setCounter,total,setTotal,cart,setCart}}  >
      <Routes>

      <Route path="/" element={<HomeTechOfficial cart={cart} />} />

      <Route path="/Plumber" element={<Plumber cart={cart} setCart={setCart}/>} />

      <Route path="/OrderedDetails" element={<OrderedDetails cart={cart} setCart={setCart} setName={setName} number={number} setNumber={setNumber}  total={total} setTotal={setTotal}  />} />

      <Route path="/Summary" element={<Summary cart={cart} name={name} setName={setName} number={number} setNumber={setNumber}  total={total} setTotal={setTotal}  />}/>

      <Route path="/account" element={<SignUp  total={total} setTotal={setTotal}  cart={cart}  name={name} setName={setName} number={number} setNumber={setNumber}/>}/>
      
      <Route path='/elactricinan' element={<Elepage cart={cart} setCart={setCart}/>}/ >
     
      <Route path='/ac-technician' element={<Acpage cart={cart} setCart={setCart}/>}/ >

      <Route path='/carpenter' element={<CarpenderPage cart={cart} setCart={setCart}/>}/ >

      <Route path='/pest-control' element={<PestControl cart={cart} setCart={setCart}/>}/ >

      <Route path='/painter' element={<Painterpage cart={cart} setCart={setCart}/>}/ >

      <Route path='/mason' element={<Mason cart={cart} setCart={setCart}/>}/ >

      <Route path='/engneers' element={<Engneers cart={cart} setCart={setCart}/>}/ >

      <Route path='/Banner' element={<Banner cart={cart} setCart={setCart}/>}/ >

      <Route path='/contractors' element={<Contractors cart={cart} setCart={setCart}/>}/ >

      </Routes>
      
        </Pro.Provider>
    </div>
  )
}

export default LinksCheack
