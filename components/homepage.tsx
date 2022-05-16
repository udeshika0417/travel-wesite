import React from "react";
import Image from "next/image";
import pic1 from "../public/g-2.jpg";

function Homepg(){
    return(
        <div>
        <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
            <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
                <Image src={pic1} alt="pic1" layout="fill" objectFit="cover" 
                className="rounded-full cursor-pointer hidden md:block"></Image>

            </div>
            <div className="flex flex-col md:ml-20 mx-10 mt-10">
                <h1 className="font-bold text-7xl text-left mb-5">
                 <span className="text-indigo-900">ADVENTURE</span> IS WORTHWHILE</h1>
                 <h2 className="text-left font-5xl normal mb-5 flex-wrap">Discover New Places With Us, Adventure Awaits</h2>

                    <a href="#" className="font-semibold text:center text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60  text-lg hover:bg-black">Discover More</a>
            </div>

        </div>
        </div>
    )
}
export default Homepg