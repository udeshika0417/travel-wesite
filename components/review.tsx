import { Element } from "react-scroll";
import pic1 from "../public/pic1.png";
import pic2 from "../public/pic2.png";
import pic3 from "../public/pic3.png";
import pic4 from "../public/pic4.png";
import Image from "next/image";

function Review(){
    return(
        <Element id="review" name="review">

        <div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
            <h1 className="text-indigo-900 text-6xl font-bold text-center">REVIEW</h1>
            {/**First grid */}
            <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
                <div className="flex  flex-col justify-center items-center">
                    {/* first block */}
                    <h2 className="text-xl text-indigo-600 font-semibold">John Deo </h2>
                   <div className="rounded w-80 h-60 shadow-xl relative">
                        <Image src={pic1} alt="pic1" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                    </div>
                    
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                    </p>
                </div>

                {/* second block */}
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl text-indigo-600 font-semibold">Peter Hray </h2>
                    <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic2} alt="pic2" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                    </p>
                </div>
           
            </div>

            {/* second grid */}
            <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
                <div className="flex flex-col justify-center items-center">
                    {/* first block */}
                    <h2 className="text-xl text-indigo-600 font-semibold ">Hozzain Gray</h2>
                    
                    <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic3} alt="pic3" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                    </div>
                       <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                    </p>
                </div>

                {/**Second block */}
                <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl text-indigo-600 font-semibold">joseph Key </h2>
                    <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic4} alt="pic4" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                    </p>
                </div>
          
            </div>
        </div>
    </Element>
    );
}
export default Review
               
