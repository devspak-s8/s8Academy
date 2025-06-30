import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import bannerImg from "../../assets/img/header-img.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import NavigationMenuDemo from "./Navbar";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  // eslint-disable-next-line no-unused-vars
  const [scrollDir, setScrollDir] = useState("up"); // scroll direction
 
  // useEffect(() => {
  //   let lastScrollY = window.pageYOffset;

  //   const handleScroll = () => {
  //     const currentScrollY = window.pageYOffset;

  //     // Detect scroll direction
  //     if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //       setScrollDir("up");
  //       setNavVisible(false);
  //     } else {
  //       setScrollDir("down");
  //       setNavVisible(true);
  //     }

  //     setScrollY(currentScrollY);
  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


  return (
    <div className="relative  bg-gradient-to-r from-[#fef9f5] to-[#e7f3ff] text-white">
      {/* Header */}
     <header className="w-full px-6 py-0 mb-0 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo/Brand */}
        <div className="text-xl font-semibold text-black">
          S8Academy
        </div>

        {/* Center - Navigation */}
        <div className="flex-1 flex justify-center">
          <NavigationMenuDemo />
        </div>

        {/* Right - Get Started */}
        <div>
          <Button variant="default" className="bg-black text-white hover:bg-gray-800">
            Get Started
          </Button>
        </div>
      </div>
    </header>

      {/* Hero Content */}
      <div className="relative isolate px-6 pt-18 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="w-full lg:w-1/2 text-left">
             <span className="bg-purple-100 text-purple-500 font-semibold px-4 py-1 rounded-full text-sm inline-block">
          EDUCATION FOR EVERYONE
        </span>
            <h1 className="text-8xl sm:text-5xl font-bold tracking-tight leading-tight text-black ">
              Unlock <span className="text-purple-500">Limitless Growth</span> with In-Demand Skills for the Future.

            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-700">
              Fuel your growth with future-ready skills, taught through hands-on
              projects, real-world scenarios, and expert-driven guidance —
              because S8Academy doesn’t just teach, we prepare you to lead.
            </p>
             <div className="flex mt-4 gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            Create Account →
          </Button>
          <Button variant="ghost" className="text-black text-base flex items-center gap-2">
            <span className="bg-fuchsia-100 px-3 py-1 rounded-full">View Our Schools</span> →
          </Button>
        </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <img
              src={bannerImg}
              alt="Banner"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>

        {/* Wavy SVG Bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-[100px] -mb-1 fill-white"
          >
            <path d="M0,0 C150,100 350,0 600,80 C850,160 1050,60 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
