import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
    <div className='flex items-center  flex-col lg:mx-auto lg:max-w-screen-lg'>
      <div className='-mt-8 mb-4  w-200 h-200'>
      <Image src="/logo/allyours.png" alt="All Yours Logo"  width={340} height={300} className="md:w-[420px] md:h-[400px] "/>
      <p className=" xs:text-primary sm:text-egw -mt-12 text-center  text-sx   ">for you & for all of us</p>
      </div>
      <Link href="/apply" className='text-pureb border-2 bg-cultured border-bluetx  px-10 py-4 rounded-full font-bold'>Apply</Link>
    </div>
    </>
  );
}
