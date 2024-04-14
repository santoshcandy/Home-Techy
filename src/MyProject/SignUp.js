 import { useNavigate } from 'react-router-dom'



const SignUp = (props) => {
    const {name,setName,cart ,total, number,setNumber} = props
 const nav = useNavigate()

    
    function handlesumbit(e){
        e.preventDefault()
        if(number.length>5){
          nav('/Summary')
        }else{
          alert('invalid input ')
        }
         console.log(name)
         console.log(number)
         console.log(cart)
         console.log(total)
       
    }
  return (
    <div className='text-center'>
      <form onSubmit={handlesumbit}>
        <table className='mt-5 mb-2' style={{margin:"auto"}}>
            <tr>
                <td>
                <label for="name" className='h6'>name:</label>

                </td>
                <td>
        <input type='text' name='name' placeholder='enter your name' className=' border border-2 border-secondary' onChange={e=>{setName(e.target.value)}}/>
        
                </td>
            </tr>

            <tr>
                <td>
                <label for="name" className='h6'>phone no:</label>
        
                </td>
                <td>
                <input type='number' name='name' placeholder='enter your number' className=' border border-2 border-secondary' onChange={e=>{setNumber(e.target.value)}}/>
           
                </td>
            </tr>
        </table>
       
      
        <div className='bg-dark text-white h6 rounded-3 px-4 by-1 ' style={{display:"inline"}}>location</div>
    <br></br>

         <input type='submit' name='name' value="confirm " 
          className='col bg-primary text-light  h5 mt-4 rounded-4' 
          style={{letterSpacing:"4px",textShadow:"0 0 2px white , 0 0 5px white ,0 0 10px black",display:"block",margin:"auto",padding:"2px 200px",border:"2px solid white"}} />
      </form>
    </div>
  )
}

export default SignUp
