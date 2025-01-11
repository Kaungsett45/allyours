import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
    <div className='flex items-center  flex-col lg:mx-auto lg:max-w-screen-lg'>
      <div className='-mt-4 mb-4  w-200 h-200'>
      <Image src="/logo/allyours.webp" alt="All Yours Logo"  width={240} height={200} className=" "/>
      <p className=" xs:text-primary sm:text-egw -mt-12 text-center  text-sx   ">for you and for all of us.</p>
      </div>
      <Link href="/apply" className='text-egw bg-secondary border-white border-2 px-6 py-2 rounded-full font-bold'>Apply</Link>
    </div>
    </>
  );
}
