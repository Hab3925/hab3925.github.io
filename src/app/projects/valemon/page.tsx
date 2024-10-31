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
        <h1 className="text-5xl font-bold mb-2">Project Valemon</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: August 2023 - June 2024</h2>
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image src="/img/valemon/valemon.JPG" alt="Project Valemon" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="prose max-w-none">
          This is one of the big projects im procrastinating writing about. I will get to it eventually, I promise.
        </div>
      </div>
    </div>
  );
}