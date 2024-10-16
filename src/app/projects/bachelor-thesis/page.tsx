"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProjectPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-5xl font-bold mb-2">Project Title</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: January 2024 - April 2024</h2>
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image src="/img/example.jpg" alt="Project Title" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="prose max-w-none">
            <h2>Overview</h2>
            <p>A brief overview of the project goes here.</p>
            <h2>Details</h2>
            <p>Detailed information about the project goes here.</p>
            <h2>Challenges</h2>
            <p>Challenges faced during the project are described here.</p>
            <h2>Lessons Learned</h2>
            <p>Lessons learned from the project are highlighted here.</p>
            <Link href="/documents/Bachelorprosjekt_William_og_Abel.pdf" target="_blank" rel="noopener noreferrer" >
              Read the full thesis here
            </Link>
        </div>
      </div>
    </div>
  );
}