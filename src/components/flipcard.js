import React from "react";
import Image from "next/image";

const services = [
  {
    step: "01",
    title: " Limited Support in Capacity Building",
    image : '/about/limited.JPG',
    description:
      "Limited support in learning opportunities can significantly impede the application of knowledge. Insufficient mentoring or structured programs can leave individuals struggling to implement what they've learned in practical scenarios.",
  },
  {
    step: "02",
    title: "Implement Organic Networking",
    image : '/about/network.JPG',
    description:
     "Forced networking has become a necessity in the entrepreneurship industry along with its rapid growth. But at allyours, we want to develop an organic networking experience for the participants to gain proper industry exposure.",
  },
  {
    step: "03",
    title: " Unstable Electricity and Internet",
    image : '/about/unstable.webp',
    description:
      " Reliable electricity and internet connection are not accessible to everyone in Myanmar. This hinders the productivity and growth of youths small project leaders.",
  },
  {
    step: "04",
    title: "Brain Drain",
    image : '/about/bdrain.png',
    description:
      " There is a growing concern about brain drain, particularly as potential leaders, researchers, and artists consider migrating to other countries due to conflicts, safety issues, and an unstable economy.",

  },
];

const FlipCardComponent = () => {
  return (
    <section className="py-4 mx-auto ">
    <div className="flex justify-center object-center px-2 py-4">
      <div className="flex justify-center object-center flex-col gap-6">
      <div className="xs:grid-cols-1 lg:mx-auto sm:flex sm:justify-around sm:flex-wrap lg:grid lg:grid-cols-2 gap-4">
  {services.map((service) => (
    <div
      key={service.step}
      className="group h-72 w-72 sm:h-62 sm:w-42 sm:flex-wrap lg:h-72 lg:w-96 [perspective:600px]"
    >
      <div className="my-4 relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front face */}
        <div
          className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]"
          style={{
            backgroundImage: `url('${service.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.4,
          }}
        ></div>

        {/* Front Text */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl text-center [backface-visibility:hidden]"
        >
          <p className="text-lg font-semibold text-white brightness-200">
            {service.title}
          </p>
        </div>

        {/* Back face */}
        <div className="border-2 border-egw absolute inset-0 h-full w-full rounded-xl bg-secondary px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-lg text-pretty text-center mb-2">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  </section>
  
  );
};

export default FlipCardComponent;