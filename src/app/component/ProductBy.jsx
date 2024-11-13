import Link from 'next/link'
import React from 'react'

async function Productby(props) {
    let catdata = await fetch (`https://dummyjson.com/products/category/${props.abc}`)
    let catlist = await catdata.json()
  return (
    <>
      <section>
  <div className="container mx-auto py-3">
    <h2>Category By {props.abc}</h2>
    <div className=" flex flex-wrap gap-4">
                {catlist.products.slice(0,4).map((a)=>(
                    <div className="w-[300px] border py-3 text-center" key={a.id}>
                        <img className="h-[300px] p-2" src={a.thumbnail}/>
                        <Link href={`/details/${a.id}`}>{a.title}</Link>
                        <h2>{a.price}</h2> {a.brand}{a.rating}<h3>{a.tags}</h3>
                    </div>
                ))}
            </div>
  </div>
      </section>


  


    </>
  )
}

export default Productby
