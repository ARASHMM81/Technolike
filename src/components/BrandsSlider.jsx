import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: "75,000,000",
    image: "/img/iphone.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    price: "55,000,000",
    image: "/img/samsung.jpg",
  },
  {
    id: 3,
    title: "MacBook Pro",
    price: "120,000,000",
    image: "/img/macbook.jpg",
  },
];


export default function ProductSlider(){

return (

<div className="w-full">

<Swiper

modules={[
Navigation,
Pagination,
Autoplay
]}

spaceBetween={20}

slidesPerView={4}

navigation

pagination={{
clickable:true
}}

autoplay={{
delay:3000
}}

breakpoints={{

320:{
slidesPerView:1
},

640:{
slidesPerView:2
},

1024:{
slidesPerView:4
}

}}

>

{
products.map(product=>(


<SwiperSlide key={product.id}>


<div className="
bg-white
rounded-xl
p-4
shadow
">

<img

src={product.image}

alt={product.title}

className="
w-full
h-48
object-contain
"

/>


<h3 className="
mt-3
font-bold
">

{product.title}

</h3>


<p className="
mt-2
text-red-600
">

{product.price}

</p>


</div>


</SwiperSlide>


))

}


</Swiper>


</div>


)

}