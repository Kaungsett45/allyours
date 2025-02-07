
"use client"

import SlideUp from "@/components/slideupanimation";
import Link from "next/link";
export default function Apply() {
    return (
      <>
      <SlideUp>
     <div className='bg-gray-100'>
            <div className='  lg:mx-auto lg:max-w-screen-lg mt-4'>
              
                      <section className="p-6 m-2 text-center">
                      <h1 className='md:text-3xl font-semibold xs:text-2xl lg:text-4xl  tracking-wider text-secondary'>Welcome to allyours</h1>
            <p className="text-md mt-2">The perfect haven for small project leaders, soloists like you.</p>
            <hr className="my-4 border-primary w-1/3 mx-auto" />

            <h2 className="uppercase xs:text-md md:text-lg lg:text-xl font-semibold  inline-block py-2 px-4 rounded">
              Prerequisite
            </h2>
            <p className=""> An applicant should have a history of completing a project or a committed project which falls into one of the categories mentioned below.</p>

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
            <div className='mt-12 text-egw   font-bold'>
            <Link href="https://allyours.fillout.com/t/x1SrEBquRXus" className="mb-2  text-pureb border-2 bg-cultured border-bluetx  px-10 py-3 rounded-full font-bold">
              Apply 
            </Link>
            </div>
            {/* <p className="mt-2 p-4">
               <a href="/learn-more" className="text-primary underline hover:text-blue-700">Not ready? We’ll be here. </a>
            </p> */}
          </section>
      </div> 
    </div>
    </SlideUp>
    </>
    );
  }
  