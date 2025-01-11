
"use client"
import { FaHandsHelping, FaLeaf } from "react-icons/fa";
import { useState } from "react";
import Image from 'next/image';
import allyours from '../../../public/logo/allyours.webp';
import about from '../../../public/about/aboutimg.webp';

import FlipCardComponent from "../../components/flipcard";
export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    return (
     <>
        <div className="lg:mx-auto lg:max-w-screen-lg flex flex-col items-center  text-white text-center mt-2 p-4">
            
                <Image src={allyours} alt="All Yours Logo" width={80} height={80} className=" "/>
               <div className="text-pretty grid xs:grid-cols-1 lg:grid-cols-[3fr,2fr] m-auto place-items-center">
                <p className=" text-left xs:p-2 xs:text-sm md:text-md lg:px-6 lg:text-lg">At allyours, we believe in the transformative power of social impact project leaders and young builders who actively seek to create a better society. So, we empower solopreneurs and their social impact projects by offering co-working space and a collaborative community for them to thrive. What sets us apart is not just our co-working space but our commitment to bring people together in a creative way for systematic value chains.</p>
                <Image src={about} alt="About" width={280} height={200} className="rounded-lg "/>
              </div>
        </div>


          {/**flip Card Desing */}
    <FlipCardComponent />
        {/*what we Offer  */}
        <div className='xs:p-2 xs:text-center  lg:p-4 lg:flex lg:flex-col  lg:items-center'>
                <h1 className=' p-2 font-bold  text-egw w-full text-center sm:text-4xl text-2xl   tracking-wider'>Our Services</h1>

                <div className='xs:flex xs:flex-wrap xs:items-center xs:justify-center md:text-center lg:flex lg:flex-wrap lg:justify-center '>
                      <div  className="block max-w-sm p-6   ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-egw">Provide a sustainable and zero-plastic co-working space</h5>
                        <p className="text-sm text-eg2s text-pretty">key benefits: 
                        reliable internet, electricity, and a quiet environment conducive to productive work.</p>
                      </div>

                      {/*Two */}
                      <div  className="block max-w-sm p-6   ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-egw">Host peer-review sessions</h5>
                        <p className="text-sm text-eg2s text-pretty">key benefits: 

                    leaders can share their projects, receive feedbacks, and collaborate on ideas.</p>
                      </div>

                       {/*Three */}
                      <div  className="block max-w-sm p-6    ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-egw">Offer specialized coach sessions</h5>
                        <p className="text-sml text-eg2s text-pretty">key benefits: improved mental wellness and work-life balance.</p>
                      </div>

                       {/*Four */}
                      <div  className="block max-w-sm p-6     ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-egw">Facilitate leaders networking events</h5>
                        <p className="text-sm text-eg2s text-pretty">key benefits:

                  to connect leaders with potential mentors, investors, and business partners at the end of every cohort.</p>
                      </div>
                      
                </div>
        </div>


      
     




  

{/**Carbon Emission */}
<section className=" text-center xs:py-2 xs:text-sm bg-egw py-6 lg:text-md">
      <div className="px-2 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div className=" rounded-lg p-6 flex items-start gap-4">
          <div className="text-primary text-3xl">
            <FaHandsHelping /> 
          </div>
          <div>
            <h2 className="xs:text-xl lg:text-2xl font-bold flex items-center gap-2">
              <span className="before:content-['•'] before:text-primary before:mr-2 text-black">
                Ensuring Inclusivity
              </span>
            </h2>
            <p className="mt-4 text-secondary text-left">
              allyours services are not limited to project leaders from ethnic minorities, those with disabilities, or internally displaced people. We are committed to accepting diversity and practicing inclusive habits in our communications.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className=" rounded-lg p-6 flex items-start gap-4">
          <div className="text-green-500 text-3xl">
            <FaLeaf /> 
          </div>
          <div>
            <h2 className="xs:text-xl lg:text-2xl font-bold flex items-center gap-2">
              <span className="before:content-['•'] before:text-green-500 before:mr-2 text-black">
                Carbon Emission Reduction
              </span>
            </h2>
            <p className="mt-4 text-secondary text-left">
              We are committed to maintaining renewable energy systems starting with solar for electricity when we have enough financial resources, ensuring compliance with waste management regulations with third party stakeholder supporting, and sustaining eco-friendly operations.
            </p>
          </div>
        </div>

      </div>
    </section>
      </>
    );
  }
  