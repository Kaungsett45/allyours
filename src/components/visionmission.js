 
 export default function visionmission(){

    return(
        <>
       <div className="xs:bg-[#EBEBEB] lg:bg-transparent flex flex-col items-top xs:mt-4 lg:mt-20 md:flex-row md:justify-between lg:mx-auto  lg:max-w-screen-lg">
 {/*Vision  */}
        <div className='xs:w-full xs:p-3 lg:p-6 text-center md:max-w-[45%] lg:max-w-[50%]'>
            <h1 className='text-2xl sm:text-4xl font-bold  text-secondary tracking-wider'>Vision</h1>
            <p className="pt-2 text-md text-center text-pretty ">
                a net-zero innovation hub specializing in art, design, and education,
                where individuals can thrive independently while nurturing strong community connections.</p>
        </div>

{/*Mission  */}
            <div className=' xs:text-center xs:p-3 lg:p-6'>
                <h1 className='font-bold sm:text-4xl text-2xl  tracking-wider text-secondary'>Mission</h1>
            <p className="text-sx">
                  empower small project leaders by providing
            </p>
                    <div className=" text-pretty  m-4 grid grid-cols-3 gap-2">
                        <button  className="rounded-lg py-2 px-4 bg-secondary text-eg2s">Co-working</button>
                        <button  className="rounded-lg py-2 px-4 bg-secondary text-eg2s">Co-thinking</button>
                        <button  className="rounded-lg py-2 px-4 bg-secondary text-eg2s">Co-learning</button>
                        <button  className="rounded-lg py-2 px-4 bg-secondary text-eg2s col-span-3">Reliable Electricity and Internet Access</button>
                        <button  className="rounded-lg py-2 px-4 bg-secondary text-eg2s col-span-3">Coaching and Community Building Opportunities</button>
                    </div>
            </div>

            </div>
 </>
    )

 }