import React from 'react'

const PlumberTechDetails = ({details}) => {
   
  return (
    <div className='container g-5'>
        <div className='bg-secondary text-white h2 p-3 mt-5 shadow sticky-top'> top professional list</div>
        <div className='row'>
                {details.map(e=><div className=' col-5  m-3 g-5  p-3 text-center' key={e.id}>
                <div className='h4'>{e.catogery}</div>

                <div style={{width:"400px",height:"300px",backgroundColor:"rgb(100,55,34,0.4)"}}> </div>

                <div  className='h5'> 
                <div className='row'>
                    <div className='col-3'>name:</div>  
                    <div className='col-5'>{e.name}</div> 
                </div> 
                </div>
                <div  className='h6'> 
                <div className='row'>
                    <div className='col-3'> location :</div>  
                    <div className='col-5'>{e.location}</div> 
                </div> 
                </div>
                <div  className='h6'> 
                <div className='row'>
                    <div className='col-3'>complitions:</div>  
                    <div className='col-5'>{e.complitions}+ jobs</div> 
                </div> 
                </div>
                <div  className=''> 
                <div className='row'>
                    <div className='col-3'>ratings:</div>  
                    <div className='col-5'>{e.rate}-</div> 
                </div> 
                </div>


                </div>)}

        </div>
      
    </div>
  )
}

export default PlumberTechDetails
