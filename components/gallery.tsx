import {Element} from "react-scroll";
import Image from "next/image";
import pic1 from "../public/p-1.jpg"
import pic2 from "../public/p-2.jpg"
import pic3 from "../public/p-3.jpg"
import pic4 from "../public/p-4.jpg"
import pic5 from "../public/p-5.jpg"
import pic6 from "../public/p-6.jpg"

function Gallery(){
    return(
        <Element id="gallery" name="gallery">
        <div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
                <h1 className="text-indigo-900 text-6xl font-bold text-center">GALLERY</h1>
                <div className="md:flex sm:flex-col md:flex-row justify-center gap-10 mt-10">
                <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic1} alt="pic1" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
                <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic2} alt="pic2" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
                <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic3} alt="pic3" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
            </div>
            <div className="md:flex sm:flex-col md:flex-row justify-center gap-10 mt-10">
                <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic4} alt="pic4" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
                <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic5} alt="pic5" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
                <div className="rounded w-80 h-60 shadow-xl relative">
                    <Image src={pic6} alt="pic6" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
               
                
            </div>
        </div>        
    </Element>
    );
}
export default Gallery