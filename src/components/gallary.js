
import Image from 'next/image';
import Link from 'next/link';

export default function Gallary() {


    return(
        
<>
      {/** Laid-Back, Art, and Philosophy */}

<section className="py-8 px-4 mx-auto max-w-screen-xl">
  <div className="gap-16 items-center lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
    {/* Text Content */}
    <div className="font-light text-gray-500 dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-cultured">
        Laid-Back, Art, and Philosophy
      </h2>
      <p className="py-2 my-4 text-pretty">
        The first in-person student-led club at Parami University, founded with a total of 11 members. Integrating art and philosophy, the club focused on cherishing cultural diversity through in-person meetings and virtual engagement with eco-friendly approaches.
      </p>
      <Link 
        href="/projects/laid-back-art-philosophy" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="m-2 py-3 px-4 border-2 border-cultured rounded-md text-blue-500 hover:text-blue-700 font-semibold"
      >
        View Details &rarr;
      </Link>
    </div>

    {/* Image Content */}
    <div className="grid grid-cols-2 gap-4 mt-8">
      <Image
        className="w-full rounded-lg"
        src="/ourworks/laidback.webp"
        alt="Laid-Back"
        width={600}
        height={400}
      />
      <Image
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="/about/limited.JPG"
        alt="Limited"
        width={600}
        height={400}
      />
    </div>
  </div>
</section>

 {/** Laid-Back, Art, and Philosophy */}
 {/**  Cupcakes for Pads */}

    <section className="py-8 px-4 mx-auto max-w-screen-xl">
  <div className="gap-16 items-center py-8 px-4 lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
    {/* Image Content */}
    <div className="grid grid-cols-2 gap-4 mt-8 lg:order-first">
      <Image
        className="w-full rounded-lg"
        src="/ourworks/cupcake2.webp"
        alt="Cupcakes for Pads"
        width={600}
        height={400}
      />
        <Image
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="/ourworks/cupcake.webp"
        alt="Limited"
        width={600}
        height={400}
      />
    </div>

    {/* Text Content */}
    <div className="font-light text-gray-500 dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-cultured">
        Cupcakes for Pads
      </h2>
      <p className="py-2 my-4 text-pretty">
        Aims to provide hygienic menstrual products to women in disadvantaged communities. By fundraising with youths’ favorite pastry, cupcakes, 100% of the profits from the sales go directly to purchasing and delivering the pads. The project gave a chance for all people to participate in this social awareness campaign.
      </p>
      <Link
        href="/projects/cupcakes-for-pads" 
        target="_blank" 
        rel="noopener noreferrer"
        className="my-2 py-3 px-4 border-2 border-cultured rounded-md text-blue-500 hover:text-blue-700 font-semibold"
      >
        View Details &rarr;
      </Link>
    </div>
  </div>
</section>
 {/**  Cupcakes for Pads */}
 {/**  Nway Htwe Aii */}

<section className="py-8 px-4 mx-auto max-w-screen-xl">
  <div className="gap-16 items-center py-8 px-4 lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
    {/* Project Details */}
    <div className="font-light text-gray-500 dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-cultured">Nway Htwe Aii</h2>
      <p className="py-2 my-4 text-pretty">
        Provides mental health and psychosocial support (MHPSS) to hikikomori youth ("nway") by pairing them with supportive partners ("Htwe"). Over 15 days, it includes training sessions, meetings, and two nature healing trips to foster connections, build trust, and enhance mental well-being.
      </p>
      <Link
        href="/projects/nwayhtway" 
        target="_blank" 
        rel="noopener noreferrer"
        className="my-2 py-3 px-4 text-blue-500 hover:text-blue-700 font-semibold border-2 border-cultured rounded-md"
      >
        View Details &rarr;
      </Link>
    </div>

    {/* Project Image */}
    <div className="grid grid-cols-2 gap-4 mt-8">
      <Image 
        className="w-full rounded-lg" 
        src="/ourworks/nwayhtway2.JPG" 
        alt="Nway Htwe Aii"  
        width={600} 
        height={400} 
      />
        <Image
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="/ourworks/nwayhtway.png"
        alt="Limited"
        width={600}
        height={400}
      />
    </div>
  </div>
</section>
 {/**  Nway Htwe Aii */}


      
       {/**  Ludosophia */}

<section className="py-8 px-4 mx-auto max-w-screen-xl">
  <div className="gap-16 items-center py-8 px-4 lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
    {/* Project Details */}
    <div className="font-light text-gray-500 dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-cultured">Ludosophia</h2>
      <p className="py-2 my-4 text-pretty">
      formed by a team of eight dedicated students, united by our shared passion for board games and their transformative potential. As a diverse group of creatives, strategists, and planners, we believe in the power of board games to foster critical thinking, creativity, and meaningful connections </p>
      <Link
        href="/projects/nwayhtway" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold border-2 my-2 py-3 px-4 border-cultured rounded-md"
      >
        View Details &rarr;
      </Link>
    </div>

    {/* Project Image */}
    <div className="grid grid-cols-2 gap-4 mt-8">
      <Image 
        className="w-full rounded-lg" 
        src="/ourworks/nwayhtway2.JPG" 
        alt="Nway Htwe Aii"  
        width={600} 
        height={400} 
      />
        <Image
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="/ourworks/nwayhtway.png"
        alt="Limited"
        width={600}
        height={400}
      />
    </div>
  </div>
</section>
 {/** Ludosophia */}



  {/**  Ludosophia */}

<section className="py-8 px-4 mx-auto max-w-screen-xl">
  <div className="gap-16 items-center py-8 px-4 lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
    {/* Project Details */}
    <div className="font-light text-gray-500 dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-cultured">Ludosophia</h2>
      <p className="py-2 my-4 text-pretty">
      formed by a team of eight dedicated students, united by our shared passion for board games and their transformative potential. As a diverse group of creatives, strategists, and planners, we believe in the power of board games to foster critical thinking, creativity, and meaningful connections </p>
      <Link
        href="/projects/nwayhtway" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold border-2 my-2 py-3 px-4 border-cultured rounded-md"
      >
        View Details &rarr;
      </Link>
    </div>

    {/* Project Image */}
    <div className="grid grid-cols-2 gap-4 mt-8">
      <Image 
        className="w-full rounded-lg" 
        src="/ourworks/nwayhtway2.JPG" 
        alt="Nway Htwe Aii"  
        width={600} 
        height={400} 
      />
        <Image
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="/ourworks/nwayhtway.png"
        alt="Limited"
        width={600}
        height={400}
      />
    </div>
  </div>
</section>
 {/** Ludosophia */} 



  {/**  Ludosophia */}

<section className="py-8 px-4 mx-auto max-w-screen-xl">
  <div className="gap-16 items-center py-8 px-4 lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
    {/* Project Details */}
    <div className="font-light text-gray-500 dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-cultured">Ludosophia</h2>
      <p className="py-2 my-4 text-pretty">
      formed by a team of eight dedicated students, united by our shared passion for board games and their transformative potential. As a diverse group of creatives, strategists, and planners, we believe in the power of board games to foster critical thinking, creativity, and meaningful connections </p>
      <Link
        href="/projects/nwayhtway" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold border-2 my-2 py-3 px-4 border-cultured rounded-md"
      >
        View Details &rarr;
      </Link>
    </div>

    {/* Project Image */}
    <div className="grid grid-cols-2 gap-4 mt-8">
      <Image 
        className="w-full rounded-lg" 
        src="/ourworks/nwayhtway2.JPG" 
        alt="Nway Htwe Aii"  
        width={600} 
        height={400} 
      />
        <Image
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="/ourworks/nwayhtway.png"
        alt="Limited"
        width={600}
        height={400}
      />
    </div>
  </div>
</section>
 {/** Ludosophia */}
</>
   
    );
}