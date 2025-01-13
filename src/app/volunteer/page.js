

import Image from 'next/image';
import Link from "next/link";
export default function Volunteer(){



    return(

        <div className=" xs:py-2 xs:my-2 bg-gray-50  flex flex-col items-center lg:px-4 lg:py-6 ">
      
         <h1 className='md:text-3xl  xs:text-2xl font-bold text-4xl  tracking-wider text-secondary'>Welcome to allyours</h1>
         
        <p className="xs:text-md lg:text-lg text-eg mb-6 text-center">
          Where co-learning is not limited to anyone.
        </p>
      
       { /* Volunteer  Section */}
        <div className="xs:p-2  lg:p-6  w-full max-w-3xl">
          <div className='flex justify-center'>
            <Image src="/volunteer.png" alt="volunteer"   width={150}  height={100} />
          </div>
          <h2 className="text-2xl font-semibold text-secondary text-center mb-4">Volunteer with Us</h2>
          <p className="text-center text-secondary text-pretty mb-6">
            allyours offers volunteer opportunities regularly to those who wish to support specialists and community events, gaining hands-on experience.
          </p>
          
            { /* Learn  Section */}
            <div className="flex justify-center">
            <Link href="#" className='mb-2  mt-8 text-pureb border-2 bg-cultured border-bluetx  px-10 py-2 rounded-full font-bold'>
              Apply 
            </Link>
            </div>
            <p className="pt-1  text-center">
              <a href="/learn-more" className="text-primary underline hover:text-blue-700">Not ready? We’ll be here.</a>
            </p>
        </div>
      
         {/* /* Contact  Section
        <div className="mt-8 bg-gray-100 rounded-lg p-4 sm:p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">For Inquiry</h3>
          <p className="text-gray-600">allyours11.mm@gmail.com</p>
        </div> */ }
      </div>
      

    )
}