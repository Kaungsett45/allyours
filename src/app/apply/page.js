
import Image from 'next/image';

import Link from "next/link";
export default function Apply() {
    return (
      <>
     <div className='bg-gray-100'>
            <div className='  lg:mx-auto lg:max-w-screen-lg mt-4'>
              
                      <section className="p-8 text-center">
                      <h1 className='md:text-3xl font-semibold xs:text-2xl lg:text-4xl  tracking-wider text-secondary'>Welcome to allyours</h1>
            <p className="text-md mt-2">The perfect haven for small project leaders, soloists like you.</p>
            <hr className="my-4 border-primary w-1/3 mx-auto" />

            <h2 className="uppercase xs:text-md md:text-lg lg:text-xl font-semibold  inline-block py-2 px-4 rounded">
              Prerequisite
            </h2>
            <p className="">An applicant should have a history of completing a project which falls into one of the categories mentioned below.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2 p-4 border rounded-lg shadow-md">
                <span className="text-blue-500 text-2xl">📄</span>
                <span>Research articles</span>
              </div>
              <div className="flex items-center gap-2 p-4 border rounded-lg shadow-md">
                <span className="text-blue-500 text-2xl">🌍</span>
                <span>Self-funded community projects</span>
              </div>
              <div className="flex items-center gap-2 p-4 border rounded-lg shadow-md">
                <span className="text-blue-500 text-2xl">🎨</span>
                <span>Creating artworks for your own sake</span>
              </div>
              <div className="flex items-center gap-2 p-4 border rounded-lg shadow-md">
                <span className="text-blue-500 text-2xl">🖌️</span>
                <span>Illustrative design series</span>
              </div>
            </div>
            <div className='mt-6 text-egw   font-bold'>
            <Link href="#" className=" px-8 py-2 rounded-full bg-secondary border-white border-2">
              Apply 
            </Link>
            </div>
            <p className="mt-2">
              Not ready to apply? <a href="/learn-more" className="text-primary underline hover:text-blue-700">Learn More</a>
            </p>
          </section>
      </div> 
    </div>
    </>
    );
  }
  