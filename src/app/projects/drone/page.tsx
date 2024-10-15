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
        <h1 className="text-5xl font-bold mb-2">Creating a drone body</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: 2017</h2>
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image src="/img/drone/drone.png" alt="Drone" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="prose max-w-none">
            <h2>Overview</h2>
            <p>
              This project was about creating a new body for a drone kit. I got a simple drone building kit including a controller, motors, a camera, batteries and a frame that could be controlled over Wifi with a smartphone app. {' '}
              I had bought my own 3D printer, but i had only downloaded models from Thingiverse to print so far. {' '}
              The goal of the project was to get better at CAD design for 3D printing, by itterating on a relativley complicated design that had a function. {' '}
            </p>
            <h2>Details</h2>
            <p>
              I made the drone in Fusion 360. I had played around trying to 3D model things in the built in 3D model viewer in Windows 10 by adding and subtracting shapes, which is a really bad idea, so figuring out Fusion 360 was a huge upgrade. {' '}
              To start with, the goal was to be able to replicate the original frame of the drone. {' '}
              The frame was a very simple laser cut design where the motors were &#34;pressfitted&#34; into the arms, the electronics were mounted on a plate in the middle, and the battery was strapped to the bottom with a rubber band. {' '}
              This made the design very easy to 3D print and test. {' '}
              I made a lot of mistakes in the beginning, mostly from not understanding how to measure the parts of the drone properly. {' '}
              I did a lot of prototype prints to  get things to fit together, and imported an image of the body into the design to get the shapes right. {' '} 
              The curved shapes introduced me to tools i had never used before, such as as arcs and slots. {' '}
              
            </p>
            <div className='flex flex-col items-center justify-center'>
              <Image src="/img/drone/sketch.png" alt="Drone body sketch" width={500} height={500} />
              <p className='mt-0'> <span className='font-bold'>Image:</span> The sketch used for the drone body. The body was mirrored twice after extruding (for some reason)</p>
            </div>

          (The rest of the text is missing, but the page is still a work in progress. I need to find more pictures from this project first.)
        </div>
      </div>
    </div>
  );
}