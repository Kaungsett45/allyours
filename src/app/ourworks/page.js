

import Gallary from "@/components/gallary";
import Link from "next/link";

export default function ourworks(){


    return(

        <div className="lg:mx-auto lg:max-w-screen-lg   md:mx-4 mt-4 flex items-center  flex-col justify-center">
                    <Gallary/>
               
                <p className="xs:text-center xs:text-md text-pretty text-egw pb-2">A glimpse into our initiatives that drive change and foster inclusivity</p>
                <div className="p-4 ">
                    <Link href="https://www.canva.com/design/DAGa3Vwj4tg/zFNjlYZt1GSQAfzCz_1w_Q/edit"
                    className=" px-8 py-2 rounded-full font-semibold bg-white ">
                        View Details
                    </Link>
                </div>
              
        </div>
    )
}