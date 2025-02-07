
import Image from 'next/image';

import SlideUp from './slideupanimation';
import { FaEye, FaHandsHelping } from 'react-icons/fa';
 export default function visionmission(){

    return(
        <>
  <section className="my-12 border-green-400  p-6
  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          {/** Vision Section */}
          <div className="flex flex-col items-center justify-center text-center ">
            <div className="flex items-center justify-center mb-4">
              <FaEye className="text-gray-700 w-6 h-6 mr-2" /> {/* Vision Icon */}
              <h1 className="font-semibold text-4xl">Vision</h1>
            </div>
            <p className="py-4 text-lg/8 border-2 border-bluetx rounded-xl">
              A net-zero innovation hub that fosters creativity and education. 
              We empower individuals to thrive independently while building strong community connections.
            </p>
            {/* <Image 
              src="/ourworks/laidback.webp" 
              alt="Works" 
              width={420} 
              height={120} 
              className="rounded-sm mx-auto"
            /> */}
          </div>

    
          {/** Mission Section */}
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <FaHandsHelping className="text-gray-700 w-6 h-6 mr-2" /> {/* Mission Icon */}
              <h1 className="font-bold text-4xl tracking-wider text-secondary">Mission</h1>
            </div>
            <p className="mb-4">
              Empower small project leaders by providing:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
              <button className="rounded-lg py-2 px-4 border-2 border-bluetx text-pureb">
                Co-working
              </button>
              <button className="rounded-lg py-2 px-4 border-2 border-bluetx text-pureb">
                Co-thinking
              </button>
              <button className="rounded-lg py-2 px-4 border-2 border-bluetx text-pureb col-span-2">
                Co-learning
              </button>
              <button className="rounded-lg py-2 px-4 border-2 border-bluetx text-pureb col-span-2">
                Reliable Electricity and Internet Access
              </button>
              <button className="rounded-lg py-2 px-4 border-2 border-bluetx text-pureb col-span-2">
                Coaching and Community Building Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

 </>
    )

 }