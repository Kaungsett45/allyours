
import Image from 'next/image';
import allyours from '../../../public/logo/allyours.webp';
import about from '../../../public/about/aboutimg.webp';

import FlipCardComponent from "../../components/flipcard";
export default function About() {
    return (
     <>
        <div className="lg:mx-auto lg:max-w-screen-lg flex flex-col items-center  text-white text-center mt-2 p-4">
            
                <Image src={allyours} alt="All Yours Logo" width={80} height={80} className=" "/>
               <div className="text-pretty grid xs:grid-cols-1 lg:grid-cols-[3fr,2fr] m-auto place-items-center">
                <p className=" text-pretty xs:p-2 xs:text-sm md:text-md lg:px-6 lg:text-lg">At allyours, we believe in the transformative power of social impact project leaders and young builders who actively seek to create a better society. So, we empower solopreneurs and their social impact projects by offering co-working space and a collaborative community for them to thrive. What sets us apart is not just our co-working space but our commitment to bring people together in a creative way for systematic value chains.</p>
                <Image src={about} alt="About" width={280} height={200} className=" "/>
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
<section className="text-center xs:py-2 xs:text-sm bg-egw py-6 lg:text-md ">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="xs:text-2xl lg:text-3xl  font-bold mb-4">Ensuring Inclusivity</h2>
    <p className="xs:px-2 xs:m-2 lg:mb-4 text-secondary text-pretty">allyours services are not limited to project leaders from ethnic minorities, those with disabilities, or internally displaced people.
    We are committed to accepting diversity and practicing inclusive habits in our communications.</p>
  
    
  </div>
  




{/**Carbon Emission */}

  <div className="max-w-4xl mx-auto">
    <h2 className="xs:text-2xl lg:text-3xl font-bold text-center mb-4">Carbon Emission Reduction</h2>
    <p className='xs:px-2 xs:m-2 lg:mb-4 text-secondary text-pretty'>We are committed to maintaining renewable energy systems starting with solar for electricity when we have enough financial resources, ensuring compliance with waste management regulations with third party stakeholder supporting, and sustaining eco-friendly operations</p>
  </div>
</section>

      </>
    );
  }
  