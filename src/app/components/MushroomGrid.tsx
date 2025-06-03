
'use client';
import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';


const mushrooms = [
  { id: '1', src: 'mushroom/mushroom1.png'},
  { id: '2', src: 'mushroom/mushroom2.png'},
  { id: '3', src: 'mushroom/mushroom3.png'},
  { id: '4', src: 'mushroom/mushroom4.png'},
  { id: '5', src: 'mushroom/mushroom5.png'},
  { id: '6', src: 'mushroom/mushroom6.png'},
  { id: '7', src: 'mushroom/mushroom7.png'},
];

function getLinePosition(index: number, total: number) {
  const baseLeft = (index / (total - 1)) * 70 + 15; // Distribute across 70% of width, with 15% padding
  const verticalVariation = Math.sin(index * 1.5) * 15; // Create wavy pattern
  const scale = 0.8 + Math.random() * 0.4; 
  const rotate = Math.floor(Math.random() * 20) - 10; 
  return { 
    top: 40 + verticalVariation,
    left: baseLeft,
    scale, 
    rotate 
  };
}

export default function MushroomGrid() {
  const [positions, setPositions] = React.useState<Array<ReturnType<typeof getLinePosition>>>([]);

  React.useEffect(() => {
    setPositions(mushrooms.map((_, index) => getLinePosition(index, mushrooms.length)));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {mushrooms.map((mushroom, index) => {
        const position = positions[index] || { top: 40, left: 15 + (index / (mushrooms.length - 1)) * 70, scale: 1, rotate: 0 };
        return (
          <Link href={`/mushroom/${mushroom.id}`} key={mushroom.id}>
            <motion.img
              src={mushroom.src}
              alt={`Mushroom ${index}`}
              className="absolute"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: `scale(${position.scale}) rotate(${position.rotate}deg)`,
                maxWidth: '150px', // Increased from 100px to 150px
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            />
          </Link>
        );
      })}
    </div>
  );
}