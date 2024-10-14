import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist">
      <main className="flex flex-col gap-8 items-center max-w-2xl">
        <div className="profile-section flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center mt-4">About me</h1>
        </div>
        <div className="description-section text-left text-lg max-w-2xl">
        <p> 
          Hi, I&#39;m <span className="font-bold">Abel</span>, a <span className="font-bold">physics student</span> at NTNU with a passion for thermodynamics, fluid dynamics, and numerical physics. {' '}
          In addition to my studies, I serve as the <span className="font-bold">Chief Technical Officer</span> at {' '}
          <a href="https://propulse.no" className="underline hover:text-blue-700">Propulse</a>.{' '} 
          I enjoy learning through hands-on projects that challenge me to think differently and explore new perspectives.{' '} 
          I consider myself a <span className="font-bold">generalist</span> with a diverse skill set, always looking to expand my knowledge and take on new challenges.{' '} 
        </p>
        <br />
        <p> 
          I have tried my hand at many different things, from learning <span className="font-bold">game development</span> to <span className="font-bold">CAD software</span> for <span className='font-bold'>3D-printing</span> to <span className='font-bold'>PCB design</span>.
          With every project i take on, I try to learn as many new skills as possible, and to get better at the ones i already have. {' '}
          My favorite aspect of this journey is applying my understanding to simulate and model physical systems, using those models to solve real-world problems. {' '}
        </p>
        <br />
        <p>
          Currently a lot of my free time goes to <span className='font-bold'>Propulse</span>, a voulantary student organization that builds bi-liquid sounding rockets with the ambition of reaching space one day. {' '}
          This is my third year in the organization, and it has given me a lot of experience both with the technical side of rocketry and engineering, and with project management, teamwork and leadership. {' '}
        </p>
        <br />
        <p>
          Ever since the Falcon Heavy landed both boosters at the same time in 2018, i have been fascinated by the engineering challenges of rocket science. {' '}
          To get to work with rockets in Propulse and learn so much about things i used to think were impossible has been a dream come true. {' '}
          I hope to work with something similar in the future, and I hope that Propulse can inspire the Norwegian space industry to develop civil rocket technology in the future. {' '}
        </p>
        <br />
        <p>
          When I&#39;m not busy trying to learn new things, I enjoy playing video games, sailing, reading books, and building legos. {' '}
          Currently, i am playing <span className='font-bold italic'>Baldurs Gate 3</span>, and reading <span className="font-bold italic">Lord of the Rings</span>. {' '}
          My proudest lego build is the <span className="font-bold italic">Titanic</span> set, but the lego cities I used to have in my room still hold a special place in my heart. {' '}
          I own a Laser dinghy that i haven&#39;t sailed in a while, but i hope to get back on the water soon. {' '}
        </p>
        <br />
        <p>
          If you are interested in my work, are passionate about rocket science or physics, or just want to chat, feel free to reach out to me at <span className='font-bold'> <a href='mailto:abel.horneland@gmail.com'>abel.horneland@gmail.com</a></span>, or connect with me on <span className='font-bold'><a href='https://www.linkedin.com/in/abel-horneland-3999bb236/'>LinkedIn</a></span>. {' '}
          I look forward to hearing from you! {' '}
        </p>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
