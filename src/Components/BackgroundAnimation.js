// src/Components/BackgroundAnimation.js
import React from 'react';
import { Animate } from 'react-simple-animate';
import airplane from '../Assets/demo3.png'; // Add your airplane image to the Assets folder

const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      {[...Array(5)].map((_, index) => (
        <Animate
          key={index}
          play
          duration={10}
          start={{ transform: 'translateX(-100%)' }}
          end={{ transform: 'translateX(100%)' }}
          sequenceIndex={index}
        >
          <img
            src={airplane}
            alt="Airplane"
            style={{
              position: 'absolute',
              top: `${index * 20}%`,
              width: '100px',
              height: 'auto',
            }}
          />
        </Animate>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
