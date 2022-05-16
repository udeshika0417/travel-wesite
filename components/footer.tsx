import {Element} from "react-scroll";
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"


function Footer(){
    return(
        <Element id="review" name="review">
        <footer>
    
    <div className="bg-sky-900 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p20">
        <div className="p-5">
            <ul>
              <p className='text-gray-400 font-bold text-3xl pb-6'>Follow Us</p>
              <div className="flex gap-6 pb-5" >
                  <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600"/>
                  <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600"/>
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-green-600"/>
                  <FaFacebook className="text-2xl cursor-pointer hover:text-red-600"/>
    
              </div>
    
            </ul>
    
        </div>
        <div className="p-5">
            <ul>
                <p className="text-gray-400 font-bold text-3xl pb-6">Branch Location</p>
                <li className="text-gray-200 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointor">India</li>
                <li className="text-gray-200 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointor">USA</li>
                <li className="text-gray-200 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointor">Japan</li>
                <li className="text-gray-200 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointor">France</li>
            
            </ul>
    
        </div>
        <div className="p-5">
            <ul>
                <p className="text-gray-400 font-bold text-3xl pb-6">Quick Links</p>
                <li className="text-gray-200 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointor">Home</li>
                <li className="text-gray-200 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointor">Services</li>
                <li className="text-gray-200 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointor">Gallery</li>
                <li className="text-gray-200 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointor">Review</li>
            
            </ul>
    
        </div>
    </div>
    <div className="flex flex-col justify-center text-center p-5 bg-black">
        <h1 className="text-gray-800 font-semibold text-white"> Created by Udeshika|| All Right Reserved...!</h1>
    </div>
    
    </footer>
    </Element>
    );
}
export default Footer