import React from 'react'
import logo from './mylogo.jpg'
const HomeRepairs = () => {

    const repairs = [
        {
            name:"ac repair",
            img:logo
         },
         {
            name:"plumber",
            img:logo
         },
         {
            name:"bathroom cleaning",
            img:logo
         },
         {
            name:"drilling",
            img:logo
         },
         {
            name:"ro",
            img:logo
         },
         {
            name:"smart techs",
            img:logo
         }
    ]
  return (
    <div className='m-5'>
      <div className='container mt-5'>
        <div className='row'>
            <div className='h2 col-12' >home repairs</div>
        </div>
       </div>

        <div className='  container-fluid overflow-scroll'>
            <div className='d-flex p-2'>
            {repairs.map(e=><div className=' col-sm-3 col' key={e.name}> 
                <img src={e.img } style={{width:"200px"}} alt='repairs'></img> <br/>
                {e.name}
            </div>)}
         </div>
      </div>
   </div>
  )
}

export default HomeRepairs
