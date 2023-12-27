import React from 'react';
import Link from 'next/link';

const LINKS = [
  {
    name: 'About us',
    href: '/about',
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact us',
    href: '/contact',
  },
];

const Footer = () => {
  return (
      <footer className="text-gray-600 body-font border-t">
          <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                  <a className="flex title-font font-semibold items-center text-primary md:justify-start justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span className="ml-3 text-xl">SSR Connect</span>
                  </a>
                  <p className="mt-2 text-sm text-gray-500">
                      Student Social Responsibitlity (SSR) is Amrita's flagship community outreach program that
                      exposes students to the realities of life.
                  </p>
              </div>
              <div className="flex-grow flex flex-wrap md:pl-20 md:-mb-10 md:mt-0 mt-10 md:text-left text-center justify-end">
                  <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                      <nav className="flex flex-col gap-2">
                          {LINKS.map((link) => (
                              <div key={link.name}>
                                  <Link
                                      href={link.href}
                                      className="text-gray-600 hover:text-gray-800"
                                  >
                                      {link.name}
                                  </Link>
                              </div>
                          ))}
                      </nav>
                  </div>
              </div>
          </div>
          <div className="bg-gray-100">
              <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                  <p className="text-gray-500 text-sm text-center sm:text-left">
                      © 
                      {' '}
                      {new Date().getFullYear()}
                      {' '}
                      SSR Connect
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

                  </span>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
