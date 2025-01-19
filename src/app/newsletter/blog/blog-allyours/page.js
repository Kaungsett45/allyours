
"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BlogPost() {
  const router = useRouter();

  const blogContent = {
    id: '1',
    title: 'Welcome to allyours: A Visionary Hub for Sustainable and Collaborative Creativity',
    date: 'January 11, 2025',
    content: `A significant milestone was made on January 11, 2025, as we proudly announced the official launch of allyours - an innovative hub dedicated to empowering solopreneurs, small project leaders, and creative minds in Burma. It is more than just a physical space. allyours instead joins an ever-important endeavour to nurture growth, foster collaboration, and drive impactful community change for the better. 
    Founded on a bold vision, allyours seeks to be a net-zero innovative hub that supports individuals and small projects specialising in art, design, and education. What we aim to provide is a thriving environment where individuals can work independently white at the same time connect deeply with, benefit from and contribute to a supportive community. Our mission is to catalyze and empower transformative ideas, decentralise opportunities, and tailor solutions to the unique challenges faced by local creators and changemakers with high potential. 
        The launch of allyours represents the opening of an unparalleled range of offerings designed to inspire and empower. We provide a workspace, fully equipped with reliable electricity, high-speed internet, and eco-friendly facilities - nothing less than a heaven for productivity! As we also offer and facilitate workshops, coaching sessions, and peer-review opportunities, participants can refine their skills and accelerate their projects. Networking events and site visits further connect creators with industry experts, mentors, and like-minded peers, fostering organic and meaningful collaborations. 
    This model has now been initially implemented in Yangon and is expected to grow in other cities in Burma as well as in Chiang Mai, Thailand to support migrated youth leaders. Our commitment to inclusivity ensures that allyours is a welcoming space for any individuals with a high potential for positive community impact. Sustainability lies at the heart of our operations, with net-zero carbon goals and eco-friendly practices that contribute to a greener future. A vibrant support network made possible by partnerships in good faith with several organizations also further ensures its long-term sustainability. 
        The importance of allyours cannot be overstated. Burmese youth face numerous obstacles, including limited access to infrastructure, mentorship, and industry exposure. Brain drain remains a pressing issue as talented individuals leave the country in search of better opportunities. The birth of allyours is a direct response to these pressing challenges faced by Burmese youth. Designed to tackle them head-on, allyours provides a platform for creators to flourish locally, countering the forces that drive them away. With its unique focus on passion projects in art, design, and education, allyours is set to be a sanctuary for dreamers who wish to transform their ideas into tangible impacts while staying true to their values and contributing meaningfully to their communities. 
        As we embark on this fulfilling journey, we invite you to be part of our story. Whether you are a solopreneur, an individual, or a small project leaders, seeking a supportive environment, to turn your big ideas into tangible results. allyours is here to guide and support you. We hope this launch marks the beginning of a new chapter in Burma’s creative economy - a chapter driven by innovation, resilience, and hope! Join us as we build a future where creativity knows no bounds and the community knows no limit. Visit our website, Facebook, Instagram or LinkedIn to stay updated. Let us all dream, create, and thrive! 
    `,
  };

  return (
    <div className="min-h-screen bg-cultured">
      <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/newsletter" className='text-black  '>
                <p className="inline-flex px-4  py-1 items-center font-semibold text-xl   rounded-md"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
</svg>
Back</p></Link>
        <article className="e p-6 ">
          <header className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{blogContent.title}</h1>
            {/* <p className="text-sm text-gray-500">Published on {blogContent.date}</p> */}
          </header>
          <section className="text-gray-700 leading-relaxed">
            <p className="mb-4 text-justify">{blogContent.content}</p>
          </section>
        </article>
      </div>
    </div>
  );
}

