"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { launchRocket, bounceBall, stackBooks, tinkerGears} from './animations';
import Skills from './../components/skills';

export default function Home() {
  const [isBirthday, setIsBirthday] = useState(false);
  const [age, setAge] = useState("22.000000000");
  const [title, setTitle] = useState("student");

  useEffect(() => {
    const birthDate = new Date('2002-10-23');
    const titles = ["rocket scientist", "physicist", "tinkerer", "student"];
    let titleIndex = 0;

    const updateTitle = () => {
      setTitle(titles[titleIndex]);
      titleIndex = (titleIndex + 1) % titles.length;
    };
    updateTitle();
    const titleInterval = setInterval(updateTitle, 3000); 

    const updateAge = () => {
      const now = new Date();
      const isBirthday = now.getDate() === birthDate.getDate() && now.getMonth() === birthDate.getMonth();
      setIsBirthday(isBirthday);
      const diff = now.getTime() - birthDate.getTime();
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge((isBirthday ? '🎉 ' : '') + ageInYears.toFixed(9).padStart(11, '0') + (isBirthday ? ' 🥳' : ''));
    };
    
    updateAge();
    const interval = setInterval(updateAge, 10);
    return () => {
      clearInterval(interval);
      clearInterval(titleInterval);
    };
  }, []);

  const handleTitleClick = () => {
    if (title === "rocket scientist") {
      launchRocket();
    } else if (title === "physicist") {
      bounceBall();
    } else if (title === "student") {
      stackBooks();
    } else if (title === "tinkerer") {
      tinkerGears();
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-8 gap-4 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <img src="/img/Abel_pfp.jpg" alt="Abel Gangeskar Horneland" className="w-72 h-72 rounded-full object-cover" />
        <h1 className="text-7xl font-bold text-center">
          Abel Gangeskar Horneland
        </h1>
        <p className="text-lg text-center sm:text-left max-w-2xl">
          I&#39;m a{' '}
          <span>
            <span
              className="font-bold"
              style={{
                display: 'inline-block',
                width: isBirthday ? '16ch' : '10ch',
                textAlign: 'right',
                fontVariantNumeric: 'tabular-nums',
                marginRight: '0.5ch',
              }}
            >
              {age}
            </span>{' '}
            year-old{' '}
            <span
              className="font-bold cursor-pointer"
              style={{
                display: 'inline-block',
                width: '13ch',
                textAlign: 'center',
                border: '2px solid #383838',
                borderRadius: '4px',
                padding: '0.2ch 0.5ch',
              }}
              onClick={handleTitleClick}
            >
              {title}
            </span>
          </span>{' '}
          who loves learning, sailing and solving challenging problems. {' '}
          This website is a collection of projects I&#39;ve worked on, and a place to share my thoughts and ideas.
        </p>
        <Skills />
      </main>
    </div>
  );
}
