"use client"
import Link from "next/link"
import { useParams } from "next/navigation"


async function categories(){
    let {cid}= useParams()
    let catdata = await fetch (`https://dummyjson.com/products/category/${cid}`)
    let catlist = await catdata.json()

    return(
        
        <div className="container mx-auto py-5">
            <h2 className="py-5"><span className="font-bold">categories </span>{cid}</h2>
            <div className=" flex flex-wrap gap-4">
                {catlist.products.map((a)=>(
                    <div className="w-[300px] border p-3 text-center" key={a.id}>
                        <img className="h-[300px]" src={a.thumbnail}/>
                        <Link href={`/details/${a.id}`}>{a.title}</Link>
                        <h2>{a.price}</h2> {a.brand}{a.rating}<h3>{a.tags}</h3>
                    </div>
                ))}
            </div>
            </div>
        
    )
}

export default categories