import Link from 'next/link';


import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer(){



    return(

        <div className=" block p-4 bg-secondary text-cultured w-auto text-center">
           
            <h1 className='text-2xl p-2 font-bold'>“allyours” is different.</h1>
           <div className='text-xs'>
            <p className="text-pretty">Target small leaders and soloists
            who wish to pursue their own individual projects in art, design, and education.</p>
           </div>
             <button className='text-xl p-2 font-bold'>Join Us</button>
             <p className='text-xs text-pretty'> & be the one to get it all. </p>
           
           <div className='xs:flex xs:flex-col xs:my-2 xs:items-center sm:flex-row sm:justify-between '>
                <Link href="#" className="my-2">allyours11.mm@gmail.com</Link>
                            <div className="flex gap-4">
            <Link href="#" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6 " />
            </Link>
            <Link href="https://www.facebook.com/share/RD4EsjE6CeMEKBLh/?mibextid=wwXIfr" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 " />
            </Link>
            <Link href="https://www.instagram.com/allyours_mm" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 " />
            </Link>
            </div>
           </div>
        </div>
    )
}