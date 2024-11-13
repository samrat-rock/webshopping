import { FaLongArrowAltRight } from "react-icons/fa";
import { CATEGORIES } from "./data";
import Link from "next/link";
import Productby from "./component/ProductBy";
import Slider from "./component/Slider";

function Home(){
  return(
    <>
      <section>
        <div className="container mx-auto flex gap-5">
         <div className="bg-[#EFF0F2]  w-[300px] border-4">
         <button className="bg-black text-white p-3 w-[300px]">ALL CATEGORIES</button>
          <ul className="h-[500px] scroll-auto overflow-auto">
           
           {CATEGORIES.map((item)=>(
            <li className="border border-b-black p-3  ">
              <Link className="flex justify-between" href={`/categories/${item}`}>{item}<FaLongArrowAltRight /></Link></li>
              
           ))}



          </ul>
         </div>
         
         <div className="p-3 flex flex-wrap gap-5">
          <img className="w-full" src="https://page.themespride.com/woocommerce-shopping-cart/wp-content/themes/woocommerce-shopping-cart-pro/assets/images/slide/slide2.png"/>
          <div className="bg-black text-center w-full gap-6 pl-5 py-3 flex flex-wrap">
            <div className=" text-white flex  gap-4">
              <img src="https://page.themespride.com/woocommerce-shopping-cart/wp-content/themes/woocommerce-shopping-cart-pro/assets/images/iconbox/iconbox1.png"/>
              <div className="p-2" >
              <h3>FREE SHIPPING</h3>
              <p>Lorem Ipsum dolor sit</p>
              </div>

            </div>
            <div className=" text-white flex  gap-4">
              <img src="https://page.themespride.com/woocommerce-shopping-cart/wp-content/themes/woocommerce-shopping-cart-pro/assets/images/iconbox/iconbox1.png"/>
              <div className="p-2" >
              <h3>FREE SHIPPING</h3>
              <p>Lorem Ipsum dolor sit</p>
              </div>

            </div>
            <div className=" text-white flex  gap-4">
              <img src="https://page.themespride.com/woocommerce-shopping-cart/wp-content/themes/woocommerce-shopping-cart-pro/assets/images/iconbox/iconbox1.png"/>
              <div className="p-2" >
              <h3>FREE SHIPPING</h3>
              <p>Lorem Ipsum dolor sit</p>
              </div>

            </div>
            <div className=" text-white flex  gap-4">
              <img src="https://page.themespride.com/woocommerce-shopping-cart/wp-content/themes/woocommerce-shopping-cart-pro/assets/images/iconbox/iconbox1.png"/>
              <div className="p-2" >
              <h3>FREE SHIPPING</h3>
              <p>Lorem Ipsum dolor sit</p>
              </div>

            </div>

          </div>
          
         </div>
        </div>
      </section>
      
      <Slider/>
       <Productby abc="beauty"/>
       <Productby abc="laptops"/>
      
       <Productby abc="furniture"/>
    
    </>
  )
}
export default Home