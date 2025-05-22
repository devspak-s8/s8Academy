
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import bannerImg from '../../assets/img/header-img.png';


export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const [scrollY, setScrollY] = useState(0);         // current scroll pos
  const [scrollDir, setScrollDir] = useState('up');  // scroll direction
  const [navVisible, setNavVisible] = useState(true); // controls nav show/hide

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDir('up');
        setNavVisible(false);
      } else {
        setScrollDir('down');
        setNavVisible(true);
      }

      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background: transparent if at top, solid after 100px scroll
  const bgClass =
    scrollY < 100
      ? 'bg-transparent'
      : 'bg-indigo-700 shadow-lg';

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <div className="relative bg-indigo-700 text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-indigo-800/30 backdrop-blur">
         <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-8 transition-transform duration-300 ease-in-out ${bgClass} ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">S8Academy</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href="#" className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Content */}
      <div className="relative isolate px-6 pt-36 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="rounded-full px-3 py-1 text-sm ring-1 ring-white/20 mb-4 inline-block">
              Announcing our next round of funding.
              <a href="#" className="ml-2 font-semibold text-white/90 hover:text-white">
                Read more <span aria-hidden="true">→</span>
              </a>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-white">
              Level up with future-ready skills
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/80">
              Fuel your growth with future-ready skills, taught through hands-on projects,
              real-world scenarios, and expert-driven guidance — because S8Academy doesn’t
              just teach, we prepare you to lead.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 shadow hover:bg-indigo-100"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white hover:underline">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <img src={bannerImg} alt="Banner" className="w-full max-w-md lg:max-w-lg" />
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
  )
}
