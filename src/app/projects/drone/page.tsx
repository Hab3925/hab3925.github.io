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
        <h1 className="text-5xl font-bold mb-2">Creating a Drone body</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: June 2023 - August 2023</h2>
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image src="/img/example.jpg" alt="Project Title" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="prose max-w-none">
            <h2>Overview</h2>
            <p>
              This project was about creating a new body for a drone kit. I got a simple drone building kit including a controller, motors, a camera, batteries and a frame that could be controlled over Wifi with a smartphone app. {' '}
              I had bought my own 3D printer, but i had only downloaded models from Thingiverse to print so far. {' '}
              The goal of the project was to get better at CAD design for 3D printing, by itterating on a relativley complicated design that had a function. {' '}
            </p>
            <h2>Details</h2>
            <p></p>
            <h2>Challenges</h2>
            <p>Challenges faced during the project are described here.</p>
            <h2>Lessons Learned</h2>
            <p>Lessons learned from the project are highlighted here.</p>
        </div>
      </div>
    </div>
  );
}