  import {Link} from "react-router-dom"
  import './home.css'
  const Popular = (props) => {
 const {nameList}= props;
  return (
    <>
    <div className='container border border-3 text-center  ' style={{backgroundColor:"rgb(0,0,0,0.3)", backdropFilter:"blur(20px)"}}>
        <div className='row p-1'>
            <div className='col-12 h3 '>
                Popular needs
            </div>
        </div>
        <div className='row bg-white p-2 '>
            <div className='col-6 h4  border-end border-dark'>
                home service at your doorsteps
            </div>
            <div className='col-6 h4 '>
                 what are you looking for
            </div>
        </div>
      </div>
      <div className='container'>
      <div className='row'>
        
         {
         nameList.map(e=><Link to={e.name} className=' text-center col-sm-3 col-md-4 col-lg-3 navbar-brand mt-5 col-4' key={e.name}>
            
         <img src={e.src} alt='ele'    className="homepageimage" />

            <div className="h6 mt-2" >{e.name}</div>
            
            
            </Link>
            )
            }
         </div>
        {/* <LinksCheack linkname={linkname}/> */}
      </div>
    </>
  )
}

export default Popular
