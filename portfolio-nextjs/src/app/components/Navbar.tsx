"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id') || null);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full z-50 container">
      {/* Navbar สำหรับหน้าจอขนาดใหญ่ */}
      <div className="flex justify-between items-center md:justify-start">
        <div className="text-5xl text-white hover:text-violet-700">
          <Link href="/">Kamalat <span className='text-violet-700'>.</span></Link>
        </div>
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex md:space-x-6 ml-auto text-2xl">
          <li>
            <Link href="#hero">
              <span className={`hover:text-violet-600 ${activeSection === 'hero' ? 'border-b-2 border-violet-600 text-violet-600' : ''}`}>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <span className={`hover:text-violet-600 ${activeSection === 'about' ? 'border-b-2 border-violet-600 text-violet-600' : ''}`}>
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <span className={`hover:text-violet-600 ${activeSection === 'projects' ? 'border-b-2 border-violet-600 text-violet-600' : ''}`}>
                Projects
              </span>
            </Link>
          </li>

        </ul>
      </div>

      {/* Sidebar สำหรับหน้าจอขนาดเล็ก */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-8 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button
          className="text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        <ul className="mt-8 space-y-4 text-2xl">
          <li>
            <Link href="#hero">
              <span className={`hover:text-violet-600 ${activeSection === 'hero' ? 'border-b-2 border-violet-600 text-violet-600' : ''}`} onClick={() => setIsOpen(false)}>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <span className={`hover:text-violet-600 ${activeSection === 'about' ? 'border-b-2 border-violet-600 text-violet-600' : ''}`} onClick={() => setIsOpen(false)}>
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <span className={`hover:text-violet-600 ${activeSection === 'projects' ? 'border-b-2 border-violet-600 text-violet-600' : ''}`} onClick={() => setIsOpen(false)}>
                Projects
              </span>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
