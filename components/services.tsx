import { Element } from "react-scroll";
import {FaHotel} from "react-icons/fa";
import {MdFoodBank} from "react-icons/md";
import {MdHealthAndSafety} from "react-icons/md";
import {GiUbisoftSun, GiWorld} from "react-icons/gi";
import {FaPlane} from "react-icons/fa";
import {GiMountains} from "react-icons/gi";

function Services(){
    return(
        <Element id="services" name="services">
        <div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
            <h1 className="text-indigo-900 text-6xl font-bold text-center">
               SERVICES
            </h1>
            <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
                <div className="flex  flex-col justify-center items-center">
                    {/* first block */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <FaHotel className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                        <h2 className="text-xl text-indigo-600 font-semibold">
                        Affordable Hotels
                        </h2>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                    </p>
                </div>

                {/* second block */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center cursor-pointer">
                        <MdFoodBank className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                        <h2 className="text-xl text-indigo-600 font-semibold">
                        Food And Drinks
                        </h2>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center cursor-pointer">
                        <MdHealthAndSafety className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                        <h2 className="text-xl text-indigo-600 font-semibold">
                        Safty Guide
                        </h2>
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
                    <div className="flex justify-center items-center cursor-pointer">
                        <GiWorld className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                        <h2 className="text-xl text-indigo-600 font-semibold ">
                        Around The World
                        </h2>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                    </p>
                </div>

                {/* second block */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center cursor-pointer">
                        <FaPlane className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                        <h2 className="text-xl text-indigo-600 font-semibold">
                        Fastest Travel
                        </h2>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                    </p>
                </div>
                {/**third block */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center cursor-pointer">
                        <GiMountains className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                        <h2 className="text-xl text-indigo-600 font-semibold">
                        Adventures
                        </h2>
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
export default Services