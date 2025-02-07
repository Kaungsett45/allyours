"use client";

import SlideUp from "@/components/slideupanimation";
export default function Supportus() {
  return (
    <SlideUp>
      <div className="mt-10 p-4"></div>
      <h1 className="md:text-3xl p-4 text-center font-bold text-4xl xs:text-2xl text-pureb tracking-wider">
        Join Hands with allyours
      </h1>

      {/**partnership & donation part */}
      <div className="m-4 pb-6 flex justify-center gap-4 flex-wrap text-pureb">
        <div className="max-w-sm w-[90%] md:w-[300px] p-6 bg-white border rounded-lg shadow-md">
          🤝{" "}
          <h5 className="mb-2 text-2xl font-semibold tracking-tight">
            Partnership Opportunities
          </h5>
          <p className="text-pretty mb-3 font-normal">
            At allyours, we believe in the transformative power of
            collaboration. Partnering with us means contributing to initiatives
            that promote creativity, education, and sustainability in the
            communities. Together, we can foster innovation, build equitable
            futures, and create lasting impact.
          </p>
          <a
            href="#"
            className="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            Email us
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>

        <div className="max-w-sm p-6 w-[90%] md:w-[300px] bg-white border rounded-lg shadow-md">
          ❤️{" "}
          <h5 className="mb-2 text-2xl font-semibold tracking-tight">
            Donation Details
          </h5>
          <p className="text-pretty mb-3 font-normal">
            Your support can make a difference. Whether it's a financial
            contribution, in-kind support, or sponsorship, your generosity helps
            us provide tools, workshops and opportunities to the communities and
            passionate individuals. Together, we can catalyze change and empower
            the leaders of tomorrow.
          </p>
          <a
            href="#"
            className="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            Email us
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="m-4 pb-6 flex justify-center gap-4 flex-wrap text-pureb">
        <div className="m-4 pb-6 flex justify-center gap-4 flex-wrap text-pureb">
          <div className="max-w-sm p-6 bg-white border rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center text-blue-600 mb-2">
              <span className="text-2xl font-semibold tracking-tight">
                💰 Donation Progress
              </span>
            </div>
            <p className="text-pretty mb-4 font-normal text-gray-700">
              For 1 year to support{" "}
              <span className="font-semibold">88 leaders</span>, we need to
              raise <span className="font-semibold">$25,000</span> total,
              including operation costs. So far, we have raised{" "}
              <span className="text-green-600 font-bold">$220</span>. Help us
              reach our goal!
            </p>
            <div className="relative w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: "0.88%" }}
              ></div>
              <span className="absolute inset-0 flex justify-center items-center text-sm font-semibold text-blue-600">
                0.88%
              </span>
            </div>
          </div>
        </div>

        <div className="m-4 pb-6 flex justify-center gap-4 flex-wrap text-pureb">
          <div className="max-w-sm p-6 bg-white border rounded-lg shadow-md">
            📊{" "}
            <h5 className="mb-2 text-2xl font-semibold tracking-tight">
              Financial Transparency
            </h5>
            <p className="text-pretty mb-3 font-normal">
              We produce 1 report every after cohort for pure financial
              transparency with the help of Financial Consultant. This ensures
              that all contributions are accounted for and utilized effectively.
            </p>
          </div>
        </div>
      </div>
    </SlideUp>
  );
}
