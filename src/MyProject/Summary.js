import { useNavigate } from "react-router-dom"

 
const Summary = (props) => {
    const {name,cart ,total, number} = props
  const   navigete = useNavigate()
function tohomepage(){
    navigete("/")
}
   return (
    <div className='container '> 
    {   cart.length===0?
   <>
    <div className='h2 col-12 text-danger'> technician booking has been failed</div>
    <div className="h5 text-white p-3 bg-warning"> please select any works </div>
    <button className="bg-dark text-white py-1 px-5" onClick={tohomepage}> back to home</button>
   </>
    :

        <div className='row'>
            <div className='h2 col-12 text-success'> technician booked successfully</div>
        <div className='h3 col-12 border-bottom border-dark'>booking Summary</div>
         <table className='h6 col-6 text-start' style={{margin:"auto"}}>
            <tr>
                <td> name :</td>
                <td> {name}</td>

            </tr>
            <tr>
                <td> phone no:</td>
                <td> {number }</td>

            </tr>
         </table>

        <table className='text-start col-7' style={{margin:"auto"}}>
                {cart.map(e=>(
                    <tr>
                        <td><img src={e.src} alt='pics' style={{ width: "40px" }} /></td>
                        <td className='h6'> {e.name} ({}).</td>

                        <td className='h5' > RS.{e.price} /-</td>

                    </tr> 
                ))}
        </table>
         <table className='h6 col-6 text-center bg-primary text-white p-2 rounded ' style={{margin:"auto"}}>
            <tr className='m-3'>
                <td className='p-3'> total price:</td>
                <td className='p-3'> RS.{total} /-</td>
            </tr>
         </table>
        </div>    
}  
    </div>
  )
}

export default Summary
