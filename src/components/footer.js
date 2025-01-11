import Link from 'next/link';


import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer(){



    return(

        <div className=" block p-4 bg-secondary text-eg2s w-auto text-center">
           
            <h1 className='text-2xl p-2 font-bold'>“allyours” is different.</h1>
           <div className='text-xs'>
            <p className="text-pretty">Target small leaders and soloists
            who wish to pursue their own individual projects in art, design, and education.</p>
           </div>
             <button className='text-white text-xl p-2 font-bold'>Join Us</button>
             <p className='text-xs text-pretty'> & be the one to get it all. </p>
           
           <div className='xs:flex xs:flex-col xs:my-2 xs:items-center sm:flex-row sm:justify-between '>
                <Link href="#" className="my-2">allyours11.mm@gmail.com</Link>
                            <div className="flex gap-4">
            <Link href="#" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-800" />
            </Link>
            <Link href="#" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-600" />
            </Link>
            <Link href="#" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-600" />
            </Link>
            </div>
           </div>
        </div>
    )
}