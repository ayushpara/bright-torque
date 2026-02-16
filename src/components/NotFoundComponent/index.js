import Image from 'next/image'
import React from 'react'
import notFound from "../../static/images/editorial/not_found.svg"
import Link from 'next/link'
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const NotFoundComponent = () => {
  return (
   <div className="relative w-full min-h-screen p-5 lg:px-[120px] sm:px-[70px] sm:py-16 flex flex-col items-center justify-center z-10">
  <div className="w-full max-h-[45vh] flex justify-center">
    <Image
      src={notFound}
      alt="not found"
      className="w-full h-full max-h-[45vh] object-contain"
      width={926}
      height={450}
      priority
    />
  </div>
  <div
    className={`flex flex-col gap-6 ${jarkata.className} max-w-[550px] mx-auto mt-6`}
  >
    <h2 className="text-center text-[28px] leading-[34px] font-bold">
      Yikes, This is awkward
    </h2>
    <p className="text-center text-base leading-tight">
      The page you’re looking for appears to have been moved, deleted, or doesn’t exist.
      We apologize for the inconvenience.
    </p>
    <Link
      href="/"
      className="px-4 py-3 bg-green-1 text-white rounded-full text-center max-w-[130px] mx-auto"
    >
      Go Home
    </Link>
  </div>
</div>

  )
}

export default NotFoundComponent