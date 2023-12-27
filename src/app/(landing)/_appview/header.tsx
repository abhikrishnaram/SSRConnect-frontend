'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react';

const MENU_ITEMS = [
  // {
  //   name: 'Home',
  //   href: '/',
  // },
  // {
  //   name: 'About us',
  //   href: '/about',
  // },
  // {
  //   name: 'Testimonials',
  //   href: '/testimonials',
  // },
  {
    name: 'Projects',
    href: '/projects',
  },
  // {
  //   name: 'Contact us',
  //   href: '/contact',
  // },
];

const Header = ({ scrollEffect = true } : { scrollEffect: boolean }) => {
  
  const [scrolled, setScrolled] = useState(!scrollEffect);
  const pathname = usePathname();

  useEffect(() => {
    if(!scrollEffect) return;
    const onScroll = () => setScrolled(window.scrollY > 0);
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <header
          className={clsx([
            !scrollEffect && 'bg-white shadow-lg',
            scrolled ? 'bg-white shadow-lg' : 'bg-transparent',
            'transition-all duration-300 ease-in-out fixed w-full z-50',
          ])}
      >
          <div
              className={clsx([
                'flex flex-wrap p-5 flex-col md:flex-row items-center',
                !scrolled ? 'justify-between lg:px-16' : 'container mx-auto',
              ])}
          >
              {scrolled && <Link href="/" className="flex title-font font-bold items-center text-primary mb-4 md:mb-0">
                  {/*<svg*/}
                  {/*    xmlns="http://www.w3.org/2000/svg"*/}
                  {/*    fill="none"*/}
                  {/*    stroke="currentColor"*/}
                  {/*    strokeLinecap="round"*/}
                  {/*    strokeLinejoin="round"*/}
                  {/*    strokeWidth="2"*/}
                  {/*    className="w-10 h-10 text-white p-2 bg-primary rounded-full"*/}
                  {/*    viewBox="0 0 24 24"*/}
                  {/*>*/}
                  {/*    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />*/}
                  {/*</svg>*/}
                  {/*<span className="ml-3 text-xl">SSR Connect</span>*/}
                  <Image src="/logo.png" alt="logo" width={200} height={60} />
              </Link>}
              <nav
                  className={clsx([
                    'flex gap-6 flex-wrap items-center justify-center mr-6 text-color',
                    scrolled && 'md:ml-auto',
                  ])}
              >
                  {MENU_ITEMS.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          className={clsx([
                            !scrolled && 'text-white hover:!text-white',
                            'hover:text-primary group mx-2 cursor-pointer',
                            'transition-all duration-300 ease-in-out',
                            item.href === pathname && 'text-primary',
                          ])}
                      >
                          {item.name}
                          <div
                              className={clsx([
                                'h-0.5 w-0 group-hover:w-full bg-white transition-all duration-300 ease-in-out',
                                item.href === pathname && 'bg-primary',
                              ])}
                          />
                      </Link>
                  ))}
              </nav>
              <Link href="/dashboard" className="inline-flex items-center justify-between bg-primary border-0 py-2 px-4 hover:bg-primary/80 rounded-lg text-base text-primaryTextColor">
                  <div>Member Portal</div>
                  <ChevronRightIcon className="ml-2" size={20} />
              </Link>
          </div>
      </header>
  );
};

export default Header;
