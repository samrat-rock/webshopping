import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
function Header() {
  return (
    <>
       <section className="text-center">
        <div className="bg-[#663D1D]  text-white p-4">
        <h2><span className="bg-yellow-500">Spring Special!</span> Festive Sale! <span className="bg-yellow-500">Enjoy 20% OFF</span> Use Code:<span className="bg-yellow-500"> "NY23Festiv20"</span> <button className="bg-[#4A2103]  p-1">Buy Now</button></h2>
       
      </div>
      <div className="bg-[#2A2A2A] text-white p-3">
      <h2>Up to <span className="bg-yellow-500">70% Discount</span> on Fashion collection for this week<button className="p-1">Get Now</button> </h2>
      </div>
    </section>

    <section>
      <div className="container flex bg-[#E6E6E6] p-4 justify-between mx-auto rounded-b-lg">
          <ul className="flex gap-3">
            <li><Link href="/aboutus">Aboutus </Link></li>
            <li><Link href="/myaccount">myaccount </Link></li>
            <li><Link href="/wishlist">wishlist </Link>Wishlist</li>
            <li><Link href="/Checkput">Checkout</Link></li>
          </ul>
        
          <h2 className="flex gap-2 text-[18px]"><FaPhoneAlt className="text-red-400 p-1 text-2xl "/>Need help? Call us:<strong>917-991-9010</strong></h2>
        </div>
      
    </section>
   
      <section>
       <div className="container mx-auto flex justify-start">
        <div>
          <img src="https://page.themespride.com/woocommerce-shopping-cart/wp-content/themes/woocommerce-shopping-cart-pro/assets/images/logo.png"/>
        </div>
        <div></div>
        <div className=" items-center " >
          <ul className="flex gap-2 text-2xl py-[30px] pl-[200px]">
            <li class="hover:border-b-2  border-red-400 p-5 " ><Link href="/">Home</Link>  </li>
            <li class="hover:border-b-2 border-red-400 p-5" ><Link href="/aboutus">Blog</Link></li>
            <li class="hover:border-b-2 border-red-400  p-5" ><Link href="/aboutus">Page </Link></li>
            <li class="hover:border-b-2 border-red-400 p-5" ><Link href="/aboutus">Shop </Link></li>
            <li class="hover:border-b-2 border-red-400  p-5" ><Link href="/aboutus">contact</Link></li>
            <button className="bg-[#E30046] py-5 text-white"><Link href="/aboutus">Buy Now</Link></button>
          </ul>
        </div>
       </div>
      </section>
    </>
  )
}

export default Header
