import React, { useState } from "react";
import {MenuIcon,XIcon} from "@heroicons/react/outline";
function Navbar() {

    const [nav,setNav]=useState(false);
  return (
    <div className="h-[80px] border-zinc-100 bg-zinc-200 w-full  drop-shadow-lg">
      <div className="px-2 flex justify-between items-center h-full w-full">
        <div className="flex items-center">
          
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl font-serif"> DEV.</h1>
          <ul className="md:flex hidden  ">
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">Home </li>
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">About</li>
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">Support</li>
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">Platforms</li>
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">Pricing</li>
          </ul>
        </div>
        {!nav ? <MenuIcon onClick={()=>setNav(!nav)} className="w-9 cursor-pointer hover:scale-105 md:hidden"/> : <XIcon onClick={()=>setNav(!nav)} className="w-8"/>}
        
        <div className="hidden md:flex pr-4">
            <button className=" border-none bg-transparent text-black mr-4"> Sign in </button>
            <button className=" px-8 py-3"> Sign Up </button>
            <button> </button>

        </div>
      </div>
      {nav? <ul className="absolute bg-zinc-200 md:hidden w-full">
<li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">Home </li>
<hr  className="bg-black"/>
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">About</li>
            <hr  className="bg-black"/>
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">Support</li>
            <hr  className="bg-black"/>
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">Platforms</li>
            <hr  className="bg-black"/>
            <li className="p-4 font-semibold text-lg cursor-pointer hover:scale-105">Pricing</li>
</ul> : null}

      
    </div>
  );
}

export default Navbar;
