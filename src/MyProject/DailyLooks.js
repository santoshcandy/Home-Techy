import React from 'react'
import painter1 from "./painter.png"
const DailyLooks = () => {
        const looks = [
            {
                name:"ac cleanig",
                price: 199,
                src:painter1
            },
            {
                name:"all cleanig",
                price: 299,
                src:painter1
            },
            {
                name:"plumber",
                price: 149,
                src:painter1
            },
            {
                name:"wedding designs",
                price: 449,
                src:painter1
            },
            {
                name:"photo grapy",
                price: 1449,
                src:painter1
            }
        ]

  return (
    <div className='container'>

        <div className=' row shadow h2 mt-5 p-3 text-center' >
         <div className='col-12'>   Daily Looks</div>
        </div>

    <div className=' container-fluid  overflow-scroll border border-3 rounded-3 m-3' >
      <div className='d-flex p-2'>
{ looks.map((e)=><div className='col-sm-4 col me-3' key={e.name}> 
<img src= {e.src} alt='details' style={{width:"150px"}}></img> <br/> 
<span className='h4 '>{e.name} <br/> 
</span>
<span className='h6 '> starts from {e.price}
</span>
 </div>)}
      </div>
    </div>
    </div>
  )
}

export default DailyLooks
