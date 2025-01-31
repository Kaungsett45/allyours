
"use client"

import SlideUp from "@/components/slideupanimation";
export default function Supportus(){

    return(

        <SlideUp>
        <div className=" mt-10 bg-cultured">
             <h1 className='md:text-3xl   p-4 text-center font-bold text-4xl xs:text-2xl text-pureb tracking-wider'>Join Hands with allyours</h1>
            
            {/**partnarship & donation part */}
             <div className="m-4 pb-6 flex justify-center gap-4 flex-wrap text-pureb">
                        

            <div className="max-w-sm p-6 bg-cultured border rounded-lg shadow-md">
                🤝 <h5 className="mb-2 text-2xl font-semibold tracking-tight ">Partnership Opportunities</h5>
               
                <p className="text-pretty mb-3 font-normal ">At allyours, we believe in the transformative power of collaboration. Partnering with us means contributing to initiatives that promote creativity, education, and sustainability in the communities. Together, we can foster innovation, build equitable futures, and create lasting impact.</p>
                <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                    Email us
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor"  strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </div>

            <div className="max-w-sm p-6 bg-cultured  border rounded-lg shadow-md">
            ❤️ <h5 className="mb-2 text-2xl font-semibold tracking-tight ">Donation Details</h5>
               
                <p className="text-pretty mb-3 font-normal 0">Your support can make a difference. Whether it's a financial contribution, in-kind support, or sponsorship, your generosity helps us provide tools, workshops and opportunities to the communities and passionate individuals. Together, we can catalyze change and empower the leaders of tomorrow.</p>
                <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                    Email us
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor"  strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </div>

             </div>
        </div>
        </SlideUp>

    )
}