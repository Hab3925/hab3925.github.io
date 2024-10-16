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
        <h1 className="text-5xl font-bold mb-2">Portfolio website</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: October 2024</h2>
        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
          <Image src="/img/portfolio/portfolio2.png" alt="Project Title" fill style={{ objectFit: 'contain' }} />
        </div>

        <div className="prose max-w-none">
            <h2>Overview</h2>
            <p>
              I have wanted to make my own portfolio wbsite for a while, mostly to have a place to showcase my projects. {' '}
              I have dabbled a bit in web development before with projects like {' '}
              <a href="/projects/the-captain">The Captain</a> and {' '} <a href="/projects/kerktheclonetrooper">kerktheclonetrooper</a>, {' '}
              but I always found it very tedious to both to develop and maintain websites. {' '}
              It turns out that making a website with a backend using express.js and pure html/css is not a very efficient way of developing a website. {' '}
              However, Gaute, the DevOps lead at Propulse NTNU for project 2025, made a guide on how to make a portfolio website using Next.js and Tailwind CSS, aswell as how to host it using github pages (which you can find <a href="https://gautegf.github.io/github_pages_guide">here</a>). {' '}
              I got a spark of inspiration one night and decided to make my own portfolio website using this guide. {' '}
            </p>
            <h2>Details</h2>
            <p>
              The tech behind this website is nothing revolutionary, it seems this is the best way to make this type of website right now. {' '}
              It is the first time I have used Next.js, and Tailwind CSS, which significantly streamlines the development process, and basically instantly made the website look good. {' '}
              It&#39;s also the first time I am using typescript, but since i already have done a lot of programming in both JavaScrpt and low-level languages like C, it was not a very big leap. {' '}
              Over all I haven&#39;t learned a lot of new things from this project, other than what technologies that currently exist for web development, and how they work. {' '}
              The entire framework of the website was completed in just two days, while writing all the content is taking a bit longer. {' '}
              I think the simplicity of setting up such a website is a testament to how far web development has come, and how easy it is to get started with it. {' '}
              I also think that the guide Gaute made gave me a very solid start for using these technologies, and I am very grateful for that. {' '}
              The simplicity of the website hopefully also makes it very easy to maintain, and I hope to keep it updated with new projects as I make them, and maybe expand it to include other things as well. {' '}
            </p>
            <p>
              If you have any feedback on the website, or if you have any questions about how I made it, feel free to contact me at <a href="mailto:abel.horneland@gmail.com">abel.horneland@gmail.com</a>. {' '}
              The repository with the code for the website is also public and can be found <a href="https://github.com/Hab3925/hab3925.github.io">here</a>, so you can add issues there if you prefer that. {' '}
            </p>
        </div>
      </div>
    </div>
  );
}