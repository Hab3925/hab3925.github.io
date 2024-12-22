"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const projects = [
  // { 
  //   title: 'Project 2025',
  //   image: '/img/2025/2025.jpg',
  //   link: '/projects/2025',
  //   description: 'Propulse\'s newest bi-liquid rocket project where i am the Cheif Technical Officer.',
  // },
  { 
    title: 'Project Floppen',
    image: '/img/floppen/final design.png',
    link: '/projects/floppen',
    description: 'Robot for the Robowars competition at Omega Verksted in october 2024',
    tags: ['Fusion 360', 'Arduino']
  },
  {
    title: 'Project Valemon',
    image: '/img/valemon/valemon.JPG',
    link: '/projects/valemon',
    description: 'The successor to Project Bifrost, a bigger and more ambitious bi-liquid rocket, for better of worse.',
    tags: ['Catia', 'Fusion 360', 'Altium Designer', 'STM32', 'C/C++', 'Python', 'Arduino']
  },
  {
    title: 'Simulating the Filling of a Tank',
    image: '/img/bachelor_thesis/bachelor_thesis.png',
    link: '/projects/bachelor-thesis',
    description: 'My bachelor thesis in physics on the thermodynamics of filling a COPV with high pressure nitrogen.',
    tags: ['Python', 'C/C++']
  },
  {
    title: 'Sound contolled lights',
    image: '/img/sound_controlled_lights/sound-lights.png',
    link: '/projects/sound-lights',
    description: 'Making the circuit and code for controlling LEDs with sound using an Arduino and a microphone.',
    tags: ['Arduino', 'C/C++', 'Altium Designer']
  },
  {
    title: 'Project Bifrost',
    image: '/img/bifrost/bifrost.JPG',
    link: '/projects/bifrost',
    description: 'My part in building and launching Norways first bi-liquid rocket.',
    tags: ['Fusion 360', 'C/C++', 'Python', 'Arduino']
  },
  {
    title: 'Ocean Game',
    image: '/img/ocean_game/ocean_game.png',
    link: '/projects/ocean-game',
    description: 'Playing around with shaders to make a cool ocean simulation in Unity using HLSL.',
    tags: ['Unity', 'C#'],
  },
  {
    title: 'Adlez',
    image: '/img/adlez/adlez.png',
    link: '/projects/adlez',
    description: 'A Zelda inspired game made in Unity together with a friend in Information Technology 2.',
    tags: ['Unity', 'C#'],
  },
  {
    title: 'The Captain',
    image: '/img/the_captain/the_captain.jpg',
    link: '/projects/the-captain',
    description: 'A discord bot and website tailored for the discord server of the game Volcanoids.',
    tags: ['Node.js'],
  },
  {
    title: 'kerktheclonetrooper',
    image: '/img/kerktheclonetrooper/kerktheclonetrooper.jpg',
    link: '/projects/kerktheclonetrooper',
    description: 'Merch website for "kerktheclonetrooper" that was shut down early due to lack of funds.',
    tags: ['Node.js'],
  },
  {
    title: 'Pong',
    image: '/img/pong/pong_menu.png',
    link: '/projects/pong',
    description: 'A simple pong game made in Unity to learn the basics of game development.',
    tags: ['Unity', 'C#'],
  },
  // Add more projects as needed
];

export default function ProjectsGallery() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <p className='text-center mb-8'>(This page is a work in progress. Most of the pages dont have any content yet.)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.link}>
              <div className="group">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h2 className="mt-4 text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">{project.title}</h2>
                <p className="text-gray-500 mt-2">{project.description}</p>
                {/* <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
