import React from 'react'
import CommanRepairPage from '../CommanRepairPage'
 import bedrepair from "../image/carpenter/bedrepair.jfif"
import ceilinghangs from "../image/carpenter/ceilinghangs.jfif"
import channel from "../image/carpenter/channel.jfif"
import cupkeel from "../image/carpenter/cupkeel.jfif"
import dooracccs from "../image/carpenter/dooraccs.jfif"
import doorinstallation from "../image/carpenter/doorinstallation.jfif"
import doorrepair from "../image/carpenter/doorrepair.jfif"
import drilhang from "../image/carpenter/drillhang.jfif"
import keel from "../image/carpenter/keel.jfif"
import leg from "../image/carpenter/leg.jfif"
import lock from "../image/carpenter/lock.jfif"
import mirror from "../image/carpenter/mirror.jfif"
import rod from "../image/carpenter/rod.jfif"
import shelf from "../image/carpenter/shelf.jfif"
import slide from "../image/carpenter/slide.jfif"
import wallhange from "../image/carpenter/wallhange.jfif"
 

const CarpenderPage = ({cart,setCart}) => {

const services =[
        {
            name:"doors",
        btn:"select",
        id:1,
        list:true,
        price:0
    },
        {
            name:"drill & hang",
        btn:"select",
        id:2,
        list:true,
        price:0
    },
        {name:"ac dealers",
        btn:"select",
        id:3,
        list:true,
        price:0
},
        {name:"furniture repair",
        btn:"select",
        id:4,
        list:true,
        price:0
    },
    {name:"bed",
    btn:"select",
    id:5,
    list:true,
    price:0
    },
    {name:"cupboared",
    btn:"select",
    id:6,
    list:true,
    price:0
    }

    ]
    const fault =  [
        {
            id:1,
            name:"drill & hang",
            src:drilhang,
            price:99,
            btn:"select"
        },
        {
            id:2,
            name:"door repairs",
            src:doorrepair,
            price: 249,
            btn:"select"
        },
        {
            id:3,
            name: "kile service -2",
            src:keel,
            price: 149,
            btn:"select"
        },
        {
            id:4,
            name:"channel repair",
            src:channel,
            price: 129,
            btn:"select"
        },
        {
            id:5,
            name:"rod installation",
            src:rod,
            price: 139,
            btn:"select"
        },
        {
            id:6,
            name:"ceilling hanger",
            src:ceilinghangs,
            price:500,
            btn:"select"
        } ,
        {
            id:7,
            name:"wall hanger",
            src:wallhange,
            price:179,
            btn:"select"
        } ,
        {
            id:8,
            name:"bed channel",
            src:bedrepair,
            price:500,
            btn:"select"
        } ,
        {
            id:9,
            name:"bed legs",
            src:leg,
            price:249,
            btn:"select"
        } ,
        {
            id:10,
            name:"cupboard kile",
            src:cupkeel,
            price:99,
            btn:"select"
        } ,
        {
            id:11,
            name:"drawer channel repair",
            src:channel,
            price:179,
            btn:"select"
        } ,
        {
            id:12,
            name:" handle installation",
            src: rod,
            price:50,
            btn:"select"
        } ,
        {
            id:13,
            name:"cupboard lock",
            src:lock,
            price:200,
            btn:"select"
        } ,
        {
            id:14,
            name:"cup board lock replace",
            src:lock,
            price:200,
            btn:"select"
        } ,
        {
            id:15,
            name:"sliding door repair",
            src:slide,
            price:299,
            btn:"select"
        } ,
        {
            id:16,
            name:"shelf installation",
            src:shelf,
            price:100,
            btn:"select"
        } ,
        {
            id:17,
            name:"door accessory",
            src:dooracccs,
            price:129,
            btn:"select"
        } ,
        {
            id:18,
            name:"door installation",
            src:doorinstallation,
            price:999,
            btn:"select"
        } ,
        {
            id:19,
            name:"door lock",
            src:lock,
            price:600,
            btn:"select"
        } ,
        {
            id:20,
            name:"mirror installation",
            src:mirror,
            price:149 ,
            btn:"select"
        } 
    ]
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
     <CommanRepairPage  cart={cart} setCart={setCart} services={services} fault={fault} details={details} work={"carpenter"}/ >
  )
}

export default CarpenderPage
