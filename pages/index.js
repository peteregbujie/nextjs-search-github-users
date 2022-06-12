import Image from "next/image";
import github from "../public/images/github.jpg";

export default function Home() {
 return (
  <div className="relative w-full h-screen">
   <Image
    className="object-cover w-full h-full"
    src={github}
    alt="github"
    layout="fill"
   />
   <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
   <div className="absolute top-0 flex flex-col justify-center w-full h-full p-4 text-center text-white">
    <h1 className="text-2xl font-bold text-gray-100 sm:text-4xl">
     Search Github Users
    </h1>
    <form
     className="flex justify-between items-center  mt-12 max-w-[70vw] mx-auto w-full border p-1
           text-black bg-gray-100/90  ring-4 rounded-[30px]"
    >
     <div>
      <input
       className="bg-transparent w-[60vw] sm:w-[400px] focus:outline-none p-4 placeholder:text-xl"
       type="text"
       placeholder="Search Github Users"
      />
     </div>
     <div>
      <svg
       xmlns="http://www.w3.org/2000/svg"
       className="w-10 h-10 pr-2 text-gray-500"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
       strokeWidth="2"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
       />
      </svg>
     </div>
    </form>
   </div>
  </div>
 );
}
