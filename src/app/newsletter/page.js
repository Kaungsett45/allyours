import Image from 'next/image';

export default function Newsletter() {
    return (
     <>
            <div className=" lg:mx-auto lg:max-w-screen-lg flex flex-col items-center px-1 py-4">
            <div className="xs:text-center xs:flex xs:flex-col w-full p-2 mt-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 bg-cultured">
 
                <h1 className="md:text-3xl  text-center xs:text-2xl lg:text-4xl p-4 font-bold col-span-1 row-span-2">
                    allyours Newsletter
                </h1>

                <p className="font-bold  col-span-1 row-span-1">
                    Stay Inspired with allyours
                </p>

                <p className=" text-xs  col-span-1 row-span-1">
                    Insights, updates, and more…
                </p>
            </div>
            
            {/**allyoursnewlette container📰📬🔔 */}
    
            <div className="flex flex-wrap xs:justify-center items-top gap-6">
  {/* What's Inside */}
  <div className="p-4 pt-4 max-w-sm mt-6">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">📦 What's Inside</h5>
    <p className="my-2 text-white">Get exclusive access to:</p>
    <ul role="list" className="space-y-1 my-2 text-pretty text-white">
      <li className="flex items-center">
        <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg> 
        <span className="ms-2">Inspiring blog posts.</span>
      </li>
      <li className="flex items-center">
        <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="ms-2">Stories of impact and success from our projects.</span>
      </li>
      <li className="flex items-center">
        <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg> 
        <span className="ms-2">Updates on events, workshops, and initiatives.</span>
      </li>
    </ul>
  </div>

  {/* Blog Archive */}
  <div className="p-4 pt-4 max-w-sm mt-6">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">📰 Blog Archive</h5>
    <p className="my-2 text-white text-pretty">
    Missed a newsletter or want to revisit an inspiring story? Explore our Blog Archive : your gateway to all past allyours updates.
      <button className="block w-full py-2 mt-4 text-center font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Explore Blog Archive
      </button>
    </p>
  </div>

  {/* Subscription */}
  <div className="p-4 pt-4 max-w-sm mt-6">
    <h5 className="xs:text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">🔔 Subscription</h5>
    <button className="block w-full py-2 mt-4 text-center font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Sign Up Here
      </button>
  </div>
</div>

    <hr className="my-4 border-egw w-1/3 mx-auto" />    
            </div> 



      </>
    );
  }
  