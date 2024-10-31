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
        <h1 className="text-5xl font-bold mb-2">Ocean game</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: Feburary 2022 - March 2022</h2>
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image src="/img/ocean_game/ocean_game.png" alt="Project Title" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="prose max-w-none">
          <p>
            Its on the todolist 🫡
          </p>
          <a href="https://github.com/Hab3925/Ocean-game">Look at the code in the meantime</a>

        </div>
      </div>
    </div>
  );
}