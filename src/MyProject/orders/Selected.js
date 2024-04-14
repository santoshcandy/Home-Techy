 import AmountCounter from "./AmountCounter";

 


const Selected = ({cart}) => {
  
    // let  {selecteditemsdetails} = props
    // let {name , price } = selecteditemsdetails
    // console.log(selecteditemsdetails.map(e=>e.name))
   

  return (
    <div className=' container'>
     
 {/* {item.map(e=><>e.name</>)} */}
 <div className='row'>
  <table>
   {cart.map(e=>(
     
          <AmountCounter added={e} key={e.id} />
    ))}

</table>
    </div>
</div>
  )
}

export default Selected
