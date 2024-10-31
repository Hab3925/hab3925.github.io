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
        <h1 className="text-5xl font-bold mb-2">Sound controlled lights</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: Feburary 2024 - April 2024</h2>
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image src="/img/sound_controlled_lights/sound-lights.png" alt="Sound lights" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="prose max-w-none">
          <p>
            Anohter project thats high up on the todo list because of how simple it is to write about.  📝
          </p>
            <Link href="/documents/TFY4190_instrumentering.pdf" target="_blank" rel="noopener noreferrer">
              Read the report here
            </Link>
        </div>
      </div>
    </div>
  );
}