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
        <h1 className="text-5xl font-bold mb-2">Pong!</h1>
        <h2 className="text-2xl font-light mb-8">Worked on: December 2019</h2>
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image src="/img/pong/pong_menu.png" alt="Pong!" fill style={{ objectFit: 'contain' }} />
        </div>

        <div className="prose max-w-none">
            <h2>Why I created Pong!</h2>
            <p>
              Pong! Was a small project i made in Unity to get started with game development. {' '} 
              I had played around in Unity before, making small things following tutorials by <a href="https://www.youtube.com/@Brackeys"> Brackeys</a> on youtube. {' '}
              But I had never made my own game from start to finish, and wanted to learn what the full process looked like from creating the project to having a finished build. {' '}
              I decided that making the scope of the game small would be the best way to capture the whole process. {' '}
              The previous game projects i worked on always started with grand ideas that ended up not even comming close to being realized. {' '}
              I was inspired by a youtube video where someone made a pong game with an Arduino and an LED matrix, and thought that would be a fun project to make in Unity, and thus this project was born. {' '}
            </p>
            <h2>Details</h2>
            <p>
              I made pong on my laptop while on christmas break with my grandparents in 2019. {' '}
              This meant i had a lot of free time, and got to do a lot of work on the game and finish it in a week. {' '}
              The game is a simple 2D game made in Unity where two players control one paddle each with the "W" and "S" key, and up and down keys, to try to hit the ball past the other player. {' '}
              First to 10 points wins. The most challenging part of the project was getting the physics of the ball right, making sure it bounced off the walls and giving the players athority over the trajectory of the ball. {' '}
              I playtested a lot with my brother to tune the speed of the paddles and the movement of the ball to make the game fun and challenging. {' '}
              During playtests we found that the game was most fun when the ball moved fast and the paddles were slow, making the game a test of reflexes and the ability of the player to predict the trajectory of the ball. {' '}
            </p>
            <p>
              After the gameplay felt right i added the score system and the win condition, together with a pause menu so that we could pause our matches to eat dinner. {' '}
              I also added a main menu scene with a play button that loaded the game scene, and a quit button that closed the game. {' '}
              I also managed to make a build of the game for windows, making it my first finished game project, which was the goal from the beginning. {' '}
              It is a very simple game, but it was a great learning experience and a lot of fun to make and play against my brother (he is VERY competetive).
              You can find the code and the assets for the game on my <a href="https://github.com/Hab3925/Pong">github</a>. I have also embedded the game below so you can play it yourself! {' '}
            </p>
            <h2>Play the game!</h2>
            <p> 
              I managed to dig up the files and build the game and embed it below :) The game has two players, player 1 is controlled with "W" and "S" while player 2 is controlled with the up and down keys. First to 10 points wins! {' '}
              I recommend playing against someone competietive 🏓
            </p>
            <p>(It probably doesn't work on mobile, but it was enough work making it work on PC so sorry about that)</p>
          
            <div className="flex justify-center items-center h-screen overflow-hidden">
              <div className="relative w-full max-w-3xl" style={{ paddingTop: '56.25%' }}>
                {/* 16:9 Aspect Ratio (56.25%) */}
                <iframe
                  src="/pong/index.html"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="fullscreen"
                ></iframe>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}