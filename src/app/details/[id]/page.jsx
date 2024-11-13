"use client"
import Link from "next/link"
import { useParams } from "next/navigation"


async function details(){
    let {id}= useParams()
    let catdata = await fetch (`https://dummyjson.com/products/${id}`)
    let catlist = await catdata.json()

    return(
        
        <div className="container mx-auto py-5">
            <h2 className="py-5"><span className="font-bold"> Details </span>{id}</h2>
            <div className="py-5">
               <h2>{catlist.title}</h2>
               <img src={catlist.thumbnail} alt="" />
               <h3>price:{catlist.price}</h3>
               <p>{catlist.description}</p>
            </div>
            </div>
        
    )
}

export default details