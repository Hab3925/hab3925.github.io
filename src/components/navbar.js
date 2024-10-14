"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setCurrentTheme(savedTheme);
  }, []);

  const clearAnimations = () => {
    const animatedEmojis = document.querySelectorAll('.animated-emoji');
    animatedEmojis.forEach((emoji) => emoji.remove());
    const clearButton = document.getElementById('clear-button');
    if (clearButton) clearButton.style.display = 'none';
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <nav className="p-2 w-full">
      <div className="w-full flex justify-center items-center px-16 space-x-16">
        <div className="text-2xl font-bold flex-shrink-0 flex items-center gap-4">
          <Link href="/" className="block rounded-full p-2 transition duration-300 ease-in-out" style={{ transition: 'background-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#416a91'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
          
        </div>
        <div className="md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="transition-colors duration-300"
          >
            {currentTheme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                <circle cx="12" cy="12" r="5" stroke="#FFA000" strokeWidth="2" fill="none" />
                <line x1="12" y1="2" x2="12" y2="6" stroke="#FFA000" strokeWidth="2" />
                <line x1="12" y1="18" x2="12" y2="22" stroke="#FFA000" strokeWidth="2" />
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="#FFA000" strokeWidth="2" />
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="#FFA000" strokeWidth="2" />
                <line x1="2" y1="12" x2="6" y2="12" stroke="#FFA000" strokeWidth="2" />
                <line x1="18" y1="12" x2="22" y2="12" stroke="#FFA000" strokeWidth="2" />
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="#FFA000" strokeWidth="2" />
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="#FFA000" strokeWidth="2" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
            </svg>
            )}
          </button>
        </div>
        <button id="clear-button"
          className="bg-red-500 text-white px-4 py-2 rounded-lg ml-auto hidden"
          onClick={clearAnimations}
        >
          Clear
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-8 mt-4 md:mt-0">
            <li>
              <Link href="/about" className="block py-2 px-4 rounded-lg" style={{ transition: 'background-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#416a91'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>About</Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2 px-4 rounded-lg" style={{ transition: 'background-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#416a91'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>Projects</Link>
            </li>
          </ul>
        </div>
       
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
      </div>
      </div>
    </nav>
  );
}

export const showClearButton = () => {
  const clearButton = document.getElementById('clear-button');
  if (clearButton) {
    clearButton.style.display = 'block';
  }
};