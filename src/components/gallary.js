
import Image from 'next/image';

export default function Gallary() {


    return(
        
<>
    <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
            <div className="font-light text-gray-500  dark:text-gray-400">
                <h2 className="mb-4 xs:text-2xl text-4xl  tracking-tight font-extrabold text-egw  ">Laid-Back,Art and Philosophy</h2>
                <p className="mb-4 text-pretty">the first in-person student-led club in Parami University, founded with a total of 11 members. Integrating art and philosophy, the club focused on cherishing cultural diversity through in-person meetings and virtual engagement with eco-friendly approaches</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <Image className="w-full rounded-lg" src="/ourworks/laidback.webp" alt="laidback"  width={150}  height={100}/>
                <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/about/limited.JPG" alt="laidback"  width={150}  height={100}/>
            </div>
        </div>
    </section>


    <section className="">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
    {/* Text content */}
    <div className="font-light text-gray-500 dark:text-gray-400">
      <h2 className="mb-4 xs:text-2xl text-4xl tracking-tight font-extrabold text-egw ">
        Cupcakes for Pads
      </h2>
      <p className="mb-4 text-pretty">
        aims to provide hygienic menstrual products to women in disadvantaged communities. By fundraising with youths’ favorite pastry, cupcakes, 100% of the profits from the sales go directly to purchasing and delivering the pads. The project gave a chance for all people to participate in this social awareness campaign.
      </p>
    </div>

    {/* Image content */}
    <div className="grid grid-cols-2 gap-4 mt-8 lg:order-first">
      <Image
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="/ourworks/cupcake2.webp"
        alt="cupforpad"
        width={150}
        height={100}
      />
      <Image
        className="w-full rounded-lg"
        src="/ourworks/cupcake.webp"        alt="cupforpad"
        width={150}
        height={100}
      />
    </div>
  </div>
</section>

    <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
            <div className="font-light text-gray-500  dark:text-gray-400">
                <h2 className="mb-4 xs:text-2xl text-4xl  tracking-tight font-extrabold text-egw ">Nway Htwe Aii</h2>
                <p className="mb-4 text-pretty">provides mental health and psychosocial support (MHPSS) to hikikomori youth ("nway") by pairing them with supportive partners ("Htwe"). Over 15 days, it includes training sessions, meetings, and two nature healing trips to foster connections, build trust, and enhance mental well-being,</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <Image className="w-full rounded-lg" src="/ourworks/nwayhtway2.JPG" alt="nwayhtway"  width={150}  height={100}/>
                <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/ourworks/nwayhtway.png" alt="nwayhtway"  width={150}  height={100}/>
            </div>
        </div>
    </section>
</>
   
    );
}