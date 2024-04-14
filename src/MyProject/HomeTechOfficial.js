import Header from './Header'
import MenuBar from './MenuBar'
import Popular from './Popular'
import Rights from './Rights'
import DailyLooks from './DailyLooks'
import HomeRepairs from './HomeRepairs'
import Footer from './Footer'
import Order from './Order'
import imagenumber1 from "./imagenumber1.jpg"
import PlumberTechDetails from './plumber/PlumberTechDetails'
import plu from './image/homeimages/plumbers.jpg'
import  acmech from './image/homeimages/acclean.jpg'
import banner from './image/homeimages/banner.jpg'
import carpenter from './image/homeimages/carpenter.jpg'
import catering from './image/homeimages/catering.jpg'
import decorator from './image/homeimages/decorator.jpg'
import contractor from './image/homeimages/contractor.jpg'
import tvmech from './image/homeimages/tvmech.jpg'
import engneer from './image/homeimages/engneer.jpg'
import flag from './image/homeimages/flag.jpg'
import mason from './image/homeimages/mason.png'
import pestcontrol from './image/homeimages/pestcontrol.png'
import puncher from './image/homeimages/puncher.jpg'
// import smart from './image/homeimages/smart.jpg'
import spa from './image/homeimages/spa.jpg'
import supermarket from './image/homeimages/supermarkert.jpg'
import cleaning from './image/homeimages/tvmech.jpg'
import painter from './image/homeimages/painter.png'



const HomeTechOfficial = ({cart}) => {

   const nameList = [
    {
        name:"carpenter",
        src:carpenter
    },
    {
        name:"pest-control",
        src:pestcontrol

    },
    {
        name:"ac-technician",
        src:acmech

    },
    {
        name:"plumber",
        src:plu

    },
    {
        name:"elactricinan",
        src:imagenumber1

    },
    {
        name:"painter",
        src:painter

    },
    {
        name:"sap",
        src:spa

    },
    {
        name:"mason",
        src:mason

    },
    {
        name:"pvc-doors",
        src:carpenter

    },
    {
        name:" cleaning",
        src:cleaning

    },
    {
        name:"engneers",
        src:engneer

    },
    {
        name:"contractors",
        src:contractor

    },
    {
        name:"decorators",
        src:decorator

    },
    {
        name:"catrings",
        src:catering

    },
    {
        name:"banner",
        src:banner

    },
    {
        name:"streetflag",
        src:flag

    },
    {
        name:"mechanic",
        src:acmech

    },
    {
        name:"puncher",
        src:puncher

    },
    {
        name:"super-market",
        src:supermarket

    },
    {
        name:"TV..mech",
        src:tvmech

    }
];
const details = [
    {
        id:1,
        name:"santhosh",
        catogery:"electricain",
        location:"perambur",
        complitions:200,
        rate:4.4
    },
    {
        id:2,
        name:"parthiban",
        catogery:"electricain",
        location:"perambur",
        complitions:200,
        rate:4.4
    },
    {
        id:3,
        name:"surendhar",
        catogery:"electricain",
        location:"perambur",
        complitions:200,
        rate:4.4
    },
    {
        id:4,
        name:"dinesh",
        catogery:"electricain",
        location:"perambur",
        complitions:200,
        rate:4.4
    },
    {
        id:5,
        name:"harish",
        catogery:"electricain",
        location:"perambur",
        complitions:200,
        rate:4.4
    },
    {
        id:6,
        name:"dhana",
        catogery:"electricain",
        location:"perambur",
        complitions:200,
        rate:4.4
    },
  
  ]
  return (
    <div>
        <Header/>
        <MenuBar cart={cart}  />
        <Popular nameList={nameList}/>
        <DailyLooks/>
        <HomeRepairs/>
        <Order/>
        <PlumberTechDetails details={details}/>
        <Footer/>
        <Rights/>
     </div>
  )
}

export default HomeTechOfficial
