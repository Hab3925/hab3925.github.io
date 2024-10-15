import React from 'react';
import Image from 'next/image';

export default function Skills() {
  const skills = [
    { name: 'Altium designer', icon: '/icons/altium-designer.png' },
    { name: 'node.js', icon: '/icons/node-js.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Fusion 360', icon: '/icons/fusion-360.svg' },
    { name: 'C/C++', icon: '/icons/cpp_logo.png' },
    { name: 'Catia', icon: '/icons/catia.png' },
    { name: 'Unity', icon: '/icons/unity3d.svg' },
    { name: 'STM32', icon: '/icons/stm32.png' },
    { name: 'Arduino', icon: '/icons/Arduino_Logo.svg' },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-16">
      <h2 className="text-3xl font-bold text-center mb-4">Experienced with</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out duration-300">
            <div className="w-12 h-12 mb-2 flex items-center justify-center relative">
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={48} // Set fixed width
                height={48} // Set fixed height
                className="max-w-full max-h-full object-contain" // You can still use Tailwind for further control
              />
            </div>
            <span className="text-lg font-semibold text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

