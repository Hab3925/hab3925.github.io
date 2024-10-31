"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProjectPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-5xl font-bold mb-2">Kerktheclonetrooper</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: October 2020 - December 2020</h2>
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image src="/img/example.jpg" alt="Project Title" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="prose max-w-none">
          <p>
            Need to make the project run before i can write about it.
          </p>
          <a href="https://github.com/Hab3925/kerktheclonetrooper">See if you can do it before i get to it!</a>
        </div>
      </div>
    </div>
  );
}